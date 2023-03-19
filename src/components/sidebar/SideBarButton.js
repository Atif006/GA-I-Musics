import React from 'react'
import { IconContext } from 'react-icons'
import { Link, useLocation } from 'react-router-dom'
import './sidebarButtonStyle.css'

const SideBarButton = (props) => {
    const location=useLocation();
    const isActive=location.pathname===props.to;
    const btnClass=isActive? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
<div className={btnClass}>
    <IconContext.Provider value={{size:"25px",className:"btn-icon"}}>
    {props.icon}
    <p className='btn-title'>{props.title}</p>
    </IconContext.Provider>
</div>

    </Link>
    
  )
}

export default SideBarButton