import React from 'react';
import "./footer.css";

function Footer() {
    return (
     <>


<div class="footer mt-4">
  <div class="inner-footer">

    <div class="footer-items">
      <h1>Travel & Bites</h1>
      <p>Here you Can find Tourist Places & Food from different cities.</p>
    </div>


    <div class="footer-items">
      <h3>Quick Links</h3>
      <div class="border1"></div>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="#"><li>About</li></a>
        </ul>
    </div>

    <div class="footer-items">
      <h3>Contact us</h3>
      <div class="border1"></div>
        <ul>
          <li><i class="fa fa-map-marker" aria-hidden="true"></i>Pune</li>
          <li><i class="fa fa-phone" aria-hidden="true"></i>9822457396</li>
          <li><i class="fa fa-envelope" aria-hidden="true"></i>tejasjadhao25@gmail.com</li>
        </ul> 
      

        <div class="social-media">
          <a href="https://github.com/tejas9933"><i class="fab fa-github github-bg"></i></a>
          <a href="https://www.linkedin.com/in/tejas-jadhao-959608219"><i class="fab fa-linkedin linkedin-bg"></i></a>
        </div> 
    </div>
  </div>
  
  <div class="footer-bottom">
    Copyright &copy; Travel & Bites.
  </div>
</div>
       
     </>

)
}

export default Footer