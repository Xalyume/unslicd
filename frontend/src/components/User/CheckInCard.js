import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import DelCheckIn from '../DelCheckInModal/';

import checkincss from './User.module.css';

const SliceCard = ({ checkin }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [deleteBtn, setDeleteBtn] = useState(false);

    let delBtns;

    if (deleteBtn) {
        delBtns = (
            <div className={checkin.innerBtnContainer}>
                <DelCheckIn checkin={checkin} />
            </div>
        )
    }

    const date = checkin.createdAt.split('T');
    const checkinDate = date[0].split('-');

    useEffect(() => {
        if (sessionUser.id === checkin?.userId) {
            setDeleteBtn(true)
        }
    }, [checkin, sessionUser.id])

    return (
        <div className={checkincss.cardContainer}>
            <div className={checkincss.cardInfo}>
                <p className={checkincss.checkInText}>{checkin?.User?.username}
                    <span> had </span>
                    <span>{checkin?.Slouse?.name}</span>
                    <span> at </span>
                    <span>{checkin?.Store?.name}</span>
                    <p className={checkincss.checkInDate}> on:
                    <span className={checkincss.checkInDate}> {checkinDate[1]}/</span>
                    <span className={checkincss.checkInDate}>{checkinDate[2]}/</span>
                    <span className={checkincss.checkInDate}>{checkinDate[0]}</span>
                    </p>
                </p>
                <p className={checkincss.review}>{checkin?.review}</p>
                <p> Review: {checkin?.rating}/5</p>
            <div className={checkincss.delBtns}>
                {checkin && delBtns}
            </div>
            </div>
            <img
                className={checkincss.checkinPic}
                src={`${checkin?.image}`}
                alt="checkin_picture"
            />
        </div>
    )
}

export default SliceCard;
