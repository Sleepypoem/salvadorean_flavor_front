import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL, IMAGE_URL } from '../utils/Links';
import './RecipeForm.css';

function IngredientForm(props) {

    const { ingredient } = props;
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

        axios.post(`${BASE_URL}ingredient`, newIngredient, {
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

        axios.put(`${BASE_URL}ingredient/${ingredient?.ingredient_id}`, newIngredient, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        navigate("/ingredients");
    }

    useEffect(() => {
        if (ingredient !== null) {
            setEditing(true);
        }
    }, [ingredient])

    return (
        <div className='container w-50 my-4'>
            <section className='Form'>
                <h1>{editing ? "Edit" : "Add a new"} ingredient!</h1>
                <form className='FormBody needs-validation' onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="ingredient-name" class="form-label">Enter name.</label>
                        <input onChange={inputName} type="text" defaultValue={ingredient?.name} class="form-control" id="ingredient-name" />
                    </div>
                    {ingredient?.image?.image ? <div className='text-center'><h3>Current image</h3><img src={`${IMAGE_URL}ingredient/${ingredient?.image?.image}`} alt={ingredient?.name} /></div> : ""}
                    <div class="mb-3">
                        <label for="ingredient-image" class="form-label">{editing ? "Edit" : "Enter"} image</label>
                        <input onChange={encodeImageFileAsURL} type="file" class="form-control" id="ingredient-image" />

                    </div>

                    <button type="submit" class="btn btn-primary">{editing ? "Edit" : "Add"} ingredient</button>
                </form>
            </section>
        </div>
    );
}

export default IngredientForm;