import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteStore } from '../../store/store';

const DeleteStore = ({ onClose, store }) => {
    const dispatch = useDispatch();

    const deleteFunc = async () => {
        const toDelete = store.id

        dispatch(deleteStore(toDelete))
        onClose()
    }

return (
    <>
        <h1>Are you sure you want to delete this store?</h1>
        <button onClick={deleteFunc}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
    </>
)
}

export default DeleteStore;
