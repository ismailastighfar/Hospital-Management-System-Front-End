import React from 'react'
import './SecondaryButton.scss'
function SecondaryButton(props) {
  return (
    <div className='secondary-button'>
        <button>{ props.content }</button>
    </div>
  )
}

export default SecondaryButton