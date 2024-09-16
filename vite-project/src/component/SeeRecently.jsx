import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// import "swiper/css/bundle";
// import "swiper-bundle.css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
// import { Pagination } from 'swiper/modules';
import productOne from "../imgs/product-1.jpg";
import productTwo from "../imgs/product2.jpg";
import productThree from "../imgs/product-3.jpg";
import productFour from "../imgs/product4.jpg";
import productFive from "../imgs/product5.jpg";
import productSix from "../imgs/product6.jpg";
import productSeven from "../imgs/product7.jpg";
import data from "../../public/outils.json"
import { useEffect, useState } from "react";
export default function SeeRecently() {
  
    const [addItems, setAddItems] = useState([]);
    useEffect(() => {
      let addedElements = [];
    for (let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      let parsedValue = JSON.parse(value);
      addedElements.push(parsedValue)
      }
      setAddItems(addedElements)
    }, [])

  // useEffect(() => {
  //   fetch("../../public/items.json").then(res=>res.json()).then(data=>console.log(data))
  // },[])
 
  // console.log(elements)
  function addToCart(item) {
    let additem = JSON.stringify(item)
    localStorage.setItem(item.id, additem)

}
  return (
    <div className="onsaleProduct bg-[#fcc839] py-7">
      <div className="container mt-11 p-5 min-[1500px]:w-[85%]">
        <div className="title py-5">
          <p className="flex gap-x-2 text-xl border-b-thin border-[#ddd] border-solid">
            <h3 className="font-medium underline underline-offset-4 -decoration--main-color decoration-2">
            Vus 
            </h3>{" "}
            Récemment
          </p>
        </div>
              <div className="bg-[#fef1c7] rounded-lg p-5">
        <Swiper
  slidesPerView={1}
  spaceBetween={20}
  breakpoints={{
    500: {
      slidesPerView: 2,
      spaceBetween:20,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 25,
    },
    // 1200: {
    //   slidesPerView: 5,
    //   spaceBetween: 20,
    // },
    
          }}
        //   navigation={{
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //  }}
          pagination={{
            clickable:true,
          }}
          navigation={true}
          modules={[Pagination,Navigation]}
          className="mySwiper"
        >
          <div className="swipper-container">
          {addItems.map(item => 
   <>
              <SwiperSlide>
                {addItems ? (
                  <div  key={item.id}
        className={`item p-3 rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  mx-auto bg-white flex items-center flex-col  relative before:text-sm   before:absolute before:content-['25%'] before:z-10 before:w-fit before:top-0 before:right-0 before:px-2 before:py-1 before:text-white before:text-center before:-bg--main-color overflow-hidden`}
      >
        
        <img className="product-imgOne w-[200px] p-2" src={item.mainImg} alt="" />
              <img className="product-imgTwo absolute top-0 w-[200px] p-2" src={item.relatedImg[1]} alt="" />
        <ul className="product-action z-10 flex items-center  py-5 gap-5 left-[calc(50%-80px)]  min-[500px]:absolute min-[500px]:opacity-0">
          <li className="p-2 border-solid -border--thin  border-[#777] rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-center transition-all duration-300 hover:-bg--main-color  hover:text-white hover:border-transparent ">
            <i className="fa-regular fa-heart"></i>
          </li>
          <Link to={`allProducts/field/${item.id}?gender=${item.machine}`} state={{search:`gender=${item.machine}`}}> <li className="p-2 border-solid -border--thin  border-[#777] rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-center transition-all duration-300 hover:-bg--main-color  hover:text-white hover:border-transparent ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </li></Link>
          <li className="p-2 border-solid -border--thin  border-[#777] rounded-full cursor-pointer w-10 h-10 flex justify-center items-center text-center transition-all duration-300 hover:-bg--main-color  hover:text-white hover:border-transparent ">
            <i className="fa-solid fa-share"></i>
          </li>
        </ul>
      <h1 className="product-name  pt-5 h-[70px] overflow-hidden px-2 text-center   ">{item.name}</h1>
        <ul className="rating flex justify-center items-center gap-2 py-1 -text--main-color">
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <i className="fa-regular fa-star"></i>
          </li>
        </ul>
        <span className="price flex justify-center items-center  text-lg gap-2 pb-3">
          <span className="  min-[640px]:text-base -text--main-color">{item.price} DA</span>
          <span className="line-through   min-[640px]:text-base text-[#777]">{item.old_price?item.old_price + "DA":""}</span>
        </span>
        <button onClick={()=>addToCart(item)}  className="add relative min-[640px]:absolute outline-none overflow-hidden bg-[#000]  py-4 w-3/4 text-white rounded-full block mx-auto text-center
                bottom-[3px] max-[640px]:mb-8 min-[640px]:bottom-[-50px]  min-[640px]:opacity-0
                 hover:text-white transition duration-300 before:absolute 
                   before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
                 before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full ">
               <span className=" relative z-10 transition-colors duration-300 "> Add to Cart</span>
              </button>
                </div>) : (
                    
<div role="status"  class=" animate-pulse  rtl:space-x-reverse  md:items-center">
    <div class=" text-center  mb-3 flex justify-center items-center h-48 bg-gray-300 rounded  dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/100/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div class="w-5/6 m-auto">
        <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
</div>


      )}

    </SwiperSlide>
    </>
)}
          </div>


</Swiper>
            </div>
      </div>
    </div>
  );
}
