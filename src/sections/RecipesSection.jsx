import React from 'react';
import { Link } from 'react-router-dom';
import RecipesList from '../components/RecipesList';

function RecipesSection() {
    return (
        <div>
            <h1 className="text-center">Recipes</h1>
            <RecipesList />
        </div>

    );
}

export default RecipesSection;