import React from 'react'
import { motion } from 'framer-motion';
import { RiMenu3Line , RiCloseLine} from 'react-icons/ri';
import { useState } from 'react';
import { PrimaryButton, SecondaryButton } from '../';
import { Link, useNavigate } from "react-router-dom";
import './navbar.scss'

export default function Navbar() {
  const [toggleMenu , setToggleMenu] = useState(false)

  let navigat = useNavigate();
  const handleLoginButton = () => {
    navigat("/login")
  }
  const handleRegisterButton = () =>{
    console.log('nice');
    navigat("/register")
  }
  return (
    <div className='navbar'>
      <div className='navbar-links'>
       <div className='navbar-links-logo'>
         <p>Midi<span>Aid</span></p>
       </div>
       <div className='navbar-links-container'>
        <Link to="/">Home</Link>
        <Link to="/login">Find a Doctor</Link>

       </div>
        </div>
        
        <div className="navbar-sign">
          <PrimaryButton content="sign in" onClick={handleLoginButton}/> 
          <SecondaryButton content="sign up" onClick={handleRegisterButton}/>
        </div>
        <div className="navbar-menu-button">
          {toggleMenu

          ? <RiCloseLine color="#247BEA" size={27} onClick ={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#247BEA" size={27} onClick ={() => setToggleMenu(true)} />
          
          }
        </div>
        
          
          {toggleMenu && (
            <motion.div
            initial={{
              x: 400,
              
            }}
            whileInView={{
                x: 0,
              
            }}
            transition={{
              duration: .3
            }}
            className='navbar-menu-container'>
                <div className='navbar-menu-container-links'>  
                  <motion.div to="/" animate={{ x: [100 , 0 ] }} transition={{ delay: 0.1, duration: .6}} onClick={ () => setToggleMenu(false)}  ><Link to='/'>Home</Link> </motion.div>
                  <motion.div to="/login" animate={{ x: [100 , 0 ] }} transition={{ delay: 0.2, duration: .6}} onClick={ () => setToggleMenu(false)}  ><Link to='/'>find a doctor</Link> </motion.div>
                </div>
                <div className="navbar-menu-sign">
                  <PrimaryButton content="sign in"/>
                  <SecondaryButton content="sign up"/>
                </div>
            </motion.div>
          )}
          
    </div>
  )
}
