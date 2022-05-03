import React from 'react'
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
    <nav>
      <NavLink activeClassName='active'className='link' to='/'>Home</NavLink>
      <NavLink activeClassName='active' className='link' to='/create'>Create</NavLink>
      <NavLink activeClassName='active' to='/contact' className='link' >Contact</NavLink>
      <NavLink activeClassName='active' to='/about' className='link' >About us</NavLink>
    </nav>
    </div>
  )
}

export default Navbar