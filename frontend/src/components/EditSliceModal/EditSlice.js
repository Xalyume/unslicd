import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { editSlice } from '../../store/slice';

// import edit from './EditSliceModal.module.css'

const EditSlice = ({ onClose, slice }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(slice.name)
    const [description, setDescription] = useState(slice.description)

    const onEdit = (e) => {
        e.preventDefault();

        const payload = {
            id: slice.id,
            name,
            description
        }

        dispatch(editSlice(payload))
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
                        <label> Name of Slice:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                    </div>
                    <div>
                        <label> Description:</label>
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

export default EditSlice;
