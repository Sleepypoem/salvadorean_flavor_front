import React from 'react';
import './Recipe.css';

function Tag(props) {

    const { name } = props;
    return (
        <div className='containerTags'>
            <button class="badge badge-primary">{name}</button>
        </div>
    );
}

export default Tag;