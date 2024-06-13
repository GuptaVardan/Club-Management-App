import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import "../Navbar.css"

const NavMember = () => {
  const member = useParams().memberName
  console.log()
  return (
    <div>
      <nav>
        <ul>
            <li><NavLink className={(e) => {return e.isActive? "red":""}} to={`/members/${member}`} >{member}</NavLink></li>
            <li><NavLink to="/login_member">Log Out</NavLink></li> 
        </ul> 
      </nav>
    </div> )
}

export default NavMember
