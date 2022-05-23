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
                Lorem Ipsum is simply dummy text of the printing anding industry, Lorem Ipsum is simply dummy
            ypesetting industry, Lorem Ipsum is simply.
            </p>
            <div className="app__header-button" style={{ width: '50%'}}>
                <PrimaryButton content='make an Appointment' />
            </div>
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
            animate={{ y : [ 0, 30, 0 ] }}
            transition={{ repeat: Infinity, duration: 2, type: 'tween' }}
            className="sheld">
                <img src={sheld} alt="" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Header