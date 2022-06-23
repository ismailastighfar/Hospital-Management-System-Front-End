
import React, { useState, useContext } from 'react'
import {  SecondaryButton } from '../../components'
import { FiMail, FiAtSign } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io'
import { login } from '../../assets';
import './Login.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { loginUser, logout } from '../../components/action';
import { useAuthDispatch, useAuthState } from '../../components/AuthContext';

function Login() {
  const dispatch = useAuthDispatch()
  const user = useAuthState()
  const navigate = useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  async function  handleSubmit(e) {
    e.preventDefault()
    let credits = {
      email: email,
      password: password
    }
    loginUser(dispatch, credits).then((response) => { 
      if(response.userDetails){
        navigate('/profile')
        window.location.reload()
        return
      }
      return
    })

  }
  return (
    <div className='app__login'>
    
        <div className="app__login-wrapper">
        <div className='navbar-links-logo' style={{ textAlign: 'center'}} >
            <p style={{ fontSize: '4rem' }}>Midi<span>Aid</span></p>
        </div>
        
         {
           (user.errorMessage && !user.loading) && (
                <div className="errorBar">{ user.errorMessage }</div>
           )
              
           
         }
        
        <motion.form
        initial={{ y: 100, opacity: 0}}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .5}}
        action="" onSubmit={handleSubmit}>

          <div className="app__login-from-input">
            <label htmlFor="email" > <FiMail style={{ fontSize: "1.05rem" }}/> </label>
            <input type="email" placeholder='Email' name='email' className='app_input' onChange={(e) => setemail(e.target.value)} />
          </div>

          <div className="app__login-from-input">
            <label htmlFor="password"><FiAtSign /></label>
            <input type="password" placeholder='passwoord' name='password ' className='app_input' onChange={(e) => setpassword(e.target.value)} />
          </div>
          <div className="app__login-para">
            <a href="#">forget password ?</a> 
          </div>
          <div className="app__login-button">
           
            <div className="primary-button" style={{ width: '100%'}}>
            <button type='submit' disabled={ user.loading ? true : false}  > { user.loading ? 'Loading' : 'login'}</button>
            </div>
            
            <SecondaryButton content='create a new account' onClick={ () => navigate('/register')} />
          </div>

        </motion.form>
        </div>
        <div className="app__login-info">
          
            <img src={login} alt="" />
            <h1> <span>Wellcome back !</span> <br /> login and benefit our amazing services</h1>
            <IoMdArrowDropdown  className='app__login-down-icon' />
        </div>
    </div>
  )
}

export default Login