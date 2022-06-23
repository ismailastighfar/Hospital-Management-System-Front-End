import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { MdOutlineDateRange } from 'react-icons/md'
function AppointmentSection({token}) {
    const [appointements, setappointements] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/appointments`,{ headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }}).then( (res) => {
            setappointements([...res.data])
            
        })
    }, [])

  return (
    <div className='app__profile-services-items2'>
        <h3>Your Appointement</h3>
        <div className="app__profile-services-appItems">
             {
            appointements.map((appointement) => {
                return (
                    <div key={appointement.id} className="app__profile-services-appItem">
                         <h4>Appointement with {appointement.doctor.lname+' '+appointement.doctor.fname}</h4>
                         <div className='card-item' ><MdOutlineDateRange /><p>{appointement.date} {appointement.time}</p></div>
                         <div className="card-item"><p>duration: {appointement.duration} min</p></div> 
                         <div className="card-item"><p> status: { appointement.status == '0' ? ' waiting for accepting': appointement.status == '1' ? ' accepted' : 'done'}</p></div> 
                         <div className="card-item"> details: <br /> {appointement.details} slihv epivb bv sdiovebj</div> 
                            <div className='primary-    button'> 
                                <button style={{  cursor: 'pointer', border:'none', color:'white' , background: '#40404020', padding: '.4rem .8rem .2rem .8rem', margin:'0 0 0 0 '}}>{ appointement.status == '1' ? 'No prescreption yet': appointement.status == '2' ? 'download prescreption' : 'No prescreption yet'  }</button>
                            </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default AppointmentSection