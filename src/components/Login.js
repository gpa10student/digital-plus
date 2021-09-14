import React from 'react';
import "./Login.css";

const Login = () =>{
    return(
        <div className="login-container">
            <div className="login-wrapper">
                <input id='tab1' type='radio' className='sign-in' name='tab' checked/><label for = 'tab1' className='tab'>Sign in</label>
                <input id='tab2' type='radio' className='sign-up' name='tab'/><label for = 'tab2' className='tab'>Sign up</label>

                <div className='form-container'>
                    <div className='signin'>
                        <form className='signin-form'>
                            <input type='text' placeholder="Username"/>
                            <input type='password' placeholder='Password'/>
                            <button type='submit'>Sign in</button>
                        </form>
                        <div className='link'>
                            <a href='#'>Forgot password?</a>
                        </div>
                    </div>

                    <div className='signup'>
                        <form className='signup-form'>
                            <input type='text' placeholder="Username"/>
                            <input type='password' placeholder='Password'/>
                            <input type='password' placeholder='Confirm your password'/>
                            <button type='submit'>Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;