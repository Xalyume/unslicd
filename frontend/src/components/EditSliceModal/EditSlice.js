import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import edit from './EditSliceModal.module.css'

const EditSlice = ({ onClose, slice }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState(slice.name)
    const [description, setDescription] = useState(slice.description)

    return (
        <div>
            <div>
                <form
                // onSubmit={onSubmit}
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
