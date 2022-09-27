import React from 'react';
import { Link } from 'react-router-dom';
import RecipesList from '../components/RecipesList';

function RecipesSection() {
    return (
        <div className='text-center'>
            <h1 className="text-center">Recipes</h1>
            <RecipesList />
            <Link to="/recipe/add" className='btn btn-success btn-lg'>Add</Link>
        </div>

    );
}

export default RecipesSection;