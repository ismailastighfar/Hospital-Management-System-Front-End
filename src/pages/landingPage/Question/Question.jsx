import React from 'react'
import './Question.scss'
import { question } from '../../../assets'
import { AiOutlineArrowRight  } from 'react-icons/ai'
function Question() {
  return (
    <div className='app__question'>
      <img src={question} alt="" />
      <h1 className='app__question-head'>Participate with athor patient and ask any question in your head</h1>
      <p>
            Lorem Ipsum is simply dummy text of the printing anding industry, Lorem Ipsum is simply dummy
            ypesetting industry, Lorem Ipsum is simply.
            Lorem Ipsum is.
      </p>
      <div className="app__question-input">
        <AiOutlineArrowRight />
        <input type="text" placeholder='Post a question' className='app_input' style={{ width: '100%', margin: '2rem 0', background:'#fff' }}/>
      </div>
    </div>
  )
}

export default Question