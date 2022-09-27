import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../utils/Links';

function RecipeCard(props) {

    const { image, name, id } = props;
    return (
        <div className="card m-4 p-4" style={{ width: " 38rem" }}>
            <img src={`${IMAGE_URL}recipe/${image}`} alt={name + " image"} className="card-img-top" />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <Link to={`/recipe/${id}`} className="btn btn-primary">View</Link>
                <Link to={`/recipe/edit/${id}`} className="btn btn-warning">Edit</Link>
            </div>
        </div>
    );
}

export default RecipeCard;