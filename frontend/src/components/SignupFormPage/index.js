import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './SignupForm.css'

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmed, setConfirmed] = useState('');

    const [errors, setErrors] = useState([]);

    if (sessionUser) {
        return <Redirect to='/' />;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (password === confirmed) {
            setErrors([]);
            return dispatch(sessionActions.signupUser({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }

        return setErrors(['Confirm Password field must be the same as the Password field'])
    }

    return (
        <form onSubmit={onSubmit}>
            <ul>
                {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                ))}
            </ul>
            <label> Username
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <label> Email
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label> Password
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <label> Confirm Password
                <input
                    type="text"
                    value={confirmed}
                    onChange={(e) => setConfirmed(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignupFormPage;
