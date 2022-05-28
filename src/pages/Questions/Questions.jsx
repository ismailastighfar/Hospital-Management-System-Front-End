import React from 'react'
import axios from 'axios'

function Questions() {

  const user =  JSON.parse(localStorage.getItem('currentUser'))
  const patientid = user.userDetails.patient.id
  const token = user.token

  axios.get(`http://127.0.0.1:8000/api/questions/patient/${patientid}`,{ headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }}).then( (res) => {
       console.log(res.data)
    })






  return (
    <div>
  
    </div>
  )
}

export default Questions