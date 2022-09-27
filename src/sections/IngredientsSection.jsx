import React from 'react';
import { Link } from 'react-router-dom';
import IngredientList from '../components/IngredientList';

function IngredientsSection(props) {
    return (
        <div className='text-center'>
            <h1 className="text-center">Ingredients</h1>
            <IngredientList />
            <br></br>
            <Link to="/ingredient/add" className='btn btn-success btn-lg'>Add</Link>
        </div>
    );
}

export default IngredientsSection;