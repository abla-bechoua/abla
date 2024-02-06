import React from 'react'
import './they.css'
import hh from '../../images/XD6Wn_5_c.jpg'
import bb from '../../images/portrait-photo-colombian-teenage-female-curly-hair_662214-132093.jpg'
import aa from '../../images/6643-3.jpg'
const They = () => {
  return (
    <section id='says'>
     <div className='main-says'>
      <div className='say-left'>
       <h2>What they says <span className='under'>about us</span></h2>
       <p>We always provide the best services <br/> and always maintain the quality of <br/> coffee</p>
      </div>
      <div className='says-right'>
       <div>
        <img src={bb} alt='imag' width='250px' height='340px'></img>
        <div>
            <h3>Naura</h3>
            <p>I really love the cappuccino <br/> the coffee was very smooth</p>
        </div>
       </div>

       <div>
        <img src={aa} alt='imag' width='250px' height='340px'></img>
        <div>
            <h3>John</h3>
            <p>this coffee shop is very <br/> convenient</p>
        </div>
       </div>

       <div>
        <img src={hh} alt='imag' width='250px' height='340px'></img>
        <div>
            <h3>Azura</h3>
            <p>the coffee menu here is <br/> very much</p>
        </div>
       </div>


      </div>

     </div>

    </section>
  )
}

export default They
