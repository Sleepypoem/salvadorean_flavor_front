import React from 'react';
import './Recipe.css';

function Ingredient(props) {

    const { ingredient } = props;
    return (

        <div className="col">
            <div className="card h-100">

                <div className="card-body">
                    <img src={`http://127.0.0.1:8000/api/image/ingredient/${ingredient?.image.image}`} className="image-ing" alt={ingredient?.name + " image."} style={{ width: "200px" }} />
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