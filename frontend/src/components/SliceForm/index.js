import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import slicecss from './SliceForm.module.css'

const SliceForm = () => {
    const sessionUser = useSelector(state => state.session.user);

    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');


    if (!sessionUser) return (
        <Redirect to='/login' />
    )

    return (
        <>
            <div className={slicecss.container}>
                <form className={slicecss.form}>
                    {/* <ul>
                    {errors.map((error, index) => (
                        <li className={logincss.errors} key={index}> {error} </li>
                    ))}
                    </ul> */}
                    <label> Name of Slice:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label> Description:
                        <textarea
                            type="text"
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            className={slicecss.textbox}
                            required
                        />
                    </label>
                    <div className={slicecss.btns}>
                        <button type="submit">Add A Slice</button>
                        <Link to='/'>Cancel</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SliceForm;
