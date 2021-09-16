import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import EditSliceModal from '../EditSliceModal';
import DelSliceModal from '../DelSliceModal/';

import slicecss from './Slice.module.css';

const SliceCard = ({ slice }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [editButtons, setEditButtons] = useState(false);

    let editDelBtns;

    if (editButtons) {
        editDelBtns = (
        <div className={slicecss.innerBtnContainer}>
            <EditSliceModal slice={slice} />
            <DelSliceModal slice={slice} />
        </div>
    )}

    useEffect(() => {
        if (sessionUser.id === slice?.addedBy) {
            setEditButtons(true)
        }
    }, [slice, sessionUser.id])

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
