import axios from 'axios'
import React, {useEffect, useState} from 'react'

function QuestionSection({id, token}) {
    const [questions, setquestions] = useState({})
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/questions/patient/${id}`,{ headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' }})
      .then( (res) => {
       setquestions({...res.data})
    })
    }, [])
  return (
    <div>
        {
            questions.data && questions.data.map((question)=>{
                return ( <h1></h1> )
            })
        }
    </div>
  )
}

export default QuestionSection