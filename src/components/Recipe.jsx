
import React from 'react';
import Ingredient from './Ingredient';
import Tag from './Tag';

function Recipe(props) {

    const { recipe } = props;

    return (
        <section className='containerRecipe'>
            <section className='containerName'>
            <h1>{recipe?.name}</h1>
            </section>
             <section className='containerRecipe'>
             <div>
             <img className='imgRecipe' src={`http://127.0.0.1:8000/api/image/recipe/${recipe?.image.image}`} alt={recipe?.name + " image"} style={{ width: "600px" }} />
             </div>
             <section>
            <br>
            </br>
             </section>
             <div className='ImagesIngredients'>
                {  
                   
                    recipe?.ingredients.map((ingredient, idx) => {
                        return <Ingredient key={idx} ingredient={ingredient} classname='imgingredient' />
                    })
                    
                    
                }
            </div>
             </section>
             <section className='containerSteps'>
                <div>
                <h2>{recipe?.steps}</h2>
                </div>
             
             </section>
            <section>
            <h3>{recipe?.category?.name}</h3> 
            </section>
            <section>
            <div>
                {
                    recipe?.tags.map((tag) => {
                        return <Tag name={tag.name} />
                    })
                }
            </div>

            </section>
            

        </section>
    );

}

export default Recipe;
