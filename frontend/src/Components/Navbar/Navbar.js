import React from 'react'
import './Navbar.css';
import logo from '../../Images/logo.png'

const Navbar = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <img class='logo' src={logo} />
        <div class="nav-title">
          <a href="/" target="_self">H-oracle</a>
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="/login" target="_self" className='btn1'>
          <span class="replies">Login</span>
          <span class="comments"></span>
        </a>
      </div>
    </div >
  )
}

export default Navbar
