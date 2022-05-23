import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import {  SecondaryButton } from '../../components'
import { FiMail, FiAtSign } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io'
import { login } from '../../assets';
import './Login.scss';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate()
  const [isload, setisload] = useState(false)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [loginError, setloginError] = useState('')
  async function  handleSubmit(e){
    e.preventDefault()
    setisload(true)
    axios.defaults.withCredentials = true;
    const data = JSON.stringify({ email: email, password: password })
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() =>
        {
          
          axios.post('http://localhost:8000/api/patient/login', data, {
            headers:{
              'Content-Type': 'application/json'
            }
          } ).then( res => {
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('fullname', res.data.patient.patient.fullname )
            localStorage.setItem('avatar', res.data.patient.patient.avatar )
            localStorage.setItem('user', res.data.patient.patient.user_id )
            // navigate()
          } ).catch((error) => {
            if(error.response.data.message){
              setloginError(error.response.data.message)
              setisload(false)
            }
          })
        }
    );

    

  }
  return (
    <div className='app__login'>
    
        <div className="app__login-wrapper">
        <div className='navbar-links-logo' style={{ textAlign: 'center'}} >
            <p style={{ fontSize: '4rem' }}>Midi<span>Aid</span></p>
        </div>
        {
          loginError && (
          <div className="errorBar">
            { loginError }
          </div>
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
              <button type='submit'  disabled= { isload ? true : false  }> { isload && ('loading...') } { !isload && ( 'Login' ) }  </button>
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