import React from 'react'
import {Card} from '../../../components';
import { Dentistry, Patient , Head , Headache , Hiv , Medicine } from '../../../assets';
import {motion} from 'framer-motion';
import {useState , useEffect , useRef} from 'react';


import './specialties.scss'


export default function Specialties() {

  const [width , setWidth] = useState(0)
  const carousel = useRef()
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className='specialty'>
      <div className="heading">
      <h1> Our Consulting<span> Specialties</span></h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Officiis laborum dolorem ab perferendis 
        explicabo quibusdam consectetur porro molestiae adipisci ullam.
        </p>
      </div>
     
   
    <motion.div ref={carousel} className='carousel'>
      
      <motion.div className="inner" 
      drag='x'
      dragConstraints={{right:0 , left : -width}}
      >
        <motion.div className='item'>
        < Card content= "Dentistry" logo={Dentistry}  color="#EEFAFF"/>  
        < Card content= "Medicine" logo={Medicine} color="#FFF8ED"/>  
        < Card content= "Head" logo={Head} color="#FFF1F2"/>
        < Card content= "Headache" logo={Headache} color="#EFFFF3"/>
        < Card content= "Hiv/Aids" logo={Hiv} color="#EFFFF3"/>
        < Card content= "Patient" logo={Patient} color="#EFF1FF"/>
        < Card content= "test" logo={Patient} color="#FFF8ED"/>
        < Card content= "Headache" logo={Headache} color="#EFFFF3"/>
        < Card content= "Patient" logo={Patient} color="#EFF1FF"/>
        </motion.div>
      </motion.div>
    </motion.div>
    </div>
  )
}
