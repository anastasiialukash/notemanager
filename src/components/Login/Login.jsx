import React, {useState} from "react";
import PropTypes from 'prop-types';
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export const Login = ({setToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <div>
            <Header/>
            <div className="login-wrapper" style={{marginTop:"100px"}}>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" onChange={e => setUserName(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)}/>
                    </label>
                    <div style={{marginTop: "15px"}}>
                        <button type="submit" style={{marginLeft: "35px"}}>Sign in</button>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}