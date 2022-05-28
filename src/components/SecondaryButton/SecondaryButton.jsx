import React from 'react'
import './SecondaryButton.scss'
function SecondaryButton(props) {
  return (
    <div className='secondary-button' style={props.style}>
        <button onClick={props.onClick}>{ props.content }</button>
    </div>
  )
}

export default SecondaryButton