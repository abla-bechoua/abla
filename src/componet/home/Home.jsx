import React from 'react'
import "./home.css"
import shop from "../../images/shop.jpg"
import ff from "../../images/C1.jpg"
 
 
export const Home = () => {
  return (
      <section id='hero'>
        <div className='container-home'>
          <div className='hero-left'>
           <h2>Enjoy your <span>coffee</span><br/> before your  activity</h2>
           <p>Boost your productivity and build your<br/>  mood with a glass of coffee in the morning</p>
           <div className='order'>
            <a href='# '>Order now <img  src={shop} className='im' width="30px" hight="30px" alt='icon'/></a>
            <a href='# '>More menu </a>
           </div>
          </div>
          <div className='hero-right'>
          <div className='hero-image'>
             <img src={ff} alt='im'/>
          </div>
           <h3>cappuccino</h3>
           <h3>4.8</h3>
           <h3>18K</h3>
          </div>
        </div>
      </section>
  )
}
