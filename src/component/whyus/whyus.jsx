import React from 'react'
import './whyUs.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const WhyUs = () => {
  return (
    <div className="why-us" id='why'>
    <div className="left">
    <img className='one' src={image1} alt="" />
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    <img src={image4} alt="" />

    </div>
    <div className="right">
  <span>Some Reasons </span>
<div>
  <span className='stroke-text'>WHY </span><span>Choose Us ?</span>
</div>
<div className="lines">
<div>
  <img src={tick} alt="" />
  <span>OVER 140+ EXPERT COACHS</span>
</div>
<div>
  <img src={tick} alt="" />
  <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
</div>
<div>
  <img src={tick} alt="" />
  <span>1 FREE PROGRAM FOR NEW MEMBER</span>
</div>
<div>
  <img src={tick} alt="" />
  <span>RELIABLE PARTNERS</span>
</div>
</div>
<div className="part">OUR PARTNERS</div>
<div className="imgs">
  <img src={nb} alt="" />
  <img src={adidas} alt="" />
  <img src={nike} alt="" />
</div>

    </div>
    </div>
  )
}

export default WhyUs