import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCrendtial] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    );

    const onSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div className="log-in">
            <form className="login-form" onSubmit={onSubmit}>
                <ul>
                    {errors.map((error, index) => (
                        <li className="errors" key={index}> {error} </li>
                    ))}
                </ul>
                <label> Username or Email
                    <input
                        type="text"
                        value={credential}
                        onChange={(e) => setCrendtial(e.target.value)}
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
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default LoginFormPage;
