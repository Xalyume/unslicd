import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from 'react-router-dom';

function UserPage() {
    const history = useHistory();
    const { userId } = useParams();

    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <h1>We've hit the user page!</h1>
    )
}

export default UserPage;
