import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

import navcss from './Navigation.module.css'

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

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
    };

    return (
        <div className={navcss.sectionsTwo}>
            <button onClick={openMenu} className={navcss.profile}>
                <img src={"https://bellfund.ca/wp-content/uploads/2018/03/demo-user.jpg"}
                alt="profile_pic" className={navcss.pic}/>
            </button>
            {showMenu && (
                <div>
                    <p className={navcss.btn}>{user.username}</p>
                    <p className={navcss.btn}>{user.email}</p>
                    <p>
                        <button onClick={logout} className={navcss.logoutbtn}>Log Out</button>
                    </p>
                </div>
            )}
        </div>
    );
}

export default ProfileButton;
