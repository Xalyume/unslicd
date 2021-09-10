import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styles from './LoginForm.module.css';

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
        <div className={styles.container}>
            <div className={styles.login}>
                <form className={styles.loginForm} onSubmit={onSubmit}>
                    <h2> UNSLIC'D </h2>
                    <p> Let's get this slice!</p>
                    <ul>
                        {errors.map((error, index) => (
                            <li className="errors" key={index}> {error} </li>
                        ))}
                    </ul>
                    <div className={styles.loginFormGroup}>
                        <label> Username or Email
                            <input
                                type="text"
                                value={credential}
                                onChange={(e) => setCrendtial(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div className="login-form-group">
                        <label> Password
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginFormPage;
