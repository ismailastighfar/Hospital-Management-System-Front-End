import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router'

function QuestionSection({id, token}) {
    const nav = useNavigate()
    const [questions, setquestions] = useState({data: []})
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/questions/patient/${id}`,{ headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' }})
      .then( (res) => {
       setquestions({...res.data})
       console.log(questions.data);
    })
    }, [])
    const handelanswer = (id) => {
      nav(`/answers/${id}`)
    } 
  return (
    <div className='app__profile-services_questions'>
      <h3>Yours Question</h3>
      <div className="app__profile-services_questions-content">
        {
             questions.data.length == 0 && 
              ( <>
              <h2>nothings to show</h2>
              <div className="secondary-button">

                <button >Ask something</button>
              </div>
              </>
               )
           
        }
        {
              questions.data.length != 0 && questions.data.map((question)=>{

                return ( 
                  <div key={question.id} style={{ margin: '1rem 0'}}>
                    <h4>{question.content}</h4>
                    <p>{ question.created_at }</p>
                    
                    <button type='button' onClick={ () => handelanswer( question.id ) } style={{  cursor: 'pointer', border:'none', color:'blue' , background: '#40404020', padding: '.4rem .8rem .2rem .8rem', margin:'1rem 0 0 0 ' }} > See Reply ( { question.answers.length } )</button>
                    
                  </div>
                )
            }) 
        }
      </div>
    </div>
  )
}

export default QuestionSection