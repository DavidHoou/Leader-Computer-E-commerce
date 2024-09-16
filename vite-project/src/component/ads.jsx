import React from 'react'
import leader from "../../public/leaderPng.svg"
export default function Ads({size,width}) {
  return (
    <div className=" ads  p-3  bg-white rounded-md">
      <div className={`ads-content  border-solid border-4  border-transparent transition-all duration-100 hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] cursor-pointer bg-[#eee]  rounded-sm flex  justify-center items-center`}
                style={{
                  paddingTop: `${size}px`,
                  paddingBottom: `${size}px`,
                }}
      >
        <img src={leader} className=""
                  style={{
                 width:`${width}px`
                  }}alt="Leader logo" />
    </div>
</div>
  )
}
