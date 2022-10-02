import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';
import RecipeForm from "../components/RecipeForm";

function AddRecipeSection(props) {

    const { recipeId } = useParams();
    const { token } = useContext(UserContext);
    const [recipe, setRecipe] = useState(null);
    const [defaultIngredients, setDefaultIngredients] = useState([]);
    const [defaultCategory, setDefaultCategory] = useState([]);

    const getRecipe = async () => {
        if (recipeId === undefined) {
            return
        }

        let request = await axios.get(`${BASE_URL}recipe/${recipeId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        setRecipe(request.data);

        let defaultIngredients = request.data.ingredients.map((ingredient) => {
            return { value: ingredient.ingredient_id, label: ingredient.name }
        })

        let defaultCategory = { value: request?.data?.category?.category_id, label: request?.data?.category?.name }

        setDefaultIngredients(defaultIngredients);
        setDefaultCategory(defaultCategory)

    }

    useEffect(() => {
        getRecipe();
    }, [])
    return (
        <div>
            <RecipeForm recipe={recipe} defaultIngredients={defaultIngredients} defaultCategory={defaultCategory} />
        </div>
    );
}

export default AddRecipeSection;