import React from 'react';

const SliceCard = ({ slice }) => {

    console.log(slice)

    return (
        <div>
            <h2>{slice.name}</h2>
            <p>{slice.description}</p>
        </div>
    )
}

export default SliceCard;
