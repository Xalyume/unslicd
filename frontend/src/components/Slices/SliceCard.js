import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import EditSliceModal from '../EditSliceModal';
import DelSliceModal from '../DelSliceModal/';

import slicecss from './Slice.module.css';

const SliceCard = ({ slice }) => {

    const sessionUser = useSelector(state => state.session.user);

    let editDelBtns;

    if (sessionUser.id === slice?.addedBy) {
        editDelBtns = (
            <div className={slicecss.innerBtnContainer}>
                <EditSliceModal />
                <DelSliceModal />
            </div>
        )
    }

    return (
        <div className={slicecss.cardContainer}>
            <div className={slicecss.cardInfo}>
                <h3>{slice?.name}</h3>
                <p>{slice?.description}</p>
            </div>
            <div className={slicecss.editDelBtns}>
                {slice && editDelBtns}
            </div>
        </div>
    )
}

export default SliceCard;
