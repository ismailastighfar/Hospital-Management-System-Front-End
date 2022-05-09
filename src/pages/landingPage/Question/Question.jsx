import React from 'react'
import './Question.scss'
import { question } from '../../../assets'
function Question() {
  return (
    <div className='app__question'>
      <img src={question} alt="" />
      <h1 className='app__question-head'>Participate with athor patient and ask any question in your head</h1>
    </div>
  )
}

export default Question