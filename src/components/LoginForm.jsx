import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const { setToken, setUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = await axios.post("//localhost:8000/api/v1/login", {
            email,
            password
        })

        setToken(data.data.access_token);

        let request = await axios.get(`${BASE_URL}user_info`, {
            headers: {
                'Authorization': `Bearer ${data.data.access_token}`
            }
        });
        setUser(request.data);
        navigate("/")
    }

    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const passwordInput = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className='container mt-4'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Name</label>
                    <input onChange={emailInput} type="text" className="form-control" name="user-name" placeholder="Type your user name." />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-password" className="form-label">Password</label>
                    <input onChange={passwordInput} type="password" className="form-control" name="user-password" placeholder="*******" />
                </div><br />
                <button type="submit" className="btn btn-primary mt-3">Sign in</button>
            </form>
        </div>
    );
}

export default LoginForm;