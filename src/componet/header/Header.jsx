import './header.css'
import { useRef } from 'react'
import React from 'react'
import "./header.css"
import shop from "../../images/shop.jpg"
import search from "../../images/search.jpg"
import logo from "../../images/logo.jpg"
export const Header = () => {
  const navRef = useRef();
  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive_nav");
  }
  return (
     <header>
     <img src={logo} alt='IMAG'></img>
          <nav ref={navRef}>
            <a href='#about '> About us</a>
            <a href='#menu'>Our Products</a>
            <a href='#services'> Delivery </a>
              <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <i class="fa-sharp fa-regular fa-circle-up"></i>
              </button>
          </nav>
          
          <div className="head_right">
             <div className="search">
               <img src={search} alt='ff'/> 
               <input type="search" placeholder="cap coffee"></input>     
             </div> 
          </div>
          <img src={shop} alt='dd' className='shop' />

          <button className='nav-btn' onClick={showNavbar}>
              <i class="fa-sharp fa-regular fa-circle-up"></i>
          </button>
          
         
          
     </header>  

 )
}
