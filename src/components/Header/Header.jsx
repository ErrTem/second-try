import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './Header.module.css'

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src='https://i.pinimg.com/originals/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg'></img>

            <div className={c.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login/*'}>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}

export default Header