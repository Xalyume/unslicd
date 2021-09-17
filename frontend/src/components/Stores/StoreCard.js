import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import EditStoreModal from '../EditStoreModal';
import DelStoreModal from '../DelStoreModal/';

import storecss from './Store.module.css'

const StoreCard = ({ store }) => {
    const sessionUser = useSelector(state => state.session.user);
    const [editButtons, setEditButtons] = useState(false);

    let editDelBtns;

    if (editButtons) {
        editDelBtns = (
        <div>
            <EditStoreModal store={store} />
            <DelStoreModal store={store} />
        </div>
    )}

    useEffect(() => {
        if (sessionUser.id === store?.addedBy) {
            setEditButtons(true)
        }
    }, [store, sessionUser.id])

    return (
        <div className={storecss.cardContainer}>
            <div className={storecss.cardInfo}>
                <h3>{store?.name}</h3>
                <p>{store?.location}</p>
                <p>{store?.description}</p>
            </div>
            <div className={storecss.editDelBtns}>
                {store && editDelBtns}
            </div>
        </div>
    )
}

export default StoreCard;
