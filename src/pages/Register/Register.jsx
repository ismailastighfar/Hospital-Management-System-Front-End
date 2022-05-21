import React, {useState, useEffect, useRef  } from 'react'
import "./Register.scss"
import { register, register2 } from '../../assets'
import axios from 'axios'
import { motion } from 'framer-motion'
import { PasswordInput , PrimaryButton } from '../../components'

function Register() {
  const [avatars, setavatars] = useState([])
  useEffect(() => {
    
    axios.get("http://127.0.0.1:8000/api/avatars").then((res) => setavatars(res.data));
    
  }, [])
  const [step1, setstep1] = useState(true)
  return (
    <div className={step1 ? "app__register reverse " : 'app__register' }>
      <div className="app__register-form app__padding" >
        { step1 &&
          <motion.form initial={{ y: 100 , opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}  transition={{ duration: .5}}>
            <div className="app__register-input_header">username</div>
            <input type="text" className='app_input' name='username' placeholder='username' />
            <div className="app__register-input_header">Email</div>
            <input type="email" className='app_input' name='email' placeholder='exemple@gmail.com' />
            <div className="app__register-input_header">Passwoord</div>
            <PasswordInput placeholder='Enter Password' name='password' />
            <div className="app__register-input_header">confirmation</div>

            <PasswordInput placeholder='Confirme Password' name="password-confirmation"/>
            <div className="primary-button" style={{ width: '50%', padding: '2rem 0'}} >
              <button type='button' onClick={() => setstep1(false)} >Suivant</button>
            </div>  
          </motion.form>
          
        }
        { !step1 && (
          <motion.form initial={{ y: 100 , opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}  transition={{ duration: .5, delay: 0.5}} action="">
          <div className="app__register-input_header">Full name</div>
          <div className="app__register-input">
            <input type="text" className='app_input' name='first name' placeholder='First name' />
            <input type="text" className='app_input' name='last name' placeholder='Last name' />
          </div>
          <div className="app__register-input_header">Birth Date</div>
          <div className="app__register-input">
            <input type="text" className='app_input' name='first name' placeholder='Day' />
            <input type="text" className='app_input' name='first name' placeholder='Mounth' />
            <input type="text" className='app_input' name='first name' placeholder='Year' />
          </div>
          <div className="app__register-input">
            <div style={{ width: '100%' }}>
              <div className="app__register-input_header">CNE</div>
              <input type="text" className='app_input' name='first name' placeholder='Enter your CNE Code' />
            </div>
            <div style={{ width: '100%' }}>
              <div className="app__register-input_header">Phone</div>
              <input type="text" className='app_input' name='first name' placeholder='+212' />
            </div>
          </div>
          <div className="app__register-avatars">
          {
            avatars.map((avatar) => {
              return (
                <label htmlFor={avatar} key={avatar} >
                  <input type="radio" name='avatar' value={avatar} id={avatar}  />
                  <img src={avatar} alt="avatar" />
                </label>
              )
            })
          }
            </div>
            <div className="app__register-input_header">Allergies</div>
            
            <div className="app__register-input">
                  <textarea type="text" rows='5' className='app_input' name='first name' placeholder='write here' />
            </div>

            <div className="app__register-input_header">sikness</div>
            <div className="app__register-input">
                  <textarea type="text" rows='5' className='app_input' name='first name' placeholder='write here' />
            </div>

            <div className="app__checkbox">
              <input type="checkbox" name="accepte condition" id="chckebox" /> <label htmlFor="">accept our condition</label> 
            </div>
            <PrimaryButton content='Create Account'/>

          </motion.form>
        )
        }
        
      </div>
      { step1 && (
        <motion.div initial={{  opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} className="app__register-img">
          
          <h1>join our  <span>society</span> and save your health  </h1>
          <img src={register} alt="" />
          
        </motion.div>
      )
      }
      {
        !step1 && 
        <motion.div  initial={{  opacity: 0 }} whileInView={{  opacity: 1}}  transition={{ duration: 0.8 }} className="app__register-img">
          <img src={register2} alt="" />
          <h1>join our  <span>society</span> and save your health  </h1>
        </motion.div>
      }
      
      
    </div>
  )
}

export default Register