import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';

function IngredientForm(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [editing, setEditing] = useState(false);
    const { token } = useContext(UserContext);
    const navigate = useNavigate();


    function encodeImageFileAsURL(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = function () {
            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const inputName = (e) => {
        let text = e.target.value;
        setName(text);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        editing ? editIngredient() : addIngredient();

    }

    const addIngredient = () => {
        let newIngredient = {
            name,
            image
        }

        let request = axios.post(`${BASE_URL}ingredient`, newIngredient, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        navigate("/ingredients");
    }

    const editIngredient = () => {
        let newIngredient = {
            name,
            image
        }

        let request = axios.put(`${BASE_URL}ingredient/${props?.id}`, newIngredient, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        navigate("/ingredients");
    }

    useEffect(() => {
        props?.name ? setName(props.name) : setName("");
        if (props !== undefined) {
            setEditing(true);
        }
    }, [props])

    return (
        <div className='container w-50 my-4'>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="ingredient-name" class="form-label">Enter name.</label>
                    <input onChange={inputName} type="text" value={name} class="form-control" id="ingredient-name" />
                </div>

                <div class="mb-3">
                    <label for="ingredient-image" class="form-label">Enter image</label>
                    <input onChange={encodeImageFileAsURL} type="file" class="form-control" id="ingredient-image" />
                    {props?.image ? <small className='text-muted'>Current image: {props?.image}</small> : ""}
                </div>

                <button type="submit" class="btn btn-primary">{editing ? "Edit" : "Add"} ingredient</button>
            </form>
        </div>
    );
}

export default IngredientForm;