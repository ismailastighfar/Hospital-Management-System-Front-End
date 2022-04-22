import React from 'react'
import {BsEnvelope} from 'react-icons/bs';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {FaFacebookF , FaInstagram , FaTwitter , FaWhatsapp} from 'react-icons/fa';




import './footer.css'

export default function Footer() {
  return ( 
    <footer>
        <div className='row'>
            <div className="col">
             <h1 className='logo'>Midi<span>Aid</span></h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente totam assumenda quis adipisci architecto veniam.</p>
            </div>
            <div className="col">
                <h3>about us <div className="underline"><span></span></div></h3>
                <p>mhanech road</p>
                <p>hamama, Tetouan</p>
                <p>tetouan, PIN 560066, Marocco</p>
                <p className="email-id">MidiAid@gmail.com</p>
                <h4>+212 601497632</h4>
            </div>
            <div className="col">
                <h3>Company <div className="underline"><span></span></div></h3>
                <ul>
                    <li><a href="">Help</a></li>
                    <li><a href="">Privacy policy</a></li>
                    <li><a href="">Supports</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Newsletter <div className="underline"><span></span></div></h3>
                <form>
                <BsEnvelope size={18} className='env'></BsEnvelope>
                <input type="email" placeholder='Enter your email'  required/>
                <button type='submit'><AiOutlineArrowRight size={16 } className='arrow'></AiOutlineArrowRight></button>
                </form>
               <div className="social">
                <FaFacebookF size={20} className='fab'></FaFacebookF>
                <FaWhatsapp size={20} className='fab'></FaWhatsapp>
                <FaInstagram size={20} className='fab'></FaInstagram>
                <FaTwitter size={20} className='fab'></FaTwitter>
               </div>
            </div>
        </div>
        <hr />
        <p className="copyright">MidiAid 2022 - All Rights Reserved</p>
    </footer>
  )
}
