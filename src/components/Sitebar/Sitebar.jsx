import React from 'react'
import SitebarItem from './SitebarItem/SitebarItem'


const Sitebar = (props) => {
  let sitebarElements = props.sitebar
    .map(s => <SitebarItem name={s.name} id={s.id} avatar={s.avatar} />)
  return <div>
    <h1>Friends</h1>
    {sitebarElements}
  </div>
}




export default Sitebar