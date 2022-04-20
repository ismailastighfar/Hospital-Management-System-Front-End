import React from 'react'
import {Newsimg} from '../../../assets'

import './news.css'

export default function News() {
  return (
    <div className='news'>
      <div className="banner">
          <div className="left-column">
              <h1>Medical <span>News</span> </h1>
              <h3>Discover <span>The Latest News</span> </h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, alias eligendi adipisci cum quae necessitatibus doloribus porro dolores earum debitis.</p>
               <div className="btn">
                  <button type='button' className='primary-btn'>News Today</button>
                  <button type='button' className='secondary-btn'>Tranding News</button>
               </div>
          </div>
          <div className="right-column">
           <img src={Newsimg} alt="news" />
          </div>

      </div>
    </div>
  )
}
