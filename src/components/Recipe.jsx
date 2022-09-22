import React from 'react';

function Recipe(props) {

    const { recipe } = props;

    return (
        <div className='container mt-4'>
            <h1>{recipe?.name}</h1>
            <h2>{recipe?.steps}</h2>
            <img src={`http://127.0.0.1:8000/api/image/recipe/${recipe?.image.image}`} alt={recipe?.name + " image"} />
            <ul>
                {
                    recipe?.ingredients.map((ingredient) => {
                        return <li>{ingredient?.name}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Recipe;