import React from 'react'
import imgOne from "../../public/banner-1.jpg"
import imgTwo from "../../public/banner-8.jpg"
import imgThree from "../../public/banner-7.jpg"
export default function AdsTwo() {
  return (
      <div className='adsTwo'>
          <div className=" container hidden min-[1200px]:grid mt-5 mb-12  w-[92%]   min-[1500px]:w-[85%] gap-5  grid-cols-[1fr] min-[900px]:grid-cols-[1fr,1fr] min-[1200px]:grid-cols-[1fr,1fr,1fr] ">
          <div className='banner cursor-pointer relative '>
        <div class="glass_hover"></div>
        <img  src={imgOne} alt="" />  
        </div>
        <div className='banner cursor-pointer relative '>
        <div class="glass_hover"></div>
        <img  src={imgTwo} alt="" />  
               </div>
        <div className='banner cursor-pointer relative '>
          <div class="glass_hover"></div>
                <img src={imgThree} alt="" />  
               </div>

               
              
              
          </div>
            
      </div>
  )
}
