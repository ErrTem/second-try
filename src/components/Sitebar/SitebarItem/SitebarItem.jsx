import React from 'react'
import c from './../Sitebar.module.css'
import {
  NavLink
} from 'react-router-dom'

const SitebarItem = (props) => {
  let path='/dialogs/' + props.id
  return (
    <div className={c.user}>
      <NavLink to={path}>
        <div>
          <img className={c.avatar} src={props.avatar} />
        </div>
        <div className={c.name}>{props.name}</div>
      </NavLink>
    </div>
  )
}

export default SitebarItem