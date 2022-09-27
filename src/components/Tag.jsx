import React from 'react';
import './Recipe.css';

function Tag(props) {

    const { name } = props;
    return (
        <div className='containerTags'>
            <button className="badge badge-primary">{name}</button>
        </div>
    );
}

export default Tag;