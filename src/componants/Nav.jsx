import React from 'react'
import img from './logo.png'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  
  
  return (
    <div>
<nav className='navbar qwe   navbar-expand-lg navbar-light'>
<a className="navbar-brand ml-4 fs-3" href="#"><img className='logoimg' src={img} alt="" /></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        {/* <i class="fas fa-bars" id="ham-menu"></i> */}
        <div className="collapse navbar-collapse mr-5 p-0" id="navbarTogglerDemo01">
    <a className="navbar-brand ml-4 fs-3" href="#"></a>
    <ul className="navbar-nav ml-auto mr-2  font-weight-bold">
      <li className="nav-item ">
        <Link className="nav-link fs-5" to="/">Home <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link fs-5" to="/About">About us <span className="sr-only"></span></Link>

      </li>
      <li className="nav-item">
      <Link className="nav-link fs-5" to="/contact">Contact <span className="sr-only"></span></Link>

      </li>
    </ul>
     </div>
      </nav>

    </div>



  )
}

export default Nav
