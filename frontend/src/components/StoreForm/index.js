import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addStore } from '../../store/store'

import storecss from './StoreForm.module.css'

const StoreForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        const payload = {
            name,
            location,
            description,
            addedBy: sessionUser.id
        }

        return dispatch(addStore(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
                else return history.push('/')
            })

        // let newSlice = dispatch(addStore(payload))
        // if (newSlice) {
        //     return history.push(`/`);
        // }
    }

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <>
            <div className={storecss.container}>
                <h1>Add A New Store!</h1>
                <form className={storecss.form}
                    onSubmit={onSubmit}
                >
                    <ul>
                        {errors.map((error, index) => (
                            <li className={storecss.errors}
                                key={index}>
                                {error} </li>
                        ))}
                    </ul>
                    <div>
                        <label>Store Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Location:</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Add Store</button>
                        <Link to='/'>Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default StoreForm;
