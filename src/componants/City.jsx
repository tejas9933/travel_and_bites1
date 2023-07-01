import React from 'react';
import Nav from './Nav';
import "./city.css"
import { NavLink } from 'react-router-dom';
import Section3 from './Section3';
import Footer from './Footer';


function City() {
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

<img className="card-img-top"style={{objectFit:"fill"}} src="https://images.unsplash.com/photo-1631774933370-d596a344e851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Card image cap"/>
     </figure>
<div className="card-body">
<h2 className="card-title">Aurangabad</h2>
{/* <div className="cardt"><h6>Here,You Can Find The Best Tourist Places Across All Over India.</h6></div> */}
<button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/Aurangabadcard" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>

</div>
</div>

{/* pune  */}
<div className="card article">
     <figure>

<img className="card-img-top"style={{objectFit:"fill"}} src="https://c0.wallpaperflare.com/preview/202/970/414/india-pune-shaniwar-wada.jpg" alt="Card image cap"/>
     </figure>
<div className="card-body">
<h2 className="card-title">Pune</h2>
{/* <div className="cardt"><h6>Here,You Can Find The Best Street Food And Restaurant's Across All Over India</h6></div> */}
{/* <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Explore</a>
 */}
 <button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/Punecard" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>

</div>
</div>
</div>




{/* Nashik  */}



<div className="card-deck mt-4">
<div className="card article">
     <figure>

<img className="card-img-top"style={{objectFit:"fill"}} src="https://images.unsplash.com/photo-1665888122435-ecbdb6b56726?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" alt="Card image cap"/>
     </figure>
<div className="card-body">
<h2 className="card-title">Nashik</h2>
{/* <div className="cardt"><h6>Here,You Can Find The Best Tourist Places Across All Over India.</h6></div> */}
{/* <a href="City.jsx" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Explore</a> */}
<button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/Nashikcard" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
     </button>

</div>
</div>

{/* kolhapur  */}
<div className="card article">
     <figure>

<img className="card-img-top"style={{objectFit:"fill"}} src="https://images.unsplash.com/photo-1674489883234-4c9a9e330411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" alt="Card image cap"/>
     </figure>
<div className="card-body">
<h2 className="card-title">Kolhapur</h2>
{/* <div className="cardt"><h6>Here,You Can Find The Best Street Food And Restaurant's Across All Over India</h6></div> */}
{/* <a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Explore</a> */}
<button className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
     <NavLink to="/Kolhapurcard" style={{ color: '#FFF',  textDecoration: 'none' }}>Explore</NavLink>
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
    
    export default City