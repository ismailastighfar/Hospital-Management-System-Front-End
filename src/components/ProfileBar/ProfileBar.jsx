import React, { useState} from 'react'
import './ProfileBar.scss'
import {logout} from '../../components/action'
import { useAuthDispatch } from '../../components/AuthContext'
import { useNavigate } from 'react-router'
function ProfileBar({user}) {
  const [show, setshow] = useState(false)
  const toggleBar = () =>{
    setshow( (show) => !show )
  }
  const navigat = useNavigate()
  const dispatch = useAuthDispatch()  
  const handelLogOut = () => {
    logout(dispatch)
    navigat('/login')
  }
  return (
    <div className='app__profilBar'>
        <img className='app__profilBar-img' src={user.patient.avatar} alt="" onClick={toggleBar} />
        <div className={ show ? "app__profileBar-container active " : "app__profileBar-container" }>
          <img src={user.patient.avatar} alt="" />
          <h2>{user.patient.fullname}</h2>
          <h3>{user.username}</h3>
          <div className="primary-button" style={{  width: '80%'}}>
            <button>Viste Your Profile</button>
          </div>
          <div className="secondary-button" style={{ margin: '1rem 0', width: '80%'}} onClick={handelLogOut}>
            <button>Logout</button>
          </div>
        </div>
    </div>
  )
}

export default ProfileBar