import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from 'react-router-dom';

import { getAllCheckIn } from '../../store/checkin';
import { getUser } from '../../store/user';

import CheckInCard from '../../components/User/CheckInCard'

import css from './UserPage.module.css'

function UserPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const checkIns = useSelector(state => state.checkIns);
    const user = useSelector(state => state.user);

    const checkInArr = Object.values(checkIns)
    const userCheckin = checkInArr.filter((element) => {
        return element.userId === +userId
    })


    let checkInCards;
    if (!userCheckin.length) {
        checkInCards = (
            <p>This user has not made any checkins!</p>
        )
    } else {
        checkInCards = (
            <>
                {userCheckin.map((checkin) => (
                    <CheckInCard key={checkin.id} checkin={checkin} />
                ))}
            </>
        )
    }

    let date;
    let membership;

    useEffect(() => {
        dispatch(getAllCheckIn());
        dispatch(getUser(+userId));
    }, [dispatch, userId])

    if (sessionUser.id === +userId) {
        history.push('/')
    }

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    if (!user.id) {
        return null;
    } else {
        date = user?.createdAt.split('T');
        membership = date[0].split('-');
    }

    return (
        <div className={css.user_container}>
            <div>
                <p className={css.checkin_title}>
                    User's Checkins:
                </p>
                <div className={css.checkin}>
                    {checkInCards}
                </div>
            </div>
            <div className={css.profile}>
                <p>
                    User Info
                </p>
                <img src={"https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg"}
                    alt="profile_pic" className={css.profilepic}/>
                <div className={css.user_info}>
                    <p>Username: {user?.username}</p>
                    <p>Member Since: {membership[1]}/{membership[2]}/{membership[0]}</p>
                </div>
            </div>
        </div>
    )
}

export default UserPage;
