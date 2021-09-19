import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editSlice } from '../../store/slice';

import edit from './EditSliceModal.module.css'

const EditSlice = ({ onClose, slice }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(slice.name)
    const [description, setDescription] = useState(slice.description)
    const [errors, setErrors] = useState([])

    const onEdit = (e) => {
        e.preventDefault();

        const payload = {
            id: slice.id,
            name,
            description
        }

        setErrors([])

        return dispatch(editSlice(payload))
            .then(async () => onClose())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
    }

    return (
        <div className={edit.container}>
            <div className={edit.formContainer}>
                <h3>Update This Slice:</h3>
                <form
                    onSubmit={onEdit}
                >
                    <ul>
                        {errors.map((error, index) => (
                            <li
                                className={edit.errors}
                                key={index}> {error} </li>
                        ))}
                    </ul>
                    <div className={edit.formItem}>
                        <label> Name of Slice:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={edit.text}
                        />

                    </div>
                    <div className={edit.formItem}>
                        <label> Description:</label>
                        <textarea
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={edit.textbox}
                        />
                    </div>
                    <div className={edit.btngroup}>
                        <button
                            className={edit.modalBtn}
                            type="submit">Update</button>
                        <button
                            className={edit.modalBtn}
                            onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default EditSlice;
