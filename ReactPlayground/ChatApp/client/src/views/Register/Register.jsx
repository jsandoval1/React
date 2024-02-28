import React, { useRef } from 'react'
import './Register.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import api from '../../config/axiosConfig'


function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            console.log(user)
            try {
                await api.post("/register", user);
                navigate('/login')
            } catch (err) {
                console.log(err)
            }
        }
    }


    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Sandoval Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Social.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" className="loginInput" ref={username} required />
                        <input placeholder="Email" className="loginInput" ref={email} required />
                        <input placeholder="Password" className="loginInput" ref={password} required minLength={6} />
                        <input placeholder="Confirm Password" className="loginInput" ref={passwordAgain} required />
                        <button className="loginButton" type="submit"> Sign Up </button>
                        <span className="loginForgot"> Forgot Password? </span>
                        <Link to="/login" className="loginRegisterButton"> Log into your account </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Register