import React from 'react'

import './steps.scss'

import SearchDoc  from '../../../assets/icons/doctor.png'
import QA  from '../../../assets/icons/smartphone.png'
import Solution from '../../../assets/icons/solution.png'
import MakeApp  from '../../../assets/icons/appointment.png'


export default function Steps() {
  return (
    <div className='step'> 
       <div className='max-width'>
         <h1>Get your Solutions <span>in Easy Steps</span> </h1>
         <div className="content">
          <div className='card'>
           <div className="box">
               <div className='step-logo'>
                <img src={SearchDoc} alt="search doc" />
               </div>
               <h3>Search Doctors</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias rerum, quis tempore dignissimos aspernatur?</p>
           </div>
          </div>

          <div className='card'>
           <div className="box">
           <div className='step-logo'>
                <img src={QA} alt="search doc" />
               </div>
               <h3>Request consultation</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias rerum, quis tempore dignissimos aspernatur?</p>
           </div>
          </div>

          <div className='card'>
           <div className="box">
           <div className='step-logo'>
                <img src={MakeApp} alt="search doc" />
               </div>
               <h3>Make Appointment</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias rerum, quis tempore dignissimos aspernatur?</p>
           </div>
          </div>

          <div className='card'>
           <div className="box">
           <div className='step-logo'>
                <img src={Solution} alt="search doc" />
               </div>
               <h3>Get Solutions</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias rerum, quis tempore dignissimos aspernatur?</p>
           </div>
          </div>
         </div>
       </div>    
    </div>
  )
}
