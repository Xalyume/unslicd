import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

import signupcss from './SignupForm.module.css'

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmed, setConfirmed] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const [errors, setErrors] = useState([]);

    if (sessionUser) {
        return <Redirect to='/' />;
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (password === confirmed) {
            setErrors([]);
            return dispatch(sessionActions.signupUser({ email, username, password, profilePicture }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }

        return setErrors(['Confirm Password field must be the same as the Password field'])
    }

    return (
        <div className={signupcss.container}>
            <div className={signupcss.colorFilter}></div>
            <div className={signupcss.signup}>
                <form className={signupcss.signupForm} onSubmit={onSubmit}>
                    <h2>UNSLIC'D</h2>
                    <p>Let's get this slice!</p>
                    <ul>
                        {errors.map((error, index) => (
                            <li className={signupcss.errors} key={index}>{error}</li>
                        ))}
                    </ul>
                    <div>
                        <label> Username
                            <input
                                className={signupcss.formInput}
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label> Email
                            <input
                                className={signupcss.formInput}
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label> Password
                            <input
                                className={signupcss.formInput}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label> Confirm Password
                            <input
                                className={signupcss.formInput}
                                type="password"
                                value={confirmed}
                                onChange={(e) => setConfirmed(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label> Profile Picture (URL)
                            <input
                                className={signupcss.formInput}
                                type="text"
                                value={profilePicture}
                                onChange={(e) => setProfilePicture(e.target.value)}
                            />
                        </label>
                    </div>
                    <button className={signupcss.btn} type="submit">Sign Up</button>
                    <Link className={signupcss.login} to='/login'>Already have an account? Login here!</Link>
                </form>
            </div>
        </div>
    )
}

export default SignupFormPage;
