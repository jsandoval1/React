import React, { useRef } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';

import './Login.css'
import { BeatLoader } from 'react-spinners'

import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';



function Login() {
    const email = useRef()
    const password = useRef()
    const { user, isFetching, dispatch, error } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value
        },
            dispatch);
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
                        <input placeholder="Email" className="loginInput" ref={email} required />
                        <input placeholder="Password" className="loginInput" ref={password} required />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? <BeatLoader color='white' size={10} /> : 'Log In'}
                        </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register" className="loginRegisterButtonLink">
                            <button className="loginRegisterButton" disabled={isFetching}>
                                {isFetching ? <BeatLoader color='white' size={10} /> : 'Create a New Account'}
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login