import React from "react";
import './LoginForm.css';
import { FaUser  } from "react-icons/fa";
import { TbLockPassword } from "react-icons/tb";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <TbLockPassword className="icon"/>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>

                <div className="register">
                    <p>Do you have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;