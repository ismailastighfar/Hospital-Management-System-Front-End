import React from 'react'

import './Login.scss'
function Login() {
  return (
    <div className='app__login'>
        <div className="app__login-wrapper">
        <div className='navbar-links-logo'>
            <p>Midi<span>Aid</span></p>
        </div>
        <form action="">

            <input type="email" placeholder='Email' className='app_input' />
            <input type="password" placeholder='passwoord' className='app_input' />

        </form>
        </div>
    </div>
  )
}

export default Login