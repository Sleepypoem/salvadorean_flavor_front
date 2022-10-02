import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useCallback } from 'react';
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
        let data = await axios.post(`${BASE_URL}login`, {
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

    const inputHandler = useCallback((setter) => {
        return async (e) => {
            let text = e.target.value;
            setter(text);
        }
    }, [])

    return (
        <div className='container mt-4 w-50 border-top border-bottom border-dark p-3'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Name</label>
                    <input onChange={inputHandler(setEmail)} type="text" className="form-control" name="user-name" placeholder="Type your user name." />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-password" className="form-label">Password</label>
                    <input onChange={inputHandler(setPassword)} type="password" className="form-control" name="user-password" placeholder="*******" />
                </div>
                <div className="form-check form-check-inline mb-3">
                    <input className="form-check-input" type="checkbox" id="keep-signed" value="keep" />
                    <label className="form-check-label" htmlFor="keep-signed">Keep me signed in</label>
                </div>
                <div className='container d-flex flex-row justify-content-between'>
                    <button type="submit" className="btn btn-primary ">Sign in</button>
                    <div className='d-flex flex-row align-items-center justify-content-center'>
                        <h6 >You don't have an account? &nbsp;</h6><Link className='btn btn-success' to="/register">Sign up</Link></div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;