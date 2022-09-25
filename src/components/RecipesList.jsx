import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';
import Recipe from './Recipe';

function RecipesList() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(UserContext);

    const getRecipes = async () => {
        setLoading(true);
        let data = await axios.get(`${BASE_URL}recipes/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        setRecipes(data.data.data)
        setLoading(false);
    }

    useEffect(() => {
        getRecipes();
    }, [])

    return (
        loading ? null :
            <div>
                {
                    recipes.map((recipe, idx) => {
                        return <Recipe key={idx} recipe={recipe} />
                    })
                }
            </div>
    );
}

export default RecipesList;