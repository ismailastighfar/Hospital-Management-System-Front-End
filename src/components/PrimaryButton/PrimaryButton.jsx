import React from 'react'
import './PrimaryButton.scss'
function PrimaryButton(props) {
  return (
    <div className='primary-button'>
        <button>{ props.content } </button>
    </div>
  )
}

export default PrimaryButton