import React from 'react'
import { NavLink } from 'react-router-dom'
import c from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={c.dialog}>

            <NavLink to={path}>
                <div className={c.user}><img src={props.avatar} /></div>
                <div className={c.user}>{props.name}</div>
            </NavLink>

        </div>
    )
}


export default DialogItem