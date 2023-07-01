import React from 'react';
import Nav from './Nav';
import "./food.css"
import { NavLink } from 'react-router-dom';
import Footer from './Footer';


function Food() {
    return (
     <>
     <div className="navmargin"> 

      <Nav/> 
      </div>

{/* Aurangabad  */}
<div className="container city-card ">
     <div className="article">


<div className="card-deck mt-4">
<div className="card article ">
     <figure>

<img className="card-img-top"style={{objectFit:"fill"}} src="https://images.herzindagi.info/image/2022/Jul/lesser-known-facts-about-naan-khaliya.jpg" alt="Card image cap"/>
     </figure>
<div className="card-body">
<h2 className="card-title">Aurangabad</h2>
{/* <div className="cardt"><h6>Here,You Can Find The Best Tourist Places Across All Over India.</h6></div> */}
<button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/Abdfood" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>

</div>
</div>

{/* pune  */}
<div className="card article">
     <figure>

<img className="card-img-top"style={{objectFit:"fill"}} src="https://www.shutterstock.com/image-photo/bhakarwadi-spelled-bakarwadi-spring-roll-260nw-349802978.jpg" alt="Card image cap"/>
     </figure>
<div className="card-body">
<h2 className="card-title">Pune</h2>
{/* <div className="cardt"><h6>Here,You Can Find The Best Street Food And Restaurant's Across All Over India</h6></div> */}
{/* <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Explore</a>
 */}
 <button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/Punefood" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>

</div>
</div>
</div>




{/* Nashik  */}



<div className="card-deck mt-4">
<div className="card article">
     <figure>

<img className="card-img-top"style={{objectFit:"fill"}} src="https://bestinnashik.com/wp-content/uploads/2020/12/Misal-Pav.jpg" alt="Card image cap"/>
     </figure>
<div className="card-body">
<h2 className="card-title">Nashik</h2>
{/* <div className="cardt"><h6>Here,You Can Find The Best Tourist Places Across All Over India.</h6></div> */}
{/* <a href="City.jsx" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Explore</a> */}
<button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/Nashikfood" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>

</div>
</div>

{/* kolhapur  */}
<div className="card article">
     <figure>

<img className="card-img-top"style={{objectFit:"fill"}} src="https://im.hunt.in/cg/mah/Kolhapur/City-Guide/Kolhapuri_Thali.jpg" alt="Card image cap"/>
     </figure>
<div className="card-body">
<h2 className="card-title">Kolhapur</h2>
{/* <div className="cardt"><h6>Here,You Can Find The Best Street Food And Restaurant's Across All Over India</h6></div> */}
{/* <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Explore</a> */}
<button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/Kolhapurfood" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>

</div>
</div>
</div>
 </div>
</div>


<Footer/>
     
     </>

        )
    }
    
    export default Food