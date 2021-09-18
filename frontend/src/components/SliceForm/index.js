import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSlice } from '../../store/slice';

import slicecss from './SliceForm.module.css'

const SliceForm = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    const onSubmit = async (e) => {
        e.preventDefault();

        setErrors([]);

        const payload = {
            name,
            description,
            addedBy: sessionUser.id
        }

        return dispatch(addSlice(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
                else return history.push('/')
            })

        // if (newSlice) {
        //     return history.push(`/`);
        // }
    }

    return (
        <>
            <div className={slicecss.container}>
                <div className={slicecss.pic} ></div>
                <div className={slicecss.formContainer}>
                    <h1>Add a New Slice!</h1>
                    <form className={slicecss.form}
                        onSubmit={onSubmit}
                    >
                        <ul>
                            {errors.map((error, index) => (
                                <li className={slicecss.errors} key={index}>
                                    {error} </li>
                            ))}
                        </ul>
                        <div className={slicecss.formItem}>
                            <label> Name of Slice:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`${slicecss.formInput} ${slicecss.text}`}
                            />

                        </div>
                        <div className={slicecss.formItem}>
                            <label> Description:</label>
                            <textarea
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className={`${slicecss.textbox} ${slicecss.formInput}`}
                            />
                        </div>
                        <div className={slicecss.btns}>
                            <button type="submit">Add A Slice</button>
                            <Link to='/'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SliceForm;
