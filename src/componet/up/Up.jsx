import React from 'react'
import './up.css'
const Up = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollUp");
        if (this.scrollY >= 960) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show_scroll");
    });
  return (
    <a href=' #' className='scrollUp'>
   <i class="fa-sharp fa-regular fa-circle-up scrollUp__icon"></i>
</a>
  )
}

export default Up
