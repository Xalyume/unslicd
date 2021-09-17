import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSlices } from '../../store/slice';
import { getStores } from '../../store/store';
import { addCheckIn } from '../../store/checkin';

import checkIn from './CheckIn.module.css'

const CheckIn = ({ onClose }) => {
    const dispatch = useDispatch();

    const [slice, setSlice] = useState('')
    const [store, setStore] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(1)
    const [image, setImage] = useState('')

    const sessionUser = useSelector(state => state.session.user);
    const slices = useSelector(state => state.slices);
    const stores = useSelector(state => state.stores);

    const sliceArr = Object.values(slices)
    const storeArr = Object.values(stores)

    const onCheckIn = (e) => {
        e.preventDefault();

        const payload = {
            storeId: parseInt(store, 10),
            userId: sessionUser.id,
            sliceId: parseInt(slice, 10),
            review,
            rating,
            image
        }

        dispatch(addCheckIn(payload))
        onClose()
    }

    useEffect(() => {
        dispatch(getSlices())
        dispatch(getStores())
    }, [dispatch])

    return (
        <div className={checkIn.container}>
            <div>
                <form
                    onSubmit={onCheckIn}
                >
                    {/* <ul>
                        {errors.map((error, index) => (
                            <li key={index}> {error} </li>
                        ))}
                    </ul> */}
                    <div>
                        <label>Slice:</label>
                        <select name="slices"
                            onChange={(e) => setSlice(e.target.value)}
                        >
                            <option value={null}
                                disabled="disabled"
                                selected
                            >Pick a Slice.</option>
                            {sliceArr.map((slice) => (
                                <option
                                    value={slice.id}
                                    key={slice.id}
                                >{slice.name}</option>
                            ))}
                        </select>
                    </div>
                    <p>If you don't see your slice, you can
                        <Link
                            className={checkIn.redirect}
                            to='/addslice'> add it here</Link>
                    </p>
                    <div>
                        <label>Store:</label>
                        <select name="stores"
                            onChange={(e) => setStore(e.target.value)}
                        >
                            <option value={null}
                                disabled="disabled"
                                selected
                            >Pick a Store.</option>
                            {storeArr.map((store) => (
                                <option
                                    value={store.id}
                                    key={store.id}
                                >{store.name}</option>
                            ))}
                        </select>
                    </div>
                    <p>If you don't see your store, you can
                        <Link
                            className={checkIn.redirect}
                            to='/addstore'> add it here</Link>
                    </p>
                    <div>
                        <label>Review:</label>
                        <textarea
                            type="text"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            d required
                        />
                    </div>
                    <div>
                        <label>Rating:</label>
                        <select name="rating"
                            onChange={(e) => setRating(e.target.value)}
                        >
                            <option value={1} selected>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div>
                        <label>Upload a URL:</label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </div>
                    <div >
                        <button className={checkIn.btn} type="submit">Check-In</button>
                        <button className={checkIn.btn} onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default CheckIn;
