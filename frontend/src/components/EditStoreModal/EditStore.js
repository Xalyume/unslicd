import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editStore } from '../../store/store';

// import edit from './EditSliceModal.module.css'

const EditStore = ({ onClose, store }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(store.name)
    const [location, setLocation] = useState(store.location)
    const [description, setDescription] = useState(store.description)

    const onEdit = (e) => {
        e.preventDefault();

        const payload = {
            id: store.id,
            name,
            location,
            description
        }

        dispatch(editStore(payload))
        onClose()
    }

    return (
        <div>
            <div>
                <form
                    onSubmit={onEdit}
                >
                    {/* <ul>
                        {errors.map((error, index) => (
                            <li key={index}> {error} </li>
                        ))}
                    </ul> */}
                    <div>
                        <label>Name of Store:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                    </div>
                    <div>
                        <label>Location:</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />

                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div >
                        <button type="submit">Update</button>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default EditStore;
