import React from "react";
import './section2.css'
import { Link, NavLink } from "react-router-dom";

const Section2 = () => {
    return (
      <>
      <div className="container">

      <div className="card-deck mt-4">
 


  <div className="card">
    <img className="card-img-top"style={{objectFit:"fill"}} src="https://plus.unsplash.com/premium_photo-1661904509551-6570836702e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80 " alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">City</h5>
      <div className="cardt"><h6>Here,You Can Find The Best Tourist Places Across  India.</h6></div>
     <button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/city" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>


    
    </div>
  </div>
  <div className="card">
    <img className="card-img-top"style={{objectFit:"fill"}} src="https://c0.wallpaperflare.com/preview/446/942/503/beans-delicious-dinner-food.jpg" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Food</h5>
      <div className="cardt"><h6>Here,You Can Find The Best Street Food And Restaurant's Across India</h6></div>
      <button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/food" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>

      
    </div>
  </div>
</div>
      




      </div>
      </>


    )
}
export default Section2