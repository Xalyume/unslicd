import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSlice } from '../../store/slice';

import deletecss from './DeleteSlice.module.css'

const DeleteSlice = ({ onClose, slice }) => {
    const dispatch = useDispatch();

    const deleteFunc = async () => {
        const toDelete = slice.id

        dispatch(deleteSlice(toDelete))
        onClose()
    }

    return (
        <div className={deletecss.container}>
            <h2>Are you sure you want to delete this slice?</h2>
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

export default DeleteSlice;
