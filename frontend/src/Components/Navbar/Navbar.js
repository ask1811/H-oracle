import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">
          H-oracle
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
    </div>
  )
}

export default Navbar
