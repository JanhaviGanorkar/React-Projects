import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav flex >
      <NavLink to="home"><li className='mr-4'>Home</li></NavLink>
      <NavLink to="about"><li className='mr-4'>About</li></NavLink>
    </nav>
  )
}

export default Navbar
