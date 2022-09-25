import React from 'react';
import { IMAGE_URL } from '../utils/Links';

function Ingredient(props) {

    const { ingredient } = props;
    return (

        <div className="col">
            <div className="card h-100">

                <div className="card-body">
                    <h3 className="card-title">{ingredient?.name}</h3>
                    <img src={`${IMAGE_URL}ingredient/${ingredient?.image.image}`} className="img-fluid rounded-start" alt={ingredient?.name + " image."} style={{ width: "350px" }} />
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
}

export default Ingredient;