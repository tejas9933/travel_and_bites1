import React from 'react';
import './section1.css'
import img1 from './main1.png'

const Section1 = () => {
  return (
    <>

<div className="section-1  sectionone">
<div class="d-flex flex-row justify-content-evenly">
  <div class="p-1 text-font ">
    <h4>Love Street <span>Food?</span></h4>
    <h4>Love To <span>Travel?</span></h4>
    <p> <span>Food</span> Around the World: Explore The World Through <span>Flavours.</span></p>
  </div>
  <div class="img imgflex">
    <img  src={img1} alt="" />
   
  </div>
</div>
</div>

    </>
  )
}

export default Section1
