import React from 'react';
import './RecipeForm.css';

function RecipeForm(props) {

    
    return (
    
        <div className='container'>
            <section className='Recipeform'>
            <h1>Add a new recipe!</h1>
                <form className='Form' >
                <div className="mb-3">
                    <label htmlFor="recipe-name" className="form-label">Recipe name</label>
                    <input type="text" className="form-control" name="recipe-name" placeholder="Type recipe name." />
                </div>
                <div className="mb-3">
                    <label htmlFor="ingredients" className="form-label">Ingredients</label>
                    <input type="text" className="form-control" name="ingredients" placeholder="Type ingredients." />
                </div>
                <div className="mb-3">
                    <label htmlFor="steps" className="form-label">Instructions</label>
                    <input type="text" className="form-control" name="steps" placeholder="Type instructions." />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category</label>
                    <input type="text" className="form-control" name="category" placeholder="Add a category." />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="file" className="form-control" name="image" placeholder="Add a image." />
                </div>
                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Tag</label>
                    <input type="text" className="form-control" name="tags" placeholder="Add a tag." />
                </div>
                <br />
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
            </section>
            
        </div>
    );
}

export default RecipeForm;