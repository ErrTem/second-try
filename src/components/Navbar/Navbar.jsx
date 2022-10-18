import React from 'react'
import { NavLink } from 'react-router-dom'
import SitebarContainer from '../Sitebar/SitebarContainer';
import c from './Navbar.module.css'

const Navbar = (props) => {
    const activeLink = ({ isActive }) => isActive ? c.active : c.item;
    return (

        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink
                    to='/profile'
                    className={activeLink}>
                    Profile
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/dialogs'
                    className={activeLink}
                >
                    Messages
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/practice'
                    className={activeLink}>
                    Practice
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/news'
                    className={activeLink}
                >
                    News
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/music'
                    className={({ isActive }) => `${isActive ? c.active : ''}`}
                >
                    Music
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/settings'
                    className={navData => navData.isActive ? c.active : c.item}
                >
                    Settings
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to='/users'
                    className={navData => navData.isActive ? c.active : c.item}
                >
                    Users
                </NavLink>
            </div>
            <div className={c.friends}>

                <SitebarContainer />

            </div>

        </nav>

    )
}

export default Navbar