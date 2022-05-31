import React, { useEffect, useState } from 'react';

import axios from 'axios';

import image from '../../assets/doctor.jpg';

import { useParams } from 'react-router'

import './doctor.css'
import { CardDocs } from '../../components';

export default function Doctor() {

    const params = useParams();
    const [data , setData] = useState([]);
    

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/doctors/${params.id}`).then((res) => { 
              setData([...res.data])
              console.log(data)
         })
      }, [])

    return (
    <div className='doctor-container'>
        {
            (
            <div className='doc-grid-container'>
               <div className="doc-grid-img">
                <img src={image} alt="img" style={{ width: '100%'}}/>
               </div>
               <div className="doc-grid-content">
                   <h1> {data[0].lname}</h1>
                   <p>Specialty : {data[0].name}</p>
                   <p>Department : {data[0].dept_name}</p>
                   <p>Description : {data[0].description}</p>
                   <p>Phone : {data[0].phone} </p>
                   <p>Email : {data[0].email}</p>
                   <div className="primary-button">
                      <button>Book Now</button>
                   </div>
               </div>
            </div>
           )
        }
    </div>
  )
}
