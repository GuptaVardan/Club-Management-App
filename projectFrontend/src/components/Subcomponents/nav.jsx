import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Navbar.css"

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink className={(e) => {return e.isActive? "red":""}} to="/admin/home">admin</NavLink></li>
            <li><NavLink className={(e) => {return e.isActive? "red":""}} to="/admin/create">Create an Event</NavLink></li>
            <li><NavLink className={(e) => {return e.isActive? "red":""}} to="/admin/delete">Delete an Event</NavLink></li> 
            <li><NavLink to="/login_admin">Log Out</NavLink></li> 
        </ul> 
      </nav>
    </div> )
}

export default Nav
