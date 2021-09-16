import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addStore } from '../../store/store'

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


        let newSlice = dispatch(addStore(payload))
        if (newSlice) {
            return history.push(`/`);
        }
    }

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <>
            <div>
                <h1>Add A New Store!</h1>
                <form
                    onSubmit={onSubmit}
                >
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
