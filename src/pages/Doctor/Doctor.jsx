import React, { useEffect, useState } from 'react';
import { Link , Outlet } from "react-router-dom";
import { RiHospitalLine, RiStethoscopeLine, RiFileCopy2Line, RiPhoneFill, RiMailLine } from "react-icons/ri"
import axios from 'axios';

import image from '../../assets/doctor.jpg';

import { useParams } from 'react-router'

import './doctor.scss'


export default function Doctor() {

    const params = useParams();
    const [data , setData] = useState({
        department: {},
        specialty: {},
        review: []
    });
    const [isloading, setisloading] = useState(false)

    useEffect(() => {
        fetch()
        return
    }, [])
        
    const fetch =  async () => {
        
            setisloading(true)
            axios.get(`http://127.0.0.1:8000/api/doctors/${params.id}`).then( (res) => {
            setData(res.data)
            setisloading(false)
            })
            
    }
    

    return (
    <div className='doctor-container'>
        
            {
                !isloading && ( 
               <div className='doc-grid-container'>
                <div className="doc-grid-content">
                    <h1>  {data.fname} {data.lname}</h1>
                    <div className='doc-grid-info'><p><RiHospitalLine /> Department :</p><span>{data.department.dept_name}</span></div>
                    <div className='doc-grid-info'><p><RiStethoscopeLine /> Specialty :</p><span>{data.specialty.name }</span> </div>
                    <div className='doc-grid-info'><p><RiPhoneFill /> Phone :</p> <span> (+212) {data.phone}</span></div>
                    <div className='doc-grid-info'><p><RiMailLine /> Email :</p> <span>{data.proEmail}</span></div>
                    <div className='doc-grid-desc'><div className='doc-grid-info'><p><RiFileCopy2Line /> Description : </p></div><span>{data.description}</span></div>
                    <div className="primary-button" style={{width: '200px', marginTop: "4rem"}}>
                        <Link to={`Appointement/create/${params.id}`}><button>Book Now</button></Link>
                    </div>
                </div>
                <div className="doc-grid-img">
                        <img src={image} alt="img" />
                </div>
                </div>
                )
            } 
            {
               isloading && (
                   <h1>loading..</h1>
               )
            }
       
       <div className="AppointementSection">
           <Outlet/>
       </div>
    </div>
  )
}
