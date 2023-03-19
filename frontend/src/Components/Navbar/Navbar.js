import React from 'react'
import './Navbar.css';
import translogo from '../../Images/translogo.png'

const Navbar = () => {
    if (localStorage.getItem("token") == "xxx") {
        return (
            <div class="nav">
                <div class="nav-header">
                    <img class='logo' src={translogo} />
                    <div class="nav-title">
                        <a href="/" target="_self" className='btn0'>
                            <span class="replies">H-oracle</span>
                        </a>
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

                    <a href="/Login" target="_self" className='btn1'>
                        <span class="replies">Login</span>
                        <span class="comments"></span>
                    </a>

                </div>
            </div >
        )
    }
    else {
        return (
            <div class="nav">
                <div class="nav-header">
                    <img class='logo' src={translogo} />
                    <div class="nav-title">
                        <a href="/" target="_self" className='btn0'>
                            <span class="replies">H-oracle</span>
                        </a>
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
                    <a href="/Login" target="_self" className='btn1'>
                        <span class="replies">Login</span>
                        <span class="comments"></span>
                    </a>

                </div>
            </div >
        )
    }
}

export default Navbar;