import React from 'react'
import banner from '../../Assests/banner.png'
const TitleContent = (props) => {
  return (
    <div style={{backgroundImage:`url(${banner})`}} className="inspiration-main">
      <div className="container">
        <h2 className='inspiration-title animate__animated  animate__bounceInDown'>{props.heading}</h2>
      </div>
    </div>
  )
}

export default TitleContent