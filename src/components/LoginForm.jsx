import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <div className='container mt-4 w-50'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Name</label>
                    <input onChange={emailInput} type="text" className="form-control" name="user-name" placeholder="Type your user name." />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-password" className="form-label">Password</label>
                    <input onChange={passwordInput} type="password" className="form-control" name="user-password" placeholder="*******" />
                </div>
                <div className='container d-flex flex-row justify-content-between'>
                    <button type="submit" className="btn btn-primary ">Sign in</button>
                    <div className='d-flex flex-row align-items-center justify-content-center'>
                        <h6 >You don't have an account? &nbsp;</h6><Link className='btn btn-success btn-sm' to="/register">Sign up</Link></div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;