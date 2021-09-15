import React from 'react';

import slicecss from './Slice.module.css';

const SliceCard = ({ slice }) => {

    return (
        <div className={slicecss.cardContainer}>
            <h3>{slice?.name}</h3>
            <p>{slice?.description}</p>
        </div>
    )
}

export default SliceCard;
