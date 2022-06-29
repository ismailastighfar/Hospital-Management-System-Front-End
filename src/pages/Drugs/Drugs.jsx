import React, { useEffect, useState } from 'react';
import {FaSearch} from 'react-icons/fa';
import {insulin , penicillin } from '../../assets';


import axios from 'axios';

import './drugs.scss'


export default function Drugs() {

  const [data , setData] = useState([]);
  const [query , setQuery] = useState("");
  const [value , setvalue] = useState("");
  const [categories , setCategories] = useState([]);

  const handelChange = (e) => {
  setvalue (e.target.value)
}

  useEffect(() => {
    const fetchDrugs = async () => {
      const res = await axios.get("http://127.0.0.1:8000/api/medicines");
      setData(res.data)
}
    fetchDrugs();
} , [])

useEffect(() => {
  axios.get("http://127.0.0.1:8000/api/categories").then((res) => { setCategories(res.data) })
  

}, [])


console.log(value)
  return (
    <div className="drugs">
      <h1>Find <span>Medicine</span></h1>

          <div className="app__doctors-searchBar">
            <select name="specialty" className='app_input' id="" onChange={handelChange} defaultValue={value} >
              <option value="">Categories</option>
              {
                categories.map(
                  (category) => {
                    return (
                      <option value={category.name} key={category.id} >{category.name}</option>
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
        <div className='drugs-flex'>
     {data.filter((val) => {
        if(value == val.categoryname)
         return val 
         else if (value == "") {
           return val
         }
         
     }).filter((val) => {
      if (query == "") 
        return val
       else if (val.name.toLowerCase().includes(query.toLowerCase())) 
         return val
     })
    .map(drug => 
      {
        return(
        <div className="drugs-container">
          <div className="drugs-img">
            <img src={drug.name == 'Insulin' ?  insulin : penicillin } alt="img" style={{width:"250px"}}/>
          </div>
          <div className="drugs-details">
            <div className="drugs-content">
            <h2>{drug.name}</h2>
            <span>{drug.categoryname}</span>
               <p>{drug.description} </p>
                
                <h3>{drug.price} dh</h3>
                <div className="primary-button">
                  <button>More Info</button>
                </div>
                   
            </div>
          </div>
        </div>
        )
      }
      )}
      
        </div>  
         
    </div>
  
      
  )
}
