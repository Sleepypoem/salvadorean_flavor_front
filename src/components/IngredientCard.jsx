import React from 'react';
import { IMAGE_URL } from '../utils/Links';
import { Link } from 'react-router-dom';

function IngredientCard(props) {
    const { image, name, id } = props;
    return (
        <div className="card m-4 p-4" style={{ width: " 38rem" }}>
            <img src={`${IMAGE_URL}ingredient/${image}`} alt={name + " image"} className="card-img-top" style={{ width: " 500px", height: "400px" }} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <Link to={`/ingredient/${id}`} className="btn btn-primary">View</Link>
            </div>
        </div>
    );
}

export default IngredientCard;