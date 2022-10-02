import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL, IMAGE_URL } from '../utils/Links';
import './RecipeForm.css';
import Select from 'react-select'
import { useCallback } from 'react';
import { validate } from '../utils/Validation';

function RecipeForm(props) {

    const { recipe, defaultIngredients, defaultCategory } = props;

    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [editing, setEditing] = useState(false);
    const [ingredientsOpt, setIngredientsOpt] = useState([]);
    const [categorysOpt, setCategoryOpt] = useState([]);
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

    /**
     * Assign input field value to state.
     */
    const handleInput = useCallback((setter) => {
        return async (e) => {
            let text = e.target.value;
            setter(text);
        }
    }, [])

    const inputIngredients = (e) => {

        setIngredients(e);
    }

    const inputCategories = (e) => {

        setCategory(e);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate(name, "no-empty")) {
            alert("error in name")
        };
        editing ? editRecipe() : addRecipe();

    }

    const addRecipe = async () => {
        let ingredientIds = ingredients.map((ingredient) => ingredient.value);
        let newRecipe = {
            name,
            steps,
            "category_id": category,
            ingredients: ingredientIds,
            image
        }


        try {
            let request = await axios.post(`${BASE_URL}recipe`, newRecipe, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            });
        } catch (error) {
            alert("Error")
            console.log(error);
            return
        }

        navigate("/recipes");
    }



    const editRecipe = async () => {
        let ingredientIds = ingredients.map((ingredient) => ingredient.value);
        let newRecipe = {
            name,
            steps,
            "category_id": category,
            ingredients: ingredientIds,
            image
        }

        let request = await axios.put(`${BASE_URL}recipe/${recipe?.recipe_id}`, newRecipe, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        console.log(request);
        /*  if (request.response.status === 404) {
             alert("Error")
         } */

        navigate("/recipes");
    }

    const getIngredients = useCallback(async () => {
        let request = await axios.get(`${BASE_URL}ingredients`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        let ingredientOptions = [];
        // eslint-disable-next-line
        request.data?.map((ingredient) => {
            ingredientOptions.push({ "value": ingredient?.ingredient_id, "label": ingredient?.name })
        })

        setIngredientsOpt(ingredientOptions);
    }, [token])

    const getCategories = useCallback(async () => {
        let request = await axios.get(`${BASE_URL}categories`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        let categoryOptions = [];
        // eslint-disable-next-line
        request.data?.data?.map((category) => {
            categoryOptions.push({ "value": category?.category_id, "label": category?.name })
        })
        setCategoryOpt(categoryOptions);
    }, [token])

    useEffect(() => {
        setName(recipe?.name)
        setSteps(recipe?.steps)
        setImage(recipe?.image?.image)
        setIngredients(defaultIngredients)
        setCategory(defaultCategory)
        getIngredients();
        getCategories();

    }, [getIngredients, getCategories, recipe, defaultIngredients, defaultCategory])

    useEffect(() => {
        if (recipe !== null) {
            setEditing(true);

        }
    }, [props?.recipe, recipe])

    return (

        <div className='container my-4'>
            <section className='Recipeform'>
                <h1>{editing ? "Edit" : "Add a new"} recipe!</h1>
                <form className='Form' onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="recipe-name" className="form-label">Recipe name</label>
                        <input onChange={handleInput(setName)} type="text" defaultValue={recipe?.name} className="form-control" name="recipe-name" placeholder="Type recipe name." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="recipes" className="form-label">Ingredients</label>
                        <Select onChange={inputIngredients}
                            isMulti
                            name="colors"
                            options={ingredientsOpt}
                            value={ingredients}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="steps" className="form-label">Instructions</label>
                        <textarea onChange={handleInput(setSteps)} className="form-control" name="steps" defaultValue={recipe?.steps} placeholder="Type instructions."></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <Select onChange={inputCategories}
                            name="colors"
                            options={categorysOpt}
                            value={category}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                    {editing ? <div className='text-center'><h3>Current image</h3><img width="300px" className='mx-auto' src={`${IMAGE_URL}recipe/${image}`} alt="Recipe" style={{ display: "block" }} /></div> : ""}
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input onChange={encodeImageFileAsURL} type="file" className="form-control" name="image" placeholder="Add a image." />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default RecipeForm;