import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../context/UserContextProvider';
import { BASE_URL } from '../utils/Links';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { RESPONSIVE_SETTINGS } from '../utils/Carousel_Settings';
import IngredientCard from "./IngredientCard";

function IngredientList() {
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(UserContext);

    const getIngredients = async () => {
        setLoading(true);
        let data = await axios.get(`${BASE_URL}ingredients/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        setIngredients(data.data)
        setLoading(false);
    }

    useEffect(() => {
        getIngredients();
        console.log(ingredients[0]);
    }, [])

    return (
        loading ? null :
            <div>
                <Slider {...RESPONSIVE_SETTINGS} >
                    {
                        ingredients.map((ingredient, idx) => {
                            return <IngredientCard key={idx} name={ingredient.name} image={ingredient.image?.image} id={ingredient.ingredient_id} />
                        })
                    }</Slider>
            </div>
    );
}

export default IngredientList;