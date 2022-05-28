import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MdOutlineAlternateEmail, MdPhoneEnabled,MdLocationOn, MdPerson } from 'react-icons/md'
import QuestionSection from './QuestionSection/QuestionSection'
import AppointmentSection from './AppointementSection/AppointmentSection'
import './Profile.scss'
function Profile() {

  const data =  JSON.parse(localStorage.getItem('currentUser'))
  const id = data.userDetails.patient.id
  const token = data.token
  const [user, setuser] = useState({})
  const [patient, setpatient] = useState({})

  useEffect(() => {


    axios.get(`http://127.0.0.1:8000/api/patients/${id}`,{ headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
    }}).then( (res) => {
        setuser(res.data.user)
        setpatient(res.data)
    })

  }, [])
  
  return (
    <div className="app__profile">
      <div className="app__profile-info">
        <div className="app__profile-info_img">
          <img src={patient.avatar} alt="" />
        </div>
        <div className="app__profile-info_details">
          <h2><MdPerson /> fullname: { patient.fullname }</h2>
          <h2>age:  { patient.age }</h2>
          <h2><MdPhoneEnabled /> phone: { patient.phone }</h2>
          <h2><MdOutlineAlternateEmail /> email: { user.email }</h2>
          <h2><MdLocationOn /> address: { patient.address} </h2>
        </div>
        <div className="app__profile-info-health">
          <div className="primary-button">
            <button>Edit</button>
          </div>
        </div>
      </div>
      <div className="app__profile-services">
          <AppointmentSection token={token} />
          <QuestionSection id={id} token={token} />
      </div>
    </div>
  )
}

export default Profile