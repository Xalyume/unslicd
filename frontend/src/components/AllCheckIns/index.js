import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getAllCheckIn } from '../../store/checkin';

import CheckInCard from '../../components/User/CheckInCard'

import checkin from './AllCheckIns.module.css'

function AllCheckIns() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const checkIns = useSelector(state => state.checkIns);

    const checkinArr = Object.values(checkIns)

    useEffect(() => {
        dispatch(getAllCheckIn())
    }, [dispatch])

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <div className={checkin.outer_container}>
            <p className={checkin.title_container}>All Check-ins</p>
            <div className={checkin.card_container}>
                {checkinArr.map((checkin) => (
                    <CheckInCard key={checkin.id} checkin={checkin} />
                ))}
            </div>
        </div>
    )
}

export default AllCheckIns;
