import React from 'react'
import { Header,Question, Feedback, Services, Specialities , Steps , News } from './';

function LandingPage() {
  return (
      <div style={{ marginTop: '8rem'}}>
        <Header />
        <Steps />
        <Services />
        <Question />
        <Specialities />
        <News />
        <Feedback />
      </div>
  )
}

export default LandingPage