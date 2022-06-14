import React, { useEffect, useState} from 'react';
import image from '../../assets/doctor.jpg';
import { PrimaryButton, SecondaryButton } from '../';
import './card-docs.scss'
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
export default function Card({docs}) { 
  const navigate = useNavigate();
  
  const handleAppointementButton = () =>{
    navigate(`/Appointement/create/${docs.id}`)
  }
  const handleDoctor = () =>{
    navigate(`/doctor/${docs.id}`)
  }
  return (
      
         <motion.div
         initial={{ 
           y: 200,
           opacity: 0
           }}
         whileInView={{
           y: 0,
           opacity:1
         }}
         transition={{
           duration: .3
         }}
         className="app__doctor-card">
        
              <div className="app__doctor-card_container" data-content={docs.availability} data-style={ docs.availability == 'Unavailable' ? 'false' : 'true'  }>
                <img src={image} alt="img"  />
                <h3> {docs.fname} {docs.lname} </h3>
                <p> {docs.description}</p>
                <h4>Specialty: {docs.specialty.name}</h4>
                <h4>Department: {docs.department.dept_name}</h4>
              </div>
                <div className="app__doctor-card_button">
                  <PrimaryButton content='Book Now' onClick={handleAppointementButton} />
                  <SecondaryButton content='More info' style={{margin:'0'}} onClick={handleDoctor}/>
                </div>
                
         
       </motion.div>
     

  )
}
