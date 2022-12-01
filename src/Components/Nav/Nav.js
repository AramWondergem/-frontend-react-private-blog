import React from 'react';
import {NavLink} from "react-router-dom";

function Nav({isAuth,toggleIsAuth}) {
    return (
        <nav>
            <ul>
                <NavLink
                    className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/">
                    Home
                </NavLink>
                { isAuth && <NavLink
                    className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/overview">
                    Blogpost
                </NavLink> }
                { isAuth ? <button type="button" onClick={() => toggleIsAuth(false)}>Uitloggen</button> : <NavLink
                    className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                    to="/login">
                    Login
                </NavLink>}
            </ul>
        </nav>
    );
}

export default Nav;