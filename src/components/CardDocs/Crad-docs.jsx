import React from 'react';
import image from '../../assets/doctor.jpg';

import './card-docs.css'

export default function Card({docs}) {

  
  return (
      
         <div className="docs-row">
            <div className='docs-column'>
            <div className='docs-card' >
            <img src={image} alt="img"/>
            <div className="docs-container">
              <h3> <span>Name</span>  : {docs.fname} {docs.lname} </h3>
              <p> <span>Description</span>  : {docs.description}</p>
              <p> <span>Specialty</span>  : {docs.name}</p>
              <button class="docs-button">Book Appointment</button>
            </div>
         </div>
         </div>
         
       </div>
     

  )
}
