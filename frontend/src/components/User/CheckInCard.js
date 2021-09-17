import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

// import DelSliceModal from '../DelSliceModal/';

import checkin from './User.module.css';

const SliceCard = ({ checkIn }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [deleteBtn, setDeleteBtn] = useState(false);

    let delBtns;

    if (deleteBtn) {
        delBtns = (
        <div className={checkin.innerBtnContainer}>
            {/* <DelSliceModal checkIn={checkIn} /> */}
        </div>
    )}

    useEffect(() => {
        if (sessionUser.id === checkIn?.userId) {
            setDeleteBtn(true)
        }
    }, [checkIn, sessionUser.id])

    return (
        <div className={checkin.cardContainer}>
            <div className={checkin.cardInfo}>
                <h3>{checkIn?.User.username}</h3>
                <p>{checkIn?.description}</p>
            </div>
            <div className={checkin.delBtns}>
                {checkIn && delBtns}
            </div>
        </div>
    )
}

export default SliceCard;
