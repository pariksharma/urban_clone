import React from 'react';
import Header from '../Header/Header';
import './BookYourAppointment.style.css';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function BookYourAppoinment(props) {
  return (<div>
    <div style={{position: 'absolute', top: 0}}>
        <Header />
    </div>
    <div className='modalMainContainer'>
      <div className='modalContain'>
        <div className='ModalHeading'>
          <h3>Book Your Appointment</h3>
        </div>
        <hr className='horizontalBar' />
        <div className='inputEmail'>
          <input type='email' className='inp' placeholder='Enter your Email Address' />
        </div>
        <div className='Check'>
          <h2>Get order updates on WhatsApp</h2>
        </div>
        <hr className='horizontalBar' />
        <div className='Buttons'>
          <Link to='/'><button className='proceedButton'>Proceed</button></Link>
          <Link to='/'><button className='closeButton'>Close</button></Link>
        </div>
      </div>
    </div>
      <div style={{position: 'absolute', bottom: 0, width: '100%'}}>
        <Footer />
      </div>
    </div>
  )
}

export default BookYourAppoinment