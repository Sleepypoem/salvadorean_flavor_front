import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import Recipe from '../components/Recipe';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';

function RecipeShowSection(props) {

    let { recipeId } = useParams();

    const { token } = useContext(UserContext);

    const [recipe, setRecipe] = useState(null);

    const getRecipe = async () => {
        let request = await axios.get(`${BASE_URL}recipe/${recipeId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        setRecipe(request.data);
    }

    useEffect(() => {
        getRecipe();
        // eslint-disable-next-line
    }, [])

    return (
        <Recipe recipe={recipe} />
    );
}

export default RecipeShowSection;