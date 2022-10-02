import React, { useState, useContext, useEffect } from 'react';
import Slider from "react-slick";
import RecipeCard from "../components/RecipeCard";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RESPONSIVE_SETTINGS } from '../utils/Carousel_Settings';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';
import axios from 'axios';
import LoadingScreen from '../components/LoadingScreen';
import { useCallback } from 'react';

function HomeSection() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(UserContext);

    const getRecipes = useCallback(async () => {
        setLoading(true);
        let data = await axios.get(`${BASE_URL}recipes/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        setRecipes(data?.data?.data)
        setLoading(false);
    }, [token])

    useEffect(() => {
        getRecipes();
    }, [getRecipes])

    return (
        loading ? <LoadingScreen /> :
            <div>
                <h1 className="text-center">Salvadorean Flavor</h1>
                <div>
                    <Slider {...RESPONSIVE_SETTINGS} >
                        {
                            recipes?.map((recipe, idx) => {
                                return <RecipeCard key={idx} name={recipe?.name} image={recipe?.image?.image} id={recipe?.recipe_id} />
                            })
                        }</Slider>
                </div>

            </div>
    );
}

export default HomeSection;