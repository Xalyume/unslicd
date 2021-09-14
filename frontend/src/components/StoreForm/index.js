import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StoreForm = () => {
    const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [desc, setDesc] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

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
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Add A Slice</button>
                        <Link to='/'>Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default StoreForm;
