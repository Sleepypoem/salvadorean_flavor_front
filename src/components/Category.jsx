import React from 'react';

function Category(props) {

    const { name } = props;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default Category;