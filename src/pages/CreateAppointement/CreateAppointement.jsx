import React from 'react'
import {useState} from 'react'
import './CreateAppointement.scss'
import axios from 'axios'
import { useParams } from 'react-router'

function CreateAppointement(props) {
    const params = useParams()
    let user =  JSON.parse(localStorage.getItem('currentUser'))
    const token = user.token
    const [errorMessage, seterrorMessage] = useState("")
    const [successMessage, setsuccessrMessage] = useState("")

    const [form, setfrom] = useState({
        doctor_id: params.id,
        patient_id: user.userDetails.patient.id,
        details: '',
        time: '',
        date: ''
    });

    const handleChange = (e) =>{
        let value = e.target.value
        setfrom({ ...form, [e.target.name]: value })
        console.log(form)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = JSON.stringify(form);
        axios.defaults.withCredentials = true;

        axios.get('http://localhost:8000/sanctum/csrf-cookie' ).then( () => {
            axios.post('http://localhost:8000/api/appointments', data , { 
                headers:{ 
                    Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json; multipart/form-data',
                } 
              }).then( (res) => {
                setsuccessrMessage(res.data.message)
                seterrorMessage("")
            }).catch( error => {
                seterrorMessage(error.response.data.message)
              })
        })
    }







  return (
    <div className='app__CreateAppointement'>
        <div className="app__CreateAppointement-form">
            {
                errorMessage && (
                    <div >
                        <p className="p_error">{errorMessage}</p>
                    </div>
                )
            }
            
            <form action="">
                <textarea type="text" rows='5' name="details" id="" className='app_input' placeholder='details' onChange={handleChange} />
            <input type="date" name="date" id="" className='app_input' placeholder='details' onChange={handleChange}/>
            <input type="time" name="time" id="" className='app_input' placeholder='details' onChange={handleChange}/>
            <div className="primary-button">
                <button onClick={handleSubmit}>make appointement</button>
            </div>
            </form>
            {
                successMessage && (
                    <div className=''>
                        <p className='p_success'>{successMessage}</p>
                        <div className="secondary-button">
                            <button>Go to your profile</button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default CreateAppointement