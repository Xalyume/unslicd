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

    const sliceArr = Object.values(slices)

    console.log(sliceArr)

    useEffect(() => {
        dispatch(getSlices());
    }, [dispatch])

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <div>
            <h1>All Slices</h1>
            <ul>
                {sliceArr && sliceArr.map((slice) => (
                    <li className={slicecss.list}>
                        {slice.name}
                        <ul>
                            <li className={slicecss.list2}>{slice.description}</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Slice
