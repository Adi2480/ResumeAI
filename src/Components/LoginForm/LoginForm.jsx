import React from "react";

const LoginForm = () => {
    return (
        <div className="wrapper">
            <form action="">
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" />Remember Me</label>
                    <a href="#">Forget Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;