import axios from 'axios'
import React, { useState, useEffect} from 'react'

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
    <div>
        {
            appointements.map((appointement) => {
                return (
                    <div key={appointement.id}>
                         <h1>{appointement.details}</h1>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AppointmentSection