import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

import navigationcss from './Navigation.module.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className={`${navigationcss.btn} ${navigationcss.logsign}`}to="/login">Log In</NavLink>
                <NavLink className={`${navigationcss.btn} ${navigationcss.logsign}`}to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div className={navigationcss.navContainer}>
            <div className={navigationcss.sectionsOne}>
                <NavLink className={`${navigationcss.btn} ${navigationcss.home}`} exact to="/">UNSLIC'D</NavLink>
            </div>
            <div className={navigationcss.sectionsTwo}>
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
