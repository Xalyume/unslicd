import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

import navcss from './Navigation.module.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();

    console.log("this is the user", user)

    const [showMenu, setShowMenu] = useState(false);

    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    // };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());

        return history.push('/');
    };

    return (
        <div className={navcss.sectionsTwo}>
            {/* <button onClick={openMenu} className={navcss.profile}> */}
                <img src={user.profilePicture}
                    alt="profile_pic" className={navcss.pic} />
            {/* </button> */}
            {/* {showMenu && ( */}
                <div className={navcss.userText}>
                    <p className={navcss.btn}>{user.username}</p>
                    <p className={navcss.btn}>{user.email}</p>
                    <p>
                        <button onClick={logout} className={navcss.logoutbtn}>Log Out</button>
                    </p>
                </div>
            {/* )} */}
        </div>
    );
}

export default ProfileButton;
