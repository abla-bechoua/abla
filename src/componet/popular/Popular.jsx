import React from 'react'
import "./popular.css"
import latte from "../../images/latte.jpg"
import star from "../../images/star.jpg"
import espresso from "../../images/espresso2.jpg"
import ice from "../../images/ice.jpg"
 
export const Popular = () => {
  return (
     <section id='popular'>
     <div className='bg-popular'>
     <h2>Popular<span className='SS'> Now</span></h2>
     <div className='bg-pop'> 
       <div className='cards'>
           <div className='card'>
             <div>
                <img src={latte} alt='imag' width="310px" height="250px"></img>
                <h3>4.8<img src={star} alt='icon-imag' width="15px" height="15px"></img></h3>
             </div>
             <div>
                <h3>Vanilla Latte</h3>
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
                <img src={ice} alt='imag' width="310px" height="250px"></img>
                <h3 className='M'>3.8<img src={star}alt='icon-imag' width="20px" height="20px"></img></h3>
             </div>
             <div>
                <h3>Iced coffee</h3>
                <h4 className='K'>16k</h4>
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
                <img src={espresso} alt='imag' width="310px" height="250px"></img>
                <h3 className='L'>6.2<img src={star} alt='icon-imag' width="20px" height="20px"></img></h3>
             </div>
             <div>
                <h3>Espresso</h3>
                <h4 className='K'>29k</h4>
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
  </div>
     

     </section>
  )
}
