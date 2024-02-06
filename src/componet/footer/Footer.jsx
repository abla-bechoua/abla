import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    
   <footer className='footer'>
  <div className='footer__container container'>
  <h1 className='footer__title'>Coffee</h1>
  <ul className='footer__list'>
    <li>
        <a href='#about' className='footer__link'>About</a>
    </li>
    <li>
        <a href='#menu' className='footer__link'>Our Products</a>
    </li>
    <li>
        <a href='#services' className='footer__link'>Delivery</a>
    </li>
 
  </ul>
    <span className='footer__copy'>&#169; Abla. All right reserved</span>
  </div>
    </footer>
  )
}

export default Footer
