import React from 'react';
import './Background.style.css';
import Booth from '../../assets/images/Contact-us-2.jpg';

const Background = () => {
  return (
    <div className='background'>
      <img src={Booth} />
    </div>
  )
}

export default Background;