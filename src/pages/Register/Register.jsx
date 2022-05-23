import React, {useState, useEffect, useRef  } from 'react'
import "./Register.scss"
import { register, register2 } from '../../assets'
import axios from 'axios'
import { motion } from 'framer-motion'
import { PasswordInput , PrimaryButton, Loader } from '../../components'
import { useNavigate } from 'react-router-dom'
function Register() {
  const nav = useNavigate()
  const [isload, setisload] = useState(false)
  const [usernameError, setusernameError] = useState('')
  const [emailError, setemailError] = useState('')
  const [passwordError, setpasswordError] = useState([])
  const [ form1, setform1] = useState({
    username: '', 
    email: '',
    password: '',
    gender: 'male',
    password_confirmation: '',
    role: '1'
  });
  
  const handelChangesForm1 = (e) => {

    const value = e.target.value
    setform1({
      ...form1,
      [e.target.name] : value
    })

  }
  const handelFirstFrom = (e) => {
    e.preventDefault()
    setisload(true)
    const data = JSON.stringify(form1);
    axios.defaults.withCredentials = true;
    axios.get('http://localhost:8000/sanctum/csrf-cookie' ).then( () => {
      axios.post('http://localhost:8000/api/users', data , { 
        headers:{ 
          'Content-Type': 'application/json; multipart/form-data',
        } 
      }).then( (res) => {
        localStorage.setItem('user', res.data.user.user.id)
        localStorage.setItem('token', res.data.user.token)
        nav('/CreateProfile')
    }).catch( error => {
      if(error.response.data.errors.username){
        error.response.data.errors.username.forEach(element => {
           setusernameError(element)
           
         });
      }
      if(error.response.data.errors.email){
        error.response.data.errors.email.forEach(element => {
           setemailError(element)
         });
      }
      if(error.response.data.errors.password){
          let passwordErrors = [ ...error.response.data.errors.password ]
          setpasswordError(passwordErrors)
      }
      setisload(false)
      }
      )
    })
  }
  return (
    <div className="app__register reverse" >
      <div className="app__register-form app__padding" >
          <motion.form initial={{ y: 100 , opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}  transition={{ duration: .5}} onSubmit={handelFirstFrom}>
            <div className="app__register-input_header">username</div>
            <input type="text" className={usernameError ? 'app_input input_error' : 'app_input'} name='username' placeholder='username' onChange={handelChangesForm1} required/>
            <p className='p_error'>{usernameError}</p>
            <div className="app__register-input_header">Email</div>
            <input type="email" className={emailError ? 'app_input input_error' : 'app_input'}  name='email' placeholder='exemple@gmail.com' onChange={handelChangesForm1} required/>
            <p className='p_error'>{emailError}</p>
            <div className="app__register-input_header">Passwoord</div>
            <PasswordInput placeholder='Enter Password' className={passwordError[0] ? 'app_input input_error' : 'app_input'} name='password' onChange={handelChangesForm1} required />
            <p className='p_error'>{passwordError[0]}</p>
            <div className="app__register-input_header">confirmation</div>
            <PasswordInput placeholder='Confirme Password' className={passwordError[1] ? 'app_input input_error' : 'app_input' } name="password_confirmation" onChange={handelChangesForm1} required/>
            <p className='p_error'>{passwordError[1]}</p>
            <div className="app__register-input_header">gender</div>
            <select name="gender" id="gender" className='app_input' onChange={handelChangesForm1} required>
              <option value="male" >male</option>
              <option value="female" >female</option>
            </select>
            <div className="primary-button " style={{ width: '40%', padding: '2rem 0'}} >
                  <button type='submit'  disabled= { isload ? true : false  }> { isload && ('loading...') } { !isload && ( 'Suivant' ) }  </button>
            </div>  
          </motion.form>
      </div>
      <motion.div initial={{  opacity: 0 }} whileInView={{ opacity: 1}} transition={{ duration: 1 }} className="app__register-img">
          
          <h1>join our <span>society</span> and save your health  </h1>
          <img src={register} alt="" />
          
      </motion.div>
    </div>
  )
}

export default Register