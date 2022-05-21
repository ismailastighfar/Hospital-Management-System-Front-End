import React from 'react'
import { news } from '../../../assets'
import { PrimaryButton, SecondaryButton } from '../../../components'

import './news.scss'

export default function News() {
  return (
    <div className='app__news'>
      
          <div className="app__news-info">
              <h1>Medical <span>News </span> 
              Discover <span>The Latest News</span> </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, alias eligendi adipisci cum quae necessitatibus doloribus porro dolores earum debitis.</p>
              <div className="app__news-info_button">
                <PrimaryButton content="News Today "/>
                <SecondaryButton content="Trending news" />
              </div>
              
          </div>
          <div className="app__news-img ">
            <img src={news} alt="news" />
          </div>


    </div>
  )
}
