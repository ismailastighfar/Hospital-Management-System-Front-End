import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { Question } from '../landingPage'
import './Questions.scss' 
function Questions() {
  const [isload, setisload] = useState(false)
  const user =  JSON.parse(localStorage.getItem('currentUser'))
  const token = user.token
  const [questions, setquestions] = useState([])
  useEffect(() => {
    setisload(true)
    axios.get(`http://127.0.0.1:8000/api/questions`,{ headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }}).then( (res) => {
       setquestions(res.data.data)
       console.log(questions)
       setisload(false)
    })
  }, [])
  
  return (
    <div>
      <Question />
      <div className="app__questions">
        <div className="app__questions-content">
          { isload && 
            (
              <div >
            <div className='loading'>
              <div></div><div></div><div></div>
            </div><div className='loading'>
              <div></div><div></div><div></div>
            </div><div className='loading'>
              <div></div><div></div><div></div>
            </div>
              </div>
            )
          }
          {
           questions.map((question) => {
            return (
              <div key={question.id} className="app__questions-content_item">
                <div className="app__questions-content_item-img">
                  <img src={ question.auther_avatar}/>
                </div>
                <div className="app__questions-content_item-det">
                  <h4>{ question.auther_username }</h4>
                  <p>{ question.created_at} </p>
                  <h2>{ question.content } ?</h2>
                  <p>{question.answers.length} replay  </p>
                  { question.answers.length != 0 && ( <a href="">see details</a> )}
                </div>
              </div> )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default Questions