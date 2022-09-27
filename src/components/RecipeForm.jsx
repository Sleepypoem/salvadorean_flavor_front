import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';
import './RecipeForm.css';

function RecipeForm(props) {

    const { recipe } = props;
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState("");
    const [category, setCategory] = useState("");
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

    const inputSteps = (e) => {
        let text = e.target.value;
        setSteps(text);
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

        <div className='container'>
            <section className='Recipeform'>
                <h1>Add a new recipe!</h1>
                <form className='Form' >
                    <div className="mb-3">
                        <label htmlFor="recipe-name" className="form-label">Recipe name</label>
                        <input type="text" className="form-control" name="recipe-name" placeholder="Type recipe name." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ingredients" className="form-label">Ingredients</label>
                        <input type="text" className="form-control" name="ingredients" placeholder="Type ingredients." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="steps" className="form-label">Instructions</label>
                        <input type="text" className="form-control" name="steps" placeholder="Type instructions." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input type="text" className="form-control" name="category" placeholder="Add a category." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input type="file" className="form-control" name="image" placeholder="Add a image." />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </section>

        </div>
    );
}

export default RecipeForm;