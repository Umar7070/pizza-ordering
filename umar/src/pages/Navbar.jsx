import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Css/Navbar.css';
// import{NavLink} from 'react-router-dom'
import umar from '../image/ulogo.jpg'

export default function Navbar() {
  return (
   <>
      <nav>
        <div className="logo">
          <img src={umar} alt=""  />
        </div>
      <div className='menuIcon'>
        <ul className='nav-List'>
          <li>
            <NavLink to='/home ' className='same'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' className='same'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className='same'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/servic' className='same'>Servic</NavLink>
          </li>
        </ul>
      </div>
      <header></header>
  
   </nav>
   
   </>
   
  )
}
