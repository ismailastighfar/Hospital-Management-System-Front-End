import React, { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {CardDocs} from '../../components';

import axios from 'axios';

import './search.scss'


export default function Search() {
  const [specialities, setspecialities] = useState([])
  const [data , setData] = useState([]);
  const [query , setQuery] = useState({
    name: '',
    specialty: ''
  });
  const [isload, setisload] = useState(false)
  const handelChange = (e) => {
    let val = e.target.value
    setQuery({
      ...query,
      [e.target.name]: val
    })
    console.log(query)
  }
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/specialties").then((res) => { setspecialities(res.data) })

  }, [])
  
  useEffect(() => {
    setisload(true)
    let req = JSON.stringify(query)
    axios.get(`http://127.0.0.1:8000/api/doctor/search?name=${query.name}&specialty=${query.specialty}`, req).then((res) => { 
      setData(res.data)
      setisload(false)

    } 
      );
  } , [query])

  
  
  return (
    <div className='app__doctors'>
        <h1>Find <span>Doctor</span></h1>

        <div className="app__doctors-searchBar">
          <select name="specialty" className='app_input' id="" onChange={handelChange}>
            <option value="">All</option>
            {
              specialities.map(
                (spec) => {
                  return (
                    <option value={spec.id} key={spec.id} >{spec.name}</option>
                  )
                }
              )
            }
          </select>
          <input className='app_input' type="text" placeholder='search...' onChange={handelChange} />
          <FaSearch className='search-icon'></FaSearch>
        </div>
     
        <div className='app__doctors-items'>
        {
          isload && (
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>  
          )
        }
        { !isload &&
          data.map(docs => 
              <CardDocs key = {docs.id} docs = {docs} />
          )}
        </div>
          
          
          
    
         </div>
      
  )
}
