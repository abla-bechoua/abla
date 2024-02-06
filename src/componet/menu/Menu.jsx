import React from 'react'
import './menu.css'
import latte from '../../images/Cold-coffee-recipe-500x500.jpg'
import espresso from '../../images/Cold-Coffee-3-Ways-1.jpg'
import ice from '../../images/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg'
import kk from '../../images/Chocolate-Cold-Coffee-2-3.jpg'
import cc from '../../images/d5afc422239f2e4237635f1088eb8c49.jpg'
import bb from '../../images/WaffleSundae.jpg'
import dd from '../../images/ColdCoffeePic-1.jpg'
import ss from '../../images/Waffles-and-Ice-cream.jpg'
import rr from '../../images/french-vanilla-cappuccino-photo-1200.jpg'
const Menu = () => {
  return (
    <section id='menu'>
    <div className='main-menu'>
     <h2>Special menu <span className='under'>for you</span></h2>
     <div className='cards'>
     <div className='card'>
             <div>
                <img src={espresso} alt='imag' width="300px" height="250px"></img>  
             </div>
             <div>
                <h3>Cold Coffee</h3>
                <h4 className='K'>49k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div>  

           <div className='card'>
             <div>
                <img src={latte} alt='imag' width="300px" height="250px"></img>
             </div>
             <div>
                <h3>Clod Coffee</h3>
                <h4 className='K'>26k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div>  

           <div className='card'>
             <div>
                <img src={ice} alt='imag' width="300px" height="250px"></img>
             </div>
             <div>
                <h3>Iced coffee</h3>
                <h4 className='K'>30k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div>  

           <div className='card'>
             <div>
                <img src={kk} alt='imag' width="300px" height="250px"></img>
             </div>
             <div>
                <h3>Chocolate Cold Coffee</h3>
                <h4 className='K'>19k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div>  

           <div className='card'>
             <div>
                <img src={cc} alt='imag' width="300px" height="250px"></img>
             </div>
             <div>
                <h3>Clod Coffee Milkshake</h3>
                <h4 className='K'>21k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div>  

           <div className='card'>
             <div>
                <img src={bb} alt='imag' width="300px" height="250px"></img>
             </div>
             <div>
                <h3>WaffleSundae</h3>
                <h4 className='K'>14k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div>  
           <div className='card'>
             <div>
                <img src={ss} alt='imag' width="300px" height="250px"></img>
             </div>
             <div>
                <h3>Waffles and Ice-cream</h3>
                <h4 className='K'>28k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div> 

           <div className='card'>
             <div>
                <img src={rr} alt='imag' width="300px" height="250px"></img>
             </div>
             <div>
                <h3>french vanilla cappuccino</h3>
                <h4 className='K'>40k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div> 

           <div className='card'>
             <div>
                <img src={dd} alt='imag' width="300px" height="250px"></img>
             </div>
             <div>
                <h3>Clod Coffee</h3>
                <h4 className='K'>31k</h4>
             </div>
             <div>
                <div className='HOT'>
                  <a href='#dd' className='hot-active'>Hot</a>
                  <a href='#vv'>Clod</a> 
                </div>
             </div>
           </div> 
     </div>
    </div>
    </section>
  )
}

export default Menu
