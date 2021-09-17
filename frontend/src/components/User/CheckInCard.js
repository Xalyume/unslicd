import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

// import DelSliceModal from '../DelSliceModal/';

import checkincss from './User.module.css';

const SliceCard = ({ checkin }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [deleteBtn, setDeleteBtn] = useState(false);

    let delBtns;

    if (deleteBtn) {
        delBtns = (
            <div className={checkin.innerBtnContainer}>
                {/* <DelSliceModal checkIn={checkIn} /> */}
            </div>
        )
    }

    console.log(checkin)

    useEffect(() => {
        if (sessionUser.id === checkin?.userId) {
            setDeleteBtn(true)
        }
    }, [checkin, sessionUser.id])

    return (
        <div className={checkincss.cardContainer}>
            <div className={checkincss.cardInfo}>
                <h3>Check</h3>
                <p>{checkin?.User?.username}</p>
                <p>{checkin?.Slouse?.name}</p>
                <p>{checkin?.Store?.name}</p>
                <p>{checkin?.review}</p>
                <p>{checkin?.rating}</p>
                <p>{checkin?.createdAt}</p>
            </div>
            <div className={checkincss.delBtns}>
                {checkin && delBtns}
            </div>
        </div>
    )
}

export default SliceCard;
