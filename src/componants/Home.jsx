import React from 'react'
import Nav from './Nav'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import About from './About';
import './home.css'

function Home() {
  return (
    <div  className='homepage'>
      <Nav/>
     <Section1/>
      <Section2/>
      <About/>
      <Section3/>
    </div>
  )
}

export default Home
