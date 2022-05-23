import React, { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {CardDocs} from '../../components';

import axios from 'axios';

import './search.scss'


export default function Search() {

  const [data , setData] = useState([]);
  const [query , setQuery] = useState("");


  useEffect(() => {
    const fetchDocs = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/doctors");
      setData(res.data)
}
    fetchDocs();
} , [])

  
console.log(data)
  
  return (
    <div className='docs'>
      <div className="docs-width">
        <h1>Find <span>Doctor</span></h1>
        <div className="docs-search-box">
        <input className='docs-search-txt' type="text" placeholder='search...' onChange={(event) => setQuery(event.target.value)} />
        <a  className='docs-search-btn' href="#">
        <FaSearch></FaSearch>
        </a>
        </div>
     
        <div className='docs-flex'>
        {data.filter(val => {
              if (query == "") 
                return val
              else if (val.fname.toLowerCase().includes(query.toLowerCase()) || val.lname.toLowerCase().includes(query.toLowerCase()) ) 
                return val
              }
            )
            .map(docs => 
              <CardDocs key = {docs.id} docs = {docs} />
            )}
        </div>
          
          
          
           </div>
         </div>
      
  )
}
