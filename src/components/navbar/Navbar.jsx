import React from 'react'
import { RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import { useState } from 'react';

import './navbar.css'

// const Menu = () => {
//   <>
//   <p><a href="#">Home</a></p>
//   <p><a href="#">Services</a></p>
//   <p><a href="#">Consultation</a></p>
//   <p><a href="#">About</a></p>
//   <p><a href="#">Contact</a></p>
//  </>
// }



export default function Navbar() {
  const [toggleMenu , setToggleMenu] = useState(false)
  
  
  return (
    <div className='navbar'>
        <div className='navbar-links'>
       <div className='navbar-links-logo'>
         <p>Midi<span>Aid</span></p>
       </div>
       <div className='navbar-links-container'>
        <p><a href="#">Home</a></p>
        <p><a href="#">Services</a></p>
        <p><a href="#">Consultation</a></p>
        <p><a href="#">About</a></p>
        <p><a href="#">Contact</a></p>
       </div>
        </div>
        <div className="navbar-sign">
        <button type='button' className='btn-1'>sign in</button>
          <button type='button' className='btn-2'>sign up</button>
        </div>
        <div className="navbar-menu">
          {toggleMenu
          ? <RiCloseLine color="#247BEA" size={27} onClick ={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#247BEA" size={27} onClick ={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='navbar-menu-container'>
            <div className='navbar-menu-container-links'>  
              <p><a href="#">Home</a></p>
              <p><a href="#">Services</a></p>
              <p><a href="#">Consultation</a></p>
              <p><a href="#">About</a></p>
              <p><a href="#">Contact</a></p>
            </div>
            <div className="navbar-menu-sign">
            <button type='button' className='btn-1' >sign in</button>
            <button type='button' className='btn-2'> sign up</button>
            </div>
            </div>
          )}
        </div>

    </div>
  )
}
