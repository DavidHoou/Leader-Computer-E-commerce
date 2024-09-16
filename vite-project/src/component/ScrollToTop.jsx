import React from 'react'

export default function ScrollToTop() {
    let calcScrollValue =() =>{
        let progress=document.querySelector(".progress")
        let progressValue = document.querySelector(".progress-value")
        let position = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let scrollValue=Math.round((position * 100) / calcHeight)
        if (position > 100) {
          progress.style.display = "grid"
        } else {
          progress.style.display = "none"
        }
        progress.addEventListener("click", () => {
          document.documentElement.scrollTop = 0;
        })
        progress.style.background=`conic-gradient(#d01418 ${scrollValue}%,#ddd ${scrollValue}%)`
      }
      window.onscroll = calcScrollValue;
      window.onload = calcScrollValue;
      
  return (
      <>
              <div className="progress cursor-pointer hidden -bg--main-color w-14 h-14 z-[1000]  place-items-center rounded-full text-lg fixed  bottom-[20px] right-[50px]  ">
    <div className="progress-value bg-white rounded-full w-[calc(100%-10px)] h-[calc(100%-10px)] grid place-items-center"><i className="fa-solid fa-arrow-up"></i></div>
  </div>
      </>
  )
}
