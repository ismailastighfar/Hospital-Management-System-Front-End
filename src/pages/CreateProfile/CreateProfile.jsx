import { motion } from 'framer-motion'
import React, {useState, useEffect} from 'react'
import { PrimaryButton } from '../../components'
import { register2 } from '../../assets'
import axios from 'axios'

function CreateProfile() {
    const [avatars, setavatars] = useState([])
    const [ profil, setprofil ] = useState({
        fullname: '',
        age: '',
        phone:'',
        cne:'',
        dateOfBirth: '',
        avatar:'',
        user_id: '',
        allergies: '',
        sikness: ''
    });
    const [form, setform] = useState({
        fname: '',
        lname: '',
        day: '',
        month: '',
        year: '',
        cne: '',
        phone: '',
        avatar: '',
        sickness: '',
        allergies: '',
    })
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/avatars").then((res) => setavatars(res.data));
    
    }, [])
    const HandelChange = (e) => {
        const value = e.target.value
        setform({ ...form , [ e.target.name]: value  })  
    }
    const handelSubmit = (e) =>{
        e.preventDefault();  
        let birthDateFormated = new Date(form.day +'-' +form.month +'-'+form.year)
        let Today = new Date()
        let age = Today.getFullYear() - birthDateFormated.getFullYear()

        const formToProfile = {
            fullname: form.lname + ' ' + form.fname,
            age: age,
            phone: form.phone,
            cne: form.cne,
            dateOfBirth: form.year + '-' + form.month + '-'+ form.day,
            avatar: form.avatar,
            user_id: localStorage.getItem('user'),
            allergies: form.allergies,
            sickness: form.sickness
        }   
        setprofil(formToProfile);
        let data = JSON.stringify(profil);
        axios.defaults.withCredentials = true;
        const token = localStorage.getItem('token')
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(() => {

            axios.post('http://localhost:8000/api/patients', data, { headers :{
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }}).then((res) => console.log(res) ).catch( error => console.log(error.response.data))

        })
    }

        
  return (
    <div className="app__register">
        <motion.form className='app__register-form' initial={{ y: 100 , opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}  transition={{ duration: .5, delay: 0.5}} onSubmit={handelSubmit} >
        <div className="app__register-input_header">Full name</div>
        <div className="app__register-input">
          <input type="text" className='app_input' name='fname' placeholder='First name' onChange={HandelChange} />
          <input type="text" className='app_input' name='lname' placeholder='Last name' onChange={HandelChange} />
        </div>
        <div className="app__register-input_header">Birth Date</div>
        <div className="app__register-input">
          <input type="text" className='app_input' name='day' placeholder='day' onChange={HandelChange} />
          <input type="text" className='app_input' name='month' placeholder='month' onChange={HandelChange} />
          <input type="text" className='app_input' name='year' placeholder='year' onChange={HandelChange} />


        </div>
        <div className="app__register-input">
          <div style={{ width: '100%' }}>
            <div className="app__register-input_header">CNE</div>
            <input type="text" className='app_input' name='cne' placeholder='Enter your CNE Code' onChange={HandelChange} />
          </div>
          <div style={{ width: '100%' }}>
            <div className="app__register-input_header">Phone</div>
            <input type="text" className='app_input' name='phone' placeholder='+212' onChange={HandelChange} />
          </div>
        </div>
        <div className="app__register-avatars">
        {
          avatars.map((avatar) => {
            return (
              <label htmlFor={avatar} key={avatar} >
                <input type="radio" name='avatar' value={avatar} id={avatar}  onChange={HandelChange} />
                <img src={avatar} alt="avatar" />
              </label>
            )
          })
        }
          </div>

          <div className="app__register-input_header">Address</div>
          
          <div className="app__register-input">
                <textarea type="text" rows='5' className='app_input' name='address' placeholder='write here' onChange={HandelChange} />
          </div>
          <div className="app__register-input_header">Allergies</div>
          
          <div className="app__register-input">
                <textarea type="text" rows='5' className='app_input' name='allergies' placeholder='write here' onChange={HandelChange} />
          </div>

          <div className="app__register-input_header">sikness</div>
          <div className="app__register-input">
                <textarea type="text" rows='5' className='app_input' name='sickness' placeholder='write here' onChange={HandelChange} />
          </div>

          <div className="app__checkbox">
            <input type="checkbox" name="accepte condition" id="chckebox" required/> <label htmlFor="">accept our condition</label> 
          </div>
          <PrimaryButton content='Create Account'/>

        </motion.form>

        <motion.div  initial={{  opacity: 0 }} whileInView={{  opacity: 1}}  transition={{ duration: 0.8 }} className="app__register-img">
        <img src={register2} alt="" />
        <h1>join our  <span>society</span> and save your health</h1>
      </motion.div>
    </div>
  )
}

export default CreateProfile