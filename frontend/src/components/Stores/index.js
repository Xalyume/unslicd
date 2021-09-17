import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getStores } from '../../store/store';
import StoreCard from './StoreCard';

import storecss from './Store.module.css'

const Slice = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const stores = useSelector(state => state.stores);

    const storeArr = Object.values(stores)

    useEffect(() => {
        dispatch(getStores())
    }, [dispatch])

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <div className={storecss.container}>
            <h1>All Current Stores</h1>
            <div>
                {storeArr.map((store) => (
                    <StoreCard store={store} />
                ))}
            </div>
        </div>
    )
}

export default Slice
