import React from 'react'
import imgOne from "../../public/banner-4.jpg"
import imgTwo from "../../public/banner-5.jpg"

export default function AdsThree() {
  return (
      <div className='adsThree'>
          <div className=" container  mt-5 mb-12 grid w-[92%]   min-[1500px]:w-[85%] gap-5  grid-cols-[1fr] min-[900px]:grid-cols-[1fr,1fr] ">
              
        <div className='banner cursor-pointer relative '>
        <div class="glass_hover"></div>
        <img  src={imgOne} alt="" />  
               </div>
        <div className='banner cursor-pointer relative '>
        <div class="glass_hover"></div>
        <img  src={imgTwo} alt="" />  
               </div>


              
          </div>
            
      </div>
  )
}