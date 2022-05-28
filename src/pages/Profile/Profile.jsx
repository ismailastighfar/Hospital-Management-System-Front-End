import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Profile.scss'
function Profile() {

  const data =  JSON.parse(localStorage.getItem('currentUser'))
  const id = data.userDetails.patient.id
  const token = data.token
  const [user, setuser] = useState({})
  const [patient, setpatient] = useState({})
  const [question, setquestion] = useState(false)
  const [appointement, setappointement] = useState([])
 useEffect(() => {
  axios.get(`http://127.0.0.1:8000/api/appointments`,{ headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }}).then( (res) => {
    setappointement(res.data)
    console.log(appointement)
  })
 }, [])
 
  useEffect(() => {


    axios.get(`http://127.0.0.1:8000/api/patients/${id}`,{ headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
    }}).then( (res) => {
        setuser(res.data.user)
        setpatient(res.data)
        
    })

    axios.get(`http://127.0.0.1:8000/api/questions/patient/${id}`,{ headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }}).then( (res) => {
       setquestion(false)
    })
  }, [])
  
  return (
    <div className="app__profile">
      <div className="app__profile-info">
        <div className="app__profile-info_img">
          <img src={patient.avatar} alt="" />
        </div>
        <div className="app__profile-info_details">
          <h1>{ patient.fullname }</h1>
          <h2>{ patient.age }</h2>
          <h2>{ patient.phone }</h2>
          <h2>{ user.email }</h2>
          <div className="primary-button">
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className="app__profile-services">
         <h1>{ appointement.details }</h1>
        <h1>{ question ? 'question' : '0'}</h1>
      </div>
    </div>
  )
}

export default Profile