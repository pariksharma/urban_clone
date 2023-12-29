import React from 'react';
import './Login.style.css'

function OpenModal(props) {
  return (
    <div className='modalMainContainer'>
      <div className='modalContain'>
        <div className='ModalHeading'>
          <h3>Login/SignUp</h3>
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
          <button onClick={() => props.setShowModal(!props.showModal)} className='proceedButton'>Proceed</button>
          <button onClick={() => props.setShowModal(!props.showModal)} className='closeButton'>Close</button>
        </div>
      </div>
    </div>
  )
}

export default OpenModal