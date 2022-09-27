import axios from 'axios';
import React from 'react';
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';
import RecipeCard from './RecipeCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RESPONSIVE_SETTINGS } from '../utils/Carousel_Settings';


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
                <Slider {...RESPONSIVE_SETTINGS} >
                    {
                        recipes.map((recipe, idx) => {
                            return <RecipeCard key={idx} name={recipe.name} image={recipe.image?.image} id={recipe.recipe_id} />
                        })
                    }</Slider>
            </div>
    );
}

export default RecipesList;