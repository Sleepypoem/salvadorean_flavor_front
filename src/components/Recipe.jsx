
import React from 'react';
import { IMAGE_URL } from '../utils/Links';
import Ingredient from './Ingredient';
import Tag from './Tag';
import './Recipe.css';

function Recipe(props) {

    const { recipe } = props;

    return (
        <section className='container mt-4'>
            
                <h3>{recipe?.category?.name}</h3> 
                <h1>{recipe?.name}</h1>
                <section className='recipe'>
                    <img className='imgRecipe' src={`http://127.0.0.1:8000/api/image/recipe/${recipe?.image?.image}`} alt={recipe?.name + " image"} style={{ width: "600px" }} />    
                </section>  
                <section className='bck'>
                <h2>Ingredients</h2>
                <section className='ImagesIngredients'>  
                    {  
                        recipe?.ingredients.map((ingredient, idx) => {
                            return <Ingredient key={idx} ingredient={ingredient}/>}) 
                    }
                </section> 
                <section className='steps'>
                    <h2>Steps</h2>
                    <p>{recipe?.steps}</p>
                </section>
                </section>
                <section className='tags'>
                {
                    recipe?.tags.map((tag) => {
                        return <Tag name={tag.name} />
                    })
                }
                </section>
                
               
        </section>
        
            
            
    );

}

export default Recipe;
