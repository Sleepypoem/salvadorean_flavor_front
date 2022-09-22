import axios from 'axios';
import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setToken, token } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = await axios.post("//localhost:8000/api/v1/login", {
            email,
            password
        })

        setToken(data.data.access_token);
    }

    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className='container'>
            <h1>{token}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Name</label>
                    <input onChange={emailInput} type="text" className="form-control" name="user-name" placeholder="Type your user name." />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-password" className="form-label">Password</label>
                    <input onChange={passwordInput} type="password" className="form-control" name="user-password" placeholder="*******" />
                </div><br />
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    );
}

export default Login;