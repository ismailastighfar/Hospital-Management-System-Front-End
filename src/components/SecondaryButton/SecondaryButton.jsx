import React from 'react'
import './SecondaryButton.scss'
function SecondaryButton(props) {
  return (
    <div className='secondary-button'>
        <button onClick={props.onClick}>{ props.content }</button>
    </div>
  )
}

export default SecondaryButton