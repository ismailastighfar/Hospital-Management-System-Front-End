import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import './Answer.scss'
function Answers() {
const params = useParams()
const [isload, setisload] = useState(false)
const [answers, setanswers] = useState([])
const [question, setquestion] = useState({
    auther: {}
})
useEffect(() => {
    setisload(true)
    axios.get(`http://127.0.0.1:8000/api/questions/${params.id}`,{ headers: {
      'Content-Type': 'application/json'
    }}).then( (res) => {
       setanswers(res.data.answers)
       setquestion(res.data.question)
       console.log(answers )
       console.log(res.data)
       setisload(false)
    })
    
  }, [])
  return (
    <div style={{ margin: '6rem  0' }}>
        <div>
            <div key={ question.id } className="app__question-content_item">
                <div className="app__questions-content_item-det" >
                  <h2>{ question.content } ?</h2>
                </div>
              </div>
        </div>
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
           answers.map((answer) => {
            return (
              <div key={answer.id} className="app__questions-content_item">
                <div className="app__questions-content_item-img">
                <img src={ answer.auther.picture} style={{ objectFit: 'cover ', with: '80px' , height: '50px',  }}/>
                </div>
                <div className="app__questions-content_item-det">
                  <h4>{ answer.auther.fname + answer.auther.lname }</h4>
                  <h2>{ answer.content } ?</h2>
                </div>
              </div> )
          })
          }
        </div>
      </div>
      </div>
  )
}

export default Answers