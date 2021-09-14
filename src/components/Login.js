import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <div className="login-container">
                <div className="login-wrapper">
                    <input id="tab1" type='radio' name='tab' class="sign-in" checked/><label for="tab1" class="tab">Sign In</label>
                    <input id="tab2" type='radio' name='tab' class="sign-up" /><label for="tab2" class="tab">Sign Up</label>
                    <div className="form-container">
                        <div className="signin">
                            <form className="signin-form">
                                <input id="username" type="text" class="input" placeholder="Username"/>
                                <input id="password" type ="password" class="input" data-type="password" placeholder="Password"/>
                                <button type="submit" ><b>Sign in</b></button>
                            </form>
                            <div className="link">
                                <a>Forgot password?</a>
                            </div>
                        </div>
                        <div className="signup">
                            <form className="signup-form">
                                <input id="username" type="text" class="input" placeholder="Username"/>
                                <input id="password" type ="password" class="input" data-type="password" placeholder="Password"/>
                                <input id="password" type ="password" class="input" data-type="password" placeholder="Confirm your Password"/>
                                <button type="submit" ><b>Sign up</b></button>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Login;