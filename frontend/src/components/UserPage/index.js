import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from 'react-router-dom';

import { getAllCheckIn } from '../../store/checkin';
import { getUsers } from '../../store/user';

import CheckInCard from '../../components/User/CheckInCard'


function UserPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const checkIns = useSelector(state => state.checkIns);
    const users = useSelector(state => state.users);

    const checkInArr = Object.values(checkIns)
    const userCheckin = checkInArr.filter((element) => {
        return element.userId === parseInt(userId)
    })

    useEffect(() => {
        dispatch(getAllCheckIn());
        dispatch(getUsers());
    }, [dispatch])

    if (sessionUser.id === parseInt(userId)) {
        history.push('/')
    }

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <div>

        </div>
    )
}

export default UserPage;
