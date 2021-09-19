import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStore } from '../../store/store';

import deletecss from './DeleteStore.module.css'

const DeleteStore = ({ onClose, store }) => {
    const dispatch = useDispatch();

    const deleteFunc = async () => {
        const toDelete = store.id

        dispatch(deleteStore(toDelete))
        onClose()
    }

    return (
        <div className={deletecss.container}>
            <h2>Are you sure you want to delete this store?</h2>
            <div>
                <button
                    className={deletecss.btn}
                    onClick={deleteFunc}>Confirm</button>
                <button
                    className={deletecss.btn}
                    onClick={onClose}>Cancel</button>
            </div>

        </div>
    )
}

export default DeleteStore;
