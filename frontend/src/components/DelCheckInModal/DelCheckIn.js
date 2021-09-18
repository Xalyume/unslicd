import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCheckin } from '../../store/checkin';

const DeleteCheckin = ({ onClose, checkin }) => {
    const dispatch = useDispatch();

    const deleteFunc = async () => {
        const toDelete = checkin.id

        dispatch(deleteCheckin(toDelete))
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

export default DeleteCheckin;
