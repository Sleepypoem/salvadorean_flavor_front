import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { BASE_URL } from '../utils/Links';
import { UserContext } from '../context/UserContextProvider';
import Ingredient from '../components/Ingredient';

function IngredientShowSection() {
    let { ingredientId } = useParams();

    const { token } = useContext(UserContext);

    const [ingredient, setIngredient] = useState(null);

    const getRecipe = async () => {
        let request = await axios.get(`${BASE_URL}ingredient/${ingredientId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        setIngredient(request.data);
    }

    useEffect(() => {
        getRecipe();
        // eslint-disable-next-line
    }, [])

    return (
        <Ingredient ingredient={ingredient} />
    );
}

export default IngredientShowSection;