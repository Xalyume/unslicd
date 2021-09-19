import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editStore } from '../../store/store';

import edit from './EditStore.module.css'

const EditStore = ({ onClose, store }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(store.name)
    const [location, setLocation] = useState(store.location)
    const [description, setDescription] = useState(store.description)
    const [errors, setErrors] = useState([])

    const onEdit = (e) => {
        e.preventDefault();

        const payload = {
            id: store.id,
            name,
            location,
            description
        }

        setErrors([])

        return dispatch(editStore(payload))
            .then(async () => onClose())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
    }

    return (
        <div className={edit.container}>
            <div className={edit.formContainer}>
                <h3>Update This Store:</h3>
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
                        <label>Name of Store:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={edit.text}
                        />

                    </div>
                    <div className={edit.formItem}>
                        <label>Location:</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className={edit.text}
                        />

                    </div>
                    <div className={edit.formItem}>
                        <label>Description:</label>
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

export default EditStore;
