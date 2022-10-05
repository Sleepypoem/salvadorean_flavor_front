import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { RESPONSIVE_SETTINGS } from '../utils/Carousel_Settings';
import { IMAGE_URL } from '../utils/Links';
import './Recipe.css';
import RecipeCard from './RecipeCard';

function Ingredient(props) {

    const { ingredient } = props;
    return (

        <div className="col">
            <div className="card h-100">

                <div className="card-body">
                    <img src={`${IMAGE_URL}ingredient/${ingredient?.image?.image}`} className="image-ing mx-auto" alt={ingredient?.name + " image."} style={{ width: "200px", height: "200px" }} />
                    <h5 className="card-title"><Link to={`/ingredient/${ingredient?.ingredient_id}`}>{ingredient?.name}</Link></h5>
                </div>

                <div className="card-footer">
                </div>
            </div>

            <Slider {...RESPONSIVE_SETTINGS} >
                {
                    ingredient?.recipes?.map((recipe, idx) => {
                        return <RecipeCard key={idx} name={recipe.name} image={recipe?.image?.image} id={recipe?.recipe_id} />
                    })
                }</Slider>
        </div>
    );
}

export default Ingredient;