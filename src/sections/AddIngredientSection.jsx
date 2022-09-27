import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import IngredientForm from '../components/IngredientForm';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';

function AddIngredientSection() {

    const { ingredientId } = useParams();
    const { token } = useContext(UserContext);
    const [ingredient, setIngredient] = useState(null);

    const getIngredient = async () => {
        if (ingredientId === null) {
            return
        }

        let request = await axios.get(`${BASE_URL}ingredient/${ingredientId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })

        setIngredient(request.data);

    }

    useEffect(() => {
        getIngredient();
    }, [])

    return (
        <div>
            <IngredientForm id={ingredient?.ingredient_id} name={ingredient?.name} image={ingredient?.image?.image} />
        </div>
    );
}

export default AddIngredientSection;