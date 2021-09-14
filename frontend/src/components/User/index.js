import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import usercss from './User.module.css';

const User = () => {
    const sessionUser = useSelector(state => state.session.user);

    const date = sessionUser.createdAt.split('T');
    const membership = date[0].split('-');

    return (
        <div className={usercss.container}>
            <div className={usercss.profileBtnContainer}>
                <div className={usercss.profile}>
                    <img src={"https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg"}
                        alt="profile_pic" className={usercss.pic} />
                    <p>Welcome Back! {sessionUser.username}</p>
                    <p>Member Since: {membership[1]}/{membership[2]}/{membership[0]}</p>
                </div>
                <div className={usercss.btnGroup}>
                    <Link to='/checkin' className={usercss.btn}>Check In</Link>
                    <Link to='/addslice' className={usercss.btn}>Add A New Slice</Link>
                    <Link to='/addstore' className={usercss.btn}>Add A New Store</Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default User;
