
import sliderOne from "/slide-one.jpg"
import sliderTwo from "/slide-Two.jpg"
import sliderThree from "/slide-three.jpg"
import sliderFour from "/slide-four.jpg"
import sliderFive from "/slide-five.jpg"
import adOne from "/banner-sm-2.jpg"
import adTwo from "/banner-top-5.jpg"
import Ads from "./ads"
export default function Slider() {
  let counter = 1;
  setInterval(() => {
    document.getElementById(`radio-${counter}`).checked = true
    counter++
    if (counter > 5) {
      counter=1
    }
  }, 5000);
  return (
      <>
          <div className="slider">
              <div className="container  mt-5 mb-12 grid w-[92%] min-h-[40vh]  min-[1500px]:w-[85%] gap-3 grid-cols-[1fr] min-[1024px]:grid-cols-[270px,2fr] min-[1200px]:grid-cols-[270px,2fr,300px]   g-x-2">
          <div className="hidden overflow-hidden min-[1024px]:block bg-white rounded-md border-solid border-2 border-[#ddd]" >
            <h2 className="flex items-center font-semibold gap-3 -bg--main-color text-white px-4 py-3 -border-b--thin -border--main-color border-solid "><i className="fa-solid fa-bars text-xl "></i>Shop By Department</h2>
            <ul className="">
              <li className="px-4 py-3 -border-b--thin border-[#ddd]  cursor-pointer border-solid tansition-all duration-300 hover:pl-7 hover:text-white hover:-bg--main-color">Pc Portable</li>
              <li className="px-4 py-3 -border-b--thin border-[#ddd]  cursor-pointer border-solid tansition-all duration-300 hover:pl-7 hover:text-white hover:-bg--main-color">Moniteurs</li>
              <li className="px-4 py-3 -border-b--thin border-[#ddd]  cursor-pointer border-solid tansition-all duration-300 hover:pl-7 hover:text-white hover:-bg--main-color">Imprimentes</li>
              <li className="px-4 py-3 -border-b--thin border-[#ddd]  cursor-pointer border-solid tansition-all duration-300 hover:pl-7 hover:text-white hover:-bg--main-color">Refroidissement</li>
              <li className="px-4 py-3 -border-b--thin border-[#ddd]  cursor-pointer border-solid tansition-all duration-300 hover:pl-7 hover:text-white hover:-bg--main-color">Adaptateurs</li>
              <li className="px-4 py-3 -border-b--thin border-[#ddd]  cursor-pointer border-solid tansition-all duration-300 hover:pl-7 hover:text-white hover:-bg--main-color">Encre et Tonner</li>
              <li className="px-4 py-3 -border-b--thin border-[#ddd]  cursor-pointer border-solid tansition-all duration-300 hover:pl-7 hover:text-white hover:-bg--main-color">Casques</li>
              <li className="px-4 py-3 -border-b--thin border-[#ddd]  cursor-pointer border-solid tansition-all duration-300 hover:pl-7 hover:text-white hover:-bg--main-color">Claviers/Souris</li>
              <li className="px-4 py-3   cursor-pointer  tansition-all duration-300 hover:pl-7  hover:text-white hover:-bg--main-color">Sacs & Housses</li>
            </ul>
            
          </div>
          <div className="slider relative overflow-hidden flex rounded-xl ">
            <input className="hidden" type="radio" name="radio-btn" id="radio-1" />
            <input className="hidden" type="radio" name="radio-btn" id="radio-2" />
            <input className="hidden" type="radio" name="radio-btn" id="radio-3" />
            <input className="hidden" type="radio" name="radio-btn" id="radio-4"/>
            <input className="hidden" type="radio" name="radio-btn" id="radio-5"/>
            <img className=" first transition-all" src={sliderOne} alt="" />
            <img className=" transition-all" src={sliderTwo} alt="" />
            <img className=" transition-all" src={sliderThree} alt="" />
            <img className=" transition-all" src={sliderFour} alt="" />
            <img className=" transition-all" src={sliderTwo} alt="" />
            <img className=" transition-all" src={sliderFive} alt="" />
            <div className="navigation-auto flex gap-2 absolute bottom-[2%] left-[calc(50%-44px)]">
              <div className="auto-btn1 p-1 cursor-pointer  border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700] hover:p-2"></div>
              <div className="auto-btn2 p-1 cursor-pointer  border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700] hover:p-2"></div>
              <div className="auto-btn3 p-1 cursor-pointer  border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700] hover:p-2"></div>
              <div className="auto-btn4 p-1 cursor-pointer  border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700] hover:p-2"></div>
              <div className="auto-btn5 p-1 cursor-pointer  border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700] hover:p-2"></div>
            </div>
            <div className="navigation-manual flex gap-2 absolute bottom-[2%] left-[calc(50%-44px)]">
              <label htmlFor="radio-1" className="manual--btn-1 p-1 cursor-pointer border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700]"></label>
              <label htmlFor="radio-2" className="manual--btn-2 p-1 cursor-pointer border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700]"></label>
              <label htmlFor="radio-3" className="manual--btn-3 p-1 cursor-pointer border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700]"></label>
              <label htmlFor="radio-4" className="manual--btn-4 p-1 cursor-pointer border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700]"></label>
              <label htmlFor="radio-5" className="manual--btn-5 p-1 cursor-pointer border-solid border-2 border-[#fcb700] rounded-full transition-all duration-300 hover:bg-[#fcb700]"></label>
            </div>
          </div>
          <div className="hidden  min-[1200px]:flex relative flex-col gap-4 justify-between">
            <div className="p-1  cursor-pointer banner relative bg-white rounded-md">
            <div class="glass_hover"></div>
            <img className=" " src={adOne} alt="" />
            </div>
            <div className=" banner cursor-pointer relative p-1  bg-white rounded-md">
            <div class="glass_hover"></div>

            <img className="h-[150px] " src={adTwo} alt="" />
            </div> 
            {/* <Ads size={20} width={150} />
            <Ads size={20} width={150}/> */}
            {/* <Ads/> */}
            {/* <img className="rounded-md" src={adOne} alt="" />
            <img className="rounded-md" src={adOne} alt="" /> */}
           </div>
              </div>
              
    </div>

      </>
  )
}
