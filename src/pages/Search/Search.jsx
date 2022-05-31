import React, { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {CardDocs} from '../../components';

import axios from 'axios';

import './search.scss'

                         
export default function Search() {
  const [specialities, setspecialities] = useState([])
  const [data , setData] = useState([]);
  const [query , setQuery] = useState("");
  const [value , setvalue] = useState("");

  const handelChange = (e) => {
    setvalue (e.target.value)
  }
 
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/specialties").then((res) => { setspecialities(res.data) })

  }, [])
  
  useEffect(() => {
    const fetchDocs = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/doctors");
      setData(res.data)
}
    fetchDocs();
} , [])
console.log(data)
  
  return (
    <div className='app__doctors'>
        <h1>Find <span>Doctor</span></h1>

        <div className="app__doctors-searchBar">
          <select name="specialty" className='app_input' id="" onChange={handelChange}>
            <option value="">specialities</option>
            {
              specialities.map(
                (spec) => {
                  return (
                    <option value={spec.name} key={spec.id} >{spec.name}</option>
                  )
                }
              )
            }
          </select>
          <input className='app_input' type="text" placeholder='search...'onChange={(e) => {
              setQuery(e.target.value)
            }}  />
          <FaSearch className='search-icon'></FaSearch>
        </div>
     
        <div className='app__doctors-items'>
        {data.filter((val) => {
        if(value == val.name)
         return val 
         else if (value == "") {
           return val
         }
         
       }).filter((val) => {
      if (query == "") 
        return val
       else if (val.fname.toLowerCase().includes(query.toLowerCase()) || val.lname.toLowerCase().includes(query.toLowerCase()) ) 
         return val
     })
      .map(docs => 
              <CardDocs key = {docs.id} docs = {docs} />
          )}
        </div>
         </div>
      
  )
}
