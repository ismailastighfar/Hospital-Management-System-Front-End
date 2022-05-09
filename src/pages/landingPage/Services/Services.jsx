import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../../components'
import { ImCheckboxChecked } from 'react-icons/im'
import { doctors } from '../../../assets'
import './Services.scss'
function Services() {

  const services = [
    '1000+ Ready Bed',
    '30+ ICU Solution',
    'the largest Hospital',
    '25/7 Patient Support'
  ]
  return (
    <div className='app__services'>
        <div className="app__services-img">
            <img src={ doctors } alt="" />
        </div>
        <div className="app__services-info">
            <h1>
              Every time and anywhere our Experts are ready to Help
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="services">
            {
              services.map(service => { 
                return ( 
                  <div className="service_item">
                    < ImCheckboxChecked/>
                    <h2>{ service }</h2>
                  </div>
                  )
            }
            )
            }
            </div>
            <div className="app__services-contact-buttons">
                <PrimaryButton content='Contact Us'/>
                <SecondaryButton content='Book Now' />

            </div>
        </div>
    </div>
  )
}

export default Services