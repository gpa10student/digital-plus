const express = require('express');
const app = express();
const cors = require("cors");
const pool = require('./db');

app.use(cors());
app.use(express.json());

//注册新用户
app.post("/register", async(req, res) => {
    try{
        const {registerUsername, registerPassword, confirmPassword} = req.body;

        console.log(registerUsername, registerPassword, confirmPassword)

        if(registerPassword.localeCompare(confirmPassword) !== 0){
            res.status(401).json("Confirm password not match")
        }
        else{
            const existUser = await pool.query(
                "SELECT * FROM users WHERE user_name = $1",
                 [registerUsername]
            );

            if(existUser.rows.length > 0){
                res.status(401).json("User already exists")
            }
            else{
                const newUser = await pool.query(
                    "INSERT INTO users (user_name, user_password) VALUES ($1, $2) RETURNING *",
                     [registerUsername, registerPassword]
                );
        
                res.json("Registered successfully");
            }
        }

    } catch (err){
        console.error(err.message);
    }
})

//登陆
app.post("/login", async(req, res) => {
    try{
        const {loginUsername, loginPassword} = req.body;
        const user = await pool.query(
            "SELECT * FROM users WHERE user_name = $1",
             [loginUsername]
        );
        console.log(user.rows)
        if(user.rows.length === 0){
            console.log(user.rows.length)
            res.status(401).json("User doesn't exists");
        }
        else if(user.rows[0].user_password.localeCompare(loginPassword)){
            res.status(401).json("Invalid password");
        }
        else{
            res.json("Logged in successfully");
        }
    } catch (err){
        console.error(err.message);
    }

})

app.listen(5000, () => {
    console.log('Server is starting on port 5000');
})