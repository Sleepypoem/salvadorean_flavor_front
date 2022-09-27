import axios from 'axios';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';

function RegisterSection(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [image, setImage] = useState("");
    const [validatedConfirmPass, setValidatedConfirmPass] = useState("is-valid");
    const [validatedPass, setValidatedPass] = useState("is-valid");

    const { setToken, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleName = (e) => {
        let text = e.target.value;
        setName(text);
    }

    const handleEmail = (e) => {
        let text = e.target.value;
        setEmail(text);
    }

    const handlePassword = (e) => {
        let text = e.target.value;
        setPassword(text);;
    }

    const handlePasswordConfirm = (e) => {
        let text = e.target.value;
        setPasswordConfirm(text);
    }

    function encodeImageFileAsURL(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        validatePass();
        validateSecondPass();
        if (validatedPass === "is-valid" && validatedConfirmPass === "is-valid") {

            let newUser = {
                name,
                email,
                password,
                image
            }

            let request = await axios.post(`${BASE_URL}register/user`, newUser);

            setToken(request.data?.access_token);

            if (request.status !== 401) {
                let request_user_info = await axios.get(`${BASE_URL}user_info`, {
                    headers: {
                        'Authorization': `Bearer ${request.data.access_token}`
                    }
                });
                setUser(request_user_info.data);
                navigate("/")
            }
        }


    }

    const validateSecondPass = () => {
        if (password != passwordConfirm) {
            setValidatedConfirmPass("is-invalid")
        } else {
            setValidatedConfirmPass("is-valid")
        }
    };

    const validatePass = () => {

        let reg = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
        if (reg.test(password)) {
            setValidatedPass("is-valid")

        } else {
            setValidatedPass("is-invalid")
        }
    };

    return (
        <div className='container w-50'>
            <form className='needs-validation' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="user-name" className="form-label">Enter your name.</label>
                    <input onChange={handleName} type="text" className="form-control" id="user-name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="user-email" className="form-label">Enter your email address.</label>
                    <input onChange={handleEmail} type="text" className="form-control" id="user-email" />
                </div>
                <div class="input-group has-validation flex-column">
                    <div className="mb-3">
                        <label htmlFor="user-password" className="form-label">Password.</label>
                        <input onChange={handlePassword} type="password" className={`form-control ${validatedPass}`} id="user-password" />
                        <div class="invalid-feedback">
                            Password must be at least 8 characters long, must contain an uppercase letter and one number.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="user-password-confirm" className="form-label">Confirm password.</label>
                        <input onChange={handlePasswordConfirm} type="password" className={`form-control ${validatedConfirmPass}`} id="user-password-confirm" />
                        <div class="invalid-feedback">
                            Password must match.
                        </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="user-image" class="form-label">Upload a image.</label>
                    <input onChange={encodeImageFileAsURL} type="file" class="form-control" id="user-image" />
                </div>
                <div className='container d-flex flex-row justify-content-between'>
                    <button type="submit" className="btn btn-primary ">Sign up</button>
                    <div className='d-flex flex-row align-items-center justify-content-center'>
                        <h6 >Already have an account? &nbsp;</h6><Link className='btn btn-success btn-sm' to="/login">Sign in</Link></div>
                </div>
            </form>
        </div>
    );
}

export default RegisterSection;