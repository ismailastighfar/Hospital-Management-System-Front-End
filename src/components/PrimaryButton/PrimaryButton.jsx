import React from 'react'
import './PrimaryButton.scss'
function PrimaryButton(props) {
  return (
    <div className='primary-button' style={props.style} >
        <button onClick={props.onClick} >{ props.content } </button>
    </div>
  )
}

export default PrimaryButton