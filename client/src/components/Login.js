import React, { Fragment, useState } from 'react';
import './Login.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({setAuth}) => {
    const [loginInputs, setLoginInputs] = useState({
        loginUsername: "",
        loginPassword: "",
    })

    const [registerInputs, setRegisterInputs] = useState({
        registerUsername: "",
        registerPassword: "",
        confirmPassword: "",
    })

    const {loginUsername, loginPassword} = loginInputs;
    const {registerUsername, registerPassword, confirmPassword} = registerInputs;

    const loginOnChange = e => setLoginInputs(
        {...loginInputs, [e.target.name]: e.target.value}
    );
    
    const registerOnChange = e => setRegisterInputs(
        {...registerInputs, [e.target.name]: e.target.value}
    );

    const loginOnSubmitForm = async e =>{
        e.preventDefault();
        try{
            const body = {loginUsername, loginPassword};
            const response = await fetch("http://localhost:5000/login",
                {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json();

            if(response.status === 200){
                setAuth(true);
                toast.success("Logged in Successfully");
            }
            else{
                setAuth(false);
                toast.error(parseRes)
            }
        } catch (err){
            console.error(err.message);
        }
    }

    const registerOnSubmitForm = async e =>{
        e.preventDefault();
        try{
            const body = {registerUsername, registerPassword, confirmPassword};
            const response = await fetch("http://localhost:5000/register",
                {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json();

            if(response.status === 200){
                setAuth(true);
                toast.success("Registered successfully");
            }
            else{
                setAuth(false);
                toast.error(parseRes);
            }
        } catch (err){
            console.error(err.message);
        }
    }



    return (
        <Fragment>
            <div>
                <div className="login-container">
                    <div className="login-wrapper">
                        <input id="tab1" type='radio' name='tab' className="sign-in" defaultChecked/><label htmlFor="tab1" className="tab">Sign In</label>
                        <input id="tab2" type='radio' name='tab' className="sign-up" /><label htmlFor="tab2" className="tab">Sign Up</label>
                        <div className="form-container">
                            <div className="signin">
                                <form className="signin-form" onSubmit={loginOnSubmitForm}>
                                    <input 
                                        type="text" 
                                        placeholder="Username"
                                        name="loginUsername"
                                        onChange={e => loginOnChange(e)}/>
                                    <input
                                        type ="password" 
                                        data-type="password" 
                                        placeholder="Password"
                                        name="loginPassword"
                                        onChange={e => loginOnChange(e)}/>
                                    <button type="submit" ><b>Sign in</b></button>
                                </form>
                                <div className="link">
                                    <a>Forgot password?</a>
                                </div>
                            </div>
                            <div className="signup">
                                <form className="signup-form" onSubmit={registerOnSubmitForm}>
                                    <input 
                                        type="text" 
                                        placeholder="Username"
                                        name="registerUsername"
                                        onChange={e => registerOnChange(e)}/>
                                    <input 
                                        type ="password" 
                                        data-type="password" 
                                        placeholder="Password"
                                        name="registerPassword"
                                        onChange={e => registerOnChange(e)}/>
                                    <input 
                                        type ="password" 
                                        data-type="password" 
                                        placeholder="Confirm your Password"
                                        name="confirmPassword"
                                        onChange={e => registerOnChange(e)}/>
                                    <button type="submit" ><b>Sign up</b></button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;