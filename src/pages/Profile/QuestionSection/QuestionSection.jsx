import axios from 'axios'
import React, {useEffect, useState} from 'react'

function QuestionSection({id, token}) {
    const [questions, setquestions] = useState({data: []})
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/questions/patient/${id}`,{ headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' }})
      .then( (res) => {
        
       setquestions({...res.data})
       console.log(questions.data.length == 0);
    })
    }, [])
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
                return ( <h3>thing to show</h3> )
            }) 
        }
      </div>
    </div>
  )
}

export default QuestionSection