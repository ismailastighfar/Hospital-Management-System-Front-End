import React, { useState} from 'react'
import './PasswordInput.scss'
import { FiEye , FiEyeOff } from 'react-icons/fi'
function PasswordInput(props) {
    const [hidden, sethidden] = useState(true)
    const Icon = () => {
        return  hidden ? <FiEye /> : <FiEyeOff/>
    }
    const toggle = () => {
        sethidden((hidden) => !hidden)
    }
  return (
    <div className='app__password-input'>
        <div className='input-setHiddenButton' onClick={toggle} >
            <Icon  />
        </div>
        <input type={ hidden ? "password" : "text"} name={props.name} placeholder={props.placeholder} className={props.className} onChange={props.onChange}/>
    </div>
  )
}

export default PasswordInput