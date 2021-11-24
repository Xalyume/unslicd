import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getCheckIn } from '../../store/checkin';

import CheckInCard from '../../components/User/CheckInCard'

import checkin from './AllCheckIns.module.css'

function AllCheckIns() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const checkIns = useSelector(state => state.checkins);

    const checkinArr = Object.values(checkIns)

    useEffect(() => {
        dispatch(getCheckIn())
    }, [dispatch])

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    console.log(checkinArr);

    return (
        null
    )
}

export default AllCheckIns;
