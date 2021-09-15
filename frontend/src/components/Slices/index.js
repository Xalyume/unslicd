import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSlices } from '../../store/slice';
import SliceCard from './SliceCard';

import slicecss from './Slice.module.css';

const Slice = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const slices = useSelector(state => state.slices);

    const sliceArr = Object.values(slices)

    useEffect(() => {
        dispatch(getSlices())
    }, [dispatch])

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        // null
        <div className={slicecss.container}>
            <h1>All Slices</h1>
            <div>
                {sliceArr.map((slice) => (
                    <SliceCard slice={slice} />
                ))}
            </div>
        </div>
    )
}

export default Slice
