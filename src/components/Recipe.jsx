import React from 'react';
import Ingredient from './Ingredient';
import Tag from './Tag';

function Recipe(props) {

    const { recipe } = props;

    return (
        <div className='container mt-4'>
            <h1>{recipe?.name}</h1>
            <h2>{recipe?.steps}</h2>
            <h3>{recipe?.category?.name}</h3>
            <img src={`http://127.0.0.1:8000/api/image/recipe/${recipe?.image.image}`} alt={recipe?.name + " image"} style={{ width: "350px" }} />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    recipe?.ingredients.map((ingredient, idx) => {
                        return <Ingredient key={idx} ingredient={ingredient} />
                    })
                }
            </div>
            <div>
                {
                    recipe?.tags.map((tag) => {
                        return <Tag name={tag.name} />
                    })
                }
            </div>

        </div>
    );
}

export default Recipe;

