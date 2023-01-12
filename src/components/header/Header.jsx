import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <ul className='nav-container'>
          <li className='logo'><a href='LOGO'>LOGO</a></li>
          <li><a href='ABOUT'>ABOUT</a></li>
          <li><a href='COMMUNITY'>COMMUNITY</a></li>
          <li><a href='LOCATION'>LOCATION</a></li>
          <li><a href='OUR MENU'>OUR MENU</a></li>
          <li><a href='RECIPES'>RECIPES</a></li>
        </ul>
      </div>
      <div>
        <ul className='nav-container'>
          <li><a href='CONTACT'>CONTACT</a></li>
          <li><a href='LOGIN'>LOGIN</a></li>
        </ul>
      </div>
    </header>
  )
}
export default Header;