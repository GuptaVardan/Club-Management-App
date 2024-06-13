import React from 'react'
import "../components/Navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink className={(e) => {return e.isActive? "red":""}} to="/">Home</NavLink></li>
            <li><NavLink className={(e) => {return e.isActive? "red":""}} to="/join">Join Club</NavLink></li>
            <li><NavLink className={(e) => {return e.isActive? "red":""}} to="/login_member">Login as Member</NavLink></li>
            <li><NavLink className={(e) => {return e.isActive? "red":""}} to="/login_admin">Login as Admin</NavLink></li>   
        </ul> 
      </nav>
    </div> )
}

export default Navbar
