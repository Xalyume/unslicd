import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getCheckIn } from '../../store/checkin';

import CheckInModal from '../CheckInModal';
import CheckInCard from './CheckInCard';

import usercss from './User.module.css';

const User = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const userCheckins = useSelector(state => state.checkIns)

    const userArr = Object.values(userCheckins)

    const date = sessionUser.createdAt.split('T');
    const membership = date[0].split('-');

    useEffect(() => {
        dispatch(getCheckIn())
    }, [dispatch])

    return (
        <div className={usercss.container}>
            <div className={usercss.profileBtnContainer}>
                <div className={usercss.profile}>
                    <img src={"https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg"}
                        alt="profile_pic" className={usercss.pic} />
                    <div className={usercss.userInfo}>
                        <p>Welcome Back! {sessionUser.username}</p>
                        <p>Member Since: {membership[1]}/{membership[2]}/{membership[0]}</p>
                    </div>
                </div>
                <div className={usercss.btnGroup}>
                    <div className={usercss.btn}>
                        <CheckInModal />
                    </div>
                    <Link to='/addslice' className={usercss.btn}>Add A New Slice</Link>
                    <Link to='/addstore' className={usercss.btn}>Add A New Store</Link>
                </div>
            </div>
            <div className={usercss.middleContainer}>
                <p className={usercss.checkinTitle}>
                    My Checkins:
                </p>
                <div className={usercss.checkin}>
                    {userArr.map((checkin) => (
                        <CheckInCard key={checkin.id} checkin={checkin} />
                    ))}
                </div>
            </div>
            <div className={usercss.links}>
                <Link className={usercss.btn} to='/slices'>All Slices</Link>
                <Link className={usercss.btn} to='/stores'>All Stores</Link>
            </div>
        </div>
    )
}

export default User;
