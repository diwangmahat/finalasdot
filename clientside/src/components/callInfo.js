import React from 'react';
import { FaPhone } from 'react-icons/fa';
import './callInfoStyles.css'; 

function CallInfo() {
  return (
    <div className='call-container'>
      <div className='text'>
        <h1>We will be your dedicated partner for enhancing your online footprint.</h1>
      </div>
      <div className='contact'>
        <div className='call'>
          <a href="tel:+61410592287"><FaPhone /></a>
        </div>
        <div className='num'>
          <a href="tel:+61410592287">+61410592287</a>
          <h3>Call us now</h3>
        </div>
      </div>
    </div>
  );
}

export default CallInfo;
