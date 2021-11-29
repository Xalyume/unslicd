import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from 'react-router-dom';

import { getAllCheckIn } from '../../store/checkin';

function UserPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userId } = useParams();

    const sessionUser = useSelector(state => state.session.user);
    const checkIns = useSelector(state => state.checkIns);

    const checkInArr = Object.values(checkIns)
    const userCheckin = checkInArr.filter((element) => {

        return element.userId === parseInt(userId)
    })

    console.log(userCheckin)

    useEffect(() => {
        dispatch(getAllCheckIn())
    }, [dispatch])

    if (sessionUser.id === parseInt(userId)) {
        history.push('/')
    }

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <h1>We've hit the user page!</h1>
    )
}

export default UserPage;
