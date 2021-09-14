import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSlices } from '../../store/slice';

import slicecss from './Slice.module.css';

const Slice = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const slices = useSelector(state => state.slices);

    // console.log(slices)

    useEffect(() => {
        dispatch(getSlices());
    }, [dispatch])

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <h1>You've hit this spot</h1>
    )
}

export default Slice
