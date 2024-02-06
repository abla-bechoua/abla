import React from 'react'
import "./services.css"
import cup from "../../images/cup1.jpg"
import delivery from "../../images/DE&.jpg"
import choose from "../../images/CH.jpg"
import CC from "../../images/VV2 (2).jpg"
import KK from "../../images/vv1.jpg"
 
export const Services = () => {
  return (
     <section id='services'>
       <div className="bg_hero"><img src={CC} alt='IMAG' width="120px" height="120px"></img></div>
       <div className="bg" ><img src={KK} alt='IMAG' width="230px" height="366px"></img></div>
       <div className="bg_he"><img src={KK} alt='IMAG' width="230px" height="366px"></img></div>
    
        <h2>How to use delivery<span className='under'> services</span></h2>
        <div className='service'>
            <div>
                <div>
                    <img src={choose} alt='imag' width="300px" height="300px"></img>
                </div>
                <h3>choose your coffee</h3>
                <h4>there are 20+ coffee for you</h4>
            </div>
            <div>
            <img src={delivery} alt='imag' width="280px" height="300px"></img>
            <h3>we delivery it to you</h3>
            <h4>choose delivery service</h4>
            </div>
            <div>
            <img src={cup} alt='imag' width="300px" height="300px"></img>
            <h3>Enjoy your coffee</h3>
            <h4>choose delivery service</h4>
            </div>

        </div>
     </section>
  )
}
