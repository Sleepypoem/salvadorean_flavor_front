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

    }

    useEffect(() => {
        getRecipe();
    }, [])
    return (
        <div>
            <RecipeForm recipe={recipe} />
        </div>
    );
}

export default AddRecipeSection;