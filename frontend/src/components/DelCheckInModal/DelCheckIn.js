import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCheckin } from '../../store/checkin';

import deletecss from './DeleteCheckin.module.css'

const DeleteCheckin = ({ onClose, checkin }) => {
    const dispatch = useDispatch();

    const deleteFunc = async () => {
        const toDelete = checkin.id

        dispatch(deleteCheckin(toDelete))
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

export default DeleteCheckin;
