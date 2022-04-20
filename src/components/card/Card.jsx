import React from 'react'

import './card.css'

export default function Card({content , logo , color }) {

  const mystyle = {
    backgroundColor: color
  }
  return (
//  <div className='cart'> 
//     <div className='cart-max-width'>
//      <div className="cart-content">


       <div className='cart-card' >
        <div className="cart-box" style={mystyle}>
            <h3>{content}</h3>
            <div className='cart-step-logo'>
             <img src={logo} alt="search doc" />
            </div>
        </div>
       </div>
//      </div>
//    </div>
//  </div>
  )
}
