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
    const [desc, setDesc] = useState('');


    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name,
            desc,
            addedBy: sessionUser.id
        }

        let newSlice = await dispatch(addSlice(payload));
        if (newSlice) {
            history.push(`/`);
        }
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
                        {/* <ul>
                    {errors.map((error, index) => (
                        <li className={logincss.errors} key={index}> {error} </li>
                    ))}
                    </ul> */}
                        <div className={slicecss.formItem}>
                            <label> Name of Slice:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`${slicecss.formInput} ${slicecss.text}`}
                                required
                            />

                        </div>
                        <div className={slicecss.formItem}>
                            <label> Description:</label>
                            <textarea
                                type="text"
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                className={`${slicecss.textbox} ${slicecss.formInput}`}
                                required
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
