import React from 'react';
import banner from '../../Assests/banner.png'

const InspirationBanner = () => {
  return (
    <div style={{backgroundImage:`url(${banner})`}} className="inspiration-main">
      <div className="container">
        <h2 className='inspiration-title animate__animated  animate__bounceInDown'>Saroj G. : " Be The Change <span><i class="fa-solid fa-cloud-sun-rain"></i></span> "</h2>
      </div>
    </div>
  )
}

export default InspirationBanner