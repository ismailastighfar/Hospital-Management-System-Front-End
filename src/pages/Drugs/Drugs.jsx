import React, { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';


import axios from 'axios';

import './drugs.scss'


export default function Drugs() {

  const [data , setData] = useState([]);
  const [query , setQuery] = useState("");


  useEffect(() => {
    const fetchDrugs = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/medicines");
      setData(res.data)
}
    fetchDrugs();
} , [])

  
console.log(data)
  
  return (
    <div className='docs'>
      <div className="docs-width">
        <h1>Discover <span>Medicines</span></h1>
        <div className="docs-search-box">
        <input className='docs-search-txt' type="text" placeholder='search...' onChange={(event) => setQuery(event.target.value)} />
        <a  className='docs-search-btn' href="#">
        <FaSearch></FaSearch>
        </a>
        </div>
     
          
           {data.filter(val => {
              if (query == "") 
                return val
              else if (val.name.toLowerCase().includes(query.toLowerCase()) ) 
                return val
              }
            )
            .map(drugs => 
                <>
             <h2>name : {drugs.name}</h2>
             <h2>categorie : {drugs.categoryname}</h2>
             <h2>quantity : {drugs.quantity}</h2>
             <h2>price : {drugs.price}</h2>

             </>

            )}
          
          
           </div>
         </div>
      
  )
}
