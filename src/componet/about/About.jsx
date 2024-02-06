import React from 'react'
import './about.css'
import about from '../../images/coffe1.jpg'
const About = () => {
  return (
    <section id='about'>
      <div className='main-about'>
        <div className='about-left'>
        <img src={about} alt='imag' width='340px' height='400px'></img>
        </div>
        <div className='about-right'>
         <h2>About <span className='under'>Us</span></h2>
         <h3>We provide qualit coffee,<br/>and read to delivery. </h3>
         <h4>We are a company that makes and distributes<br/>delicious drinks. our main product is Lorem ipsum dolor sit amet consecteyeur adipisicing elit. Ea, recusandae.</h4>
         <a href='#aa'>Get your coffee</a>
        </div>
      </div>
    </section>
  )
}

export default About
