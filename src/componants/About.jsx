import React from 'react';
import "./about.css"
import Nav from './Nav';

function About() {
  return (
   
      <>
    <Nav/>
    
    <div className='container mt-5'>
      
      <div class="row">
  <div class="col-sm-6">
    <div class="card cardbg" >
      <div class="card-body">
        <h3 class="about">About Us</h3>
        <p class="card-text card-te">At Travel and Bites, we are here to help you to find the best tourist places,street food items, and restaurants more easily and simply.
To us, this has been a delicious problem to solve.Food is something everyone needs to survive. It is something that brings people together and it is something people love to enjoy. Food intersects with tourism in a lot of ways. Because of that, it also contributes to the economy significantly. When people travel they imagine a relaxing day or week on vacation. Most are not thinking about staying on a diet, but think of this time as a pass to indulge excessively on good food. Thus, food is a main part of one’s vacation or trip.</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body card-img-top">
      <img className="card-img-top" src="https://img.freepik.com/premium-vector/street-food-seller-flat-color-faceless-character-indian-traditional-cuisine-mobile-kiosk-fast-food-service-isolated-cartoon-illustration_151150-4286.jpg?w=996" alt="Card image cap"/>
      </div>
    </div>
  </div>
</div>

    </div>
    </>
  )
}

export default About
