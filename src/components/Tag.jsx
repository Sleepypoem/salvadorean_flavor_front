import React from 'react';

function Tag(props) {

    const { name } = props;
    return (
        <div>
            <button class="badge badge-primary">{name}</button>
        </div>
    );
}

export default Tag;