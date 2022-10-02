import React from 'react';
import { IMAGE_URL } from '../utils/Links';
import './Recipe.css';

function Ingredient(props) {

    const { ingredient } = props;
    return (

        <div className="col">
            <div className="card h-100">

                <div className="card-body">
                    <img src={`${IMAGE_URL}ingredient/${ingredient?.image?.image}`} className="image-ing mx-auto" alt={ingredient?.name + " image."} style={{ width: "200px", height: "200px" }} />
                    <h5 className="card-title">{ingredient?.name}</h5>
                </div>

                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
}

export default Ingredient;