import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { MdOutlineAlternateEmail, MdPhoneEnabled,MdLocationOn, MdPerson, MdOutlineDateRange } from 'react-icons/md'
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
          <h1>  { patient.fullname }</h1>
          <h2><MdOutlineDateRange /> born on {patient.dateOfBirth}, { patient.age } years old</h2>
          <h2><MdPhoneEnabled /> +212 { patient.phone }</h2>
          <h2><MdOutlineAlternateEmail />  { user.email }</h2>
          <h2><MdLocationOn />  { patient.address} </h2>
        </div>
        
          <div className="secondary-button">
            <button>Edit</button>
          </div>
        
      </div>
      <div className="app__profile-services">
        <div className="app__profile-services-items1">
            <QuestionSection id={id} token={token}/>
            <div className="app__profile-services_health">
              <h3>Health Situation</h3>
              <h4>sickness: </h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,{patient.sickness}
              </p>
              <h4>allergess: </h4>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever {patient.allergies}
              </p>
            </div>
        </div>
        <AppointmentSection token={token} />
      </div>
    </div>
  )
}

export default Profile