import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import logincss from './LoginForm.module.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCrendtial] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to='/' />
    );

    const demoUser = (e) => {
        e.preventDefault()

        dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }))
    }

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
        <div className={logincss.container}>
            <div className={logincss.colorFilter}></div>
            <div className={logincss.login}>
                <form className={logincss.loginForm} onSubmit={onSubmit}>
                    <h2>UNSLIC'D</h2>
                    <p>Let's get this slice!</p>
                    <ul>
                        {errors.map((error, index) => (
                            <li className={logincss.errors} key={index}> {error} </li>
                        ))}
                    </ul>
                    <div className={logincss.loginFormGroup}>
                        <label> Username or Email
                            <input
                                className={logincss.formInput}
                                type="text"
                                value={credential}
                                onChange={(e) => setCrendtial(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className={logincss.loginFormGroup}>
                        <label> Password
                            <input
                                className={logincss.formInput}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button type="submit" className={logincss.btn}>Log In</button>
                    <Link className={logincss.signup} to='/signup'>Not Registered? Sign Up Today!</Link>
                    <button className={logincss.btnDemo} onClick={demoUser}>Demo User</button>
                </form>
            </div>
        </div>
    );
}

export default LoginFormPage;
