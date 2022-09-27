import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';
import './RecipeForm.css';
import Select from 'react-select'

function RecipeForm(props) {

    const { recipe } = props;
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(true);
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

    const inputName = (e) => {
        let text = e.target.value;
        setName(text);
    }

    const inputSteps = (e) => {
        let text = e.target.value;
        setSteps(text);
    }

    const inputIngredients = (e) => {
        let ingredientList = [];
        e.map((id) => {
            ingredientList.push(id.value);
        })
        setIngredients(ingredientList);
    }

    const inputCategories = (e) => {

        setCategory(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        editing ? editRecipe() : addRecipe();

    }

    const addRecipe = () => {
        let newRecipe = {
            name,
            steps,
            "category_id": category,
            ingredients,
            image
        }

        let request = axios.post(`${BASE_URL}recipe`, newRecipe, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        navigate("/recipes");
    }

    const editRecipe = () => {
        let newRecipe = {
            name,
            steps,
            "category_id": category,
            ingredients,
            image
        }

        let request = axios.put(`${BASE_URL}recipe/${recipe?.recipe_id}`, newRecipe, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        navigate("/recipes");
    }

    const getIngredientList = async () => {
        setLoading(true);
        let request = await axios.get(`${BASE_URL}ingredients`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        let ingredientOptions = [];
        request.data?.map((ingredient) => {
            ingredientOptions.push({ "value": ingredient?.ingredient_id, "label": ingredient?.name })
        })

        setIngredientsOpt(ingredientOptions);

    }

    const getCategoriesList = async () => {
        setLoading(true)
        let request = await axios.get(`${BASE_URL}categories`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        let categoryOptions = [];
        request.data?.data?.map((category) => {
            categoryOptions.push({ "value": category?.category_id, "label": category?.name })
        })
        setCategoryOpt(categoryOptions);
        setLoading(false)
    }

    useEffect(() => {
        getIngredientList();
        getCategoriesList();
        if (recipe !== undefined) {
            setEditing(true);
        }

    }, [])

    return (

        <div className='container'>
            <section className='Recipeform'>
                <h1>Add a new recipe!</h1>
                <form className='Form' onSubmit={handleSubmit} >
                    <div className="mb-3">
                        <label htmlFor="recipe-name" className="form-label">Recipe name</label>
                        <input onChange={inputName} type="text" value={recipe?.name} className="form-control" name="recipe-name" placeholder="Type recipe name." />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="recipes" className="form-label">Ingredients</label>
                        <Select onChange={inputIngredients}
                            isMulti
                            name="colors"
                            options={ingredientsOpt}
                            defaultValue={recipe?.ingredients}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="steps" className="form-label">Instructions</label>
                        <textarea onChange={inputSteps} className="form-control" name="steps" placeholder="Type instructions.">{recipe?.steps}</textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <Select onChange={inputCategories}
                            name="colors"
                            options={categorysOpt}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                    </div>
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