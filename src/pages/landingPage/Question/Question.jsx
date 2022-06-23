import React, {useState} from 'react'
import './Question.scss'
import { question } from '../../../assets'
import { AiOutlineArrowRight  } from 'react-icons/ai'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Question() {
  const nav = useNavigate()
  const data =  JSON.parse(localStorage.getItem('currentUser'))
  const token = Boolean(data)  ? data.token : ''
  const [quest, setquest] = useState('')
  const handelChange = (e) => {
    const value = e.target.value
    setquest(value)
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    axios.defaults.withCredentials = true;
    if( token ){
      axios.get('http://localhost:8000/sanctum/csrf-cookie').then( () => {
      axios.post('http://localhost:8000/api/questions', { 'content' : quest } , { 
        headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json; multipart/form-data',
        } 
      }).then( (res) => {
        console.log(res)
        nav('/questions')
        window.location.reload();
      })
    })
    }
    else{
    return false
    }
    
  }
  return ( 
    <div className='app__question'>
      <img src={question} alt="" />
      <h1 className='app__question-head'>Participate with athor patient and ask any question in your head</h1>
      <p>
            Lorem Ipsum is simply dummy text of the printing anding industry, Lorem Ipsum is simply dummy
            ypesetting industry, Lorem Ipsum is simply.
            Lorem Ipsum is.
      </p>
      <form className="app__question-input" onSubmit={handelSubmit}>
        <input type="text" onChange={handelChange} placeholder='Post a question' className='app_input' name="question" style={{ width: '100%', margin: '2rem 0', background:'#fff' }}  />
        <button type='submit' ><AiOutlineArrowRight /></button>
      </form>
    </div>
  )
}

export default Question