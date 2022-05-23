import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import {  SecondaryButton } from '../../components'
import { FiMail, FiAtSign } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io'
import { login } from '../../assets';
import './Login.scss';
import { motion } from 'framer-motion';

function Login() {

  // hundle Input bu using one useState 
  // const [ form, setform] = useState({
  //   email: '', 
  //   password: ''
  // });
  
  // function handleChange(e){

  //   const value = e.target.value
  //   setform({
  //     ...form,
  //     [e.target.name] : value
  //   })
  // }
  
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  async function  handleSubmit(e){
    e.preventDefault();  
    axios.defaults.withCredentials = true;
    const data = JSON.stringify({ email: email, password: password })
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then( () =>
        {
          axios.post('http://localhost:8000/api/patient/login', data, {
            headers:{
              'Content-Type': 'application/json'
            }
          } ).then( res => console.log( res.data) )
        }
    );

    

  }
  return (
    <div className='app__login'>
    
        <div className="app__login-wrapper">
        <div className='navbar-links-logo' style={{ textAlign: 'center'}} >
            <p style={{ fontSize: '4rem' }}>Midi<span>Aid</span></p>
        </div>
        <motion.form
        initial={{ y: 100, opacity: 0}}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .5}}
        action="" onSubmit={handleSubmit}>

          <div className="app__login-from-input">
            <label for="email" > <FiMail style={{ fontSize: "1.05rem" }}/> </label>
            <input type="email" placeholder='Email' name='email' className='app_input' onChange={(e) => setemail(e.target.value)} />
          </div>

          <div className="app__login-from-input">
            <label for="password"><FiAtSign /></label>
            <input type="password" placeholder='passwoord' name='password ' className='app_input' onChange={(e) => setpassword(e.target.value)} />
          </div>
          <div className="app__login-para">
            <a href="#">forget password ?</a> 
          </div>
          <div className="app__login-button">
           
            <div className="primary-button" style={{ width: '100%'}}>
              <button type='submit' >LOGIN</button>
            </div>
            
            <SecondaryButton content='create a new account' />
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