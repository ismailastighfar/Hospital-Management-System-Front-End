import React from 'react'
import './Header.scss'
import { doctor, sheld } from '../../../assets'
import { PrimaryButton } from '../../../components'
import { motion } from 'framer-motion'
function Header() {
  return (
    <div className='app__header'>
        <motion.div 
        initial={{
            opacity: 0,
            x: -100
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        className="app__header-info">
            <h1>
                <span>We Solve Problems </span>at Every Level of Treatment    
            </h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <PrimaryButton content='make an Appointment' />
        </motion.div>
        <motion.div
        initial={{
            opacity: 0,
            y: 100
        }}
        whileInView={{
            y: 0,
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        className="app__header-img">
            <img src={doctor} alt="" />
            <motion.div
            animate={{ y : [ 0, 50, 0 ] }}
            transition={{ repeat: Infinity, duration: 2, type: 'tween' }}
            className="sheld">
                <img src={sheld} alt="" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Header