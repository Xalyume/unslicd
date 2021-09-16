import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSlice } from '../../store/slice';


const DeleteSlice = ({ onClose, slice }) => {
    const dispatch = useDispatch();

    const deleteFunc = async () => {
        const toDelete = slice.id

        dispatch(deleteSlice(toDelete))
        onClose()
    }

return (
    <>
        <h1>Are you sure you want to delete this slice?</h1>
        <button onClick={deleteFunc}>Confirm</button>
        <button onClick={onClose}>Cancel</button>
    </>
)
}

export default DeleteSlice;
