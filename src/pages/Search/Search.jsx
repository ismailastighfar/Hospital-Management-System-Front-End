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
  const [isload, setisload] = useState(false)
  const handelChange = (e) => {
    setvalue (e.target.value)
  }
  
  useEffect(() => {
    setisload(true)
    axios.get("http://127.0.0.1:8000/api/specialties").then((res) => { setspecialities(res.data) })
    const fetchDocs = async () => {
      const res = await axios.get(`http://127.0.0.1:8000/api/doctor/search?name=${query}&specialty=${value}`);
      setData(res.data)
      setisload(false)
    }
    fetchDocs();
  } , [query, value])
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
                    <option value={spec.id} key={spec.id} >{spec.name}</option>
                  )
                }
              )
            }
          </select>
          <input className='app_input' type="text" placeholder='search...' onChange={(e) => {
              setQuery(e.target.value)
            }}  />
          <FaSearch className='search-icon'></FaSearch>
        </div>
     
        <div className='app__doctors-items'>
          {
            isload && (
              <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            )
          }
        {
          !isload && (
          data.map(docs => 
              <CardDocs key={docs.id} docs={docs} />
          )
         )}
        </div>
         </div>
      
  )
}
