import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import data from "../../public/outils.json"
import fire  from "../../public/fire.png"
import { useEffect, useState } from "react";
export default function Offer() {
    let laptopArray = [...[...data][0].laptop];
    let imprimentsArray = [...[...data][0].impriments];
    let items = laptopArray.concat(imprimentsArray);
    let elements = [];
    for (let i = 0; elements.length < 9; ++i){
      elements.push(items[Math.floor(Math.random() * items.length)])
    elements=[...new Set(elements)]
    }
    console.log(elements)
    const [state, setState] = useState(elements);
    // useEffect(() => {
    //   fetch("../../public/items.json").then(res=>res.json()).then(data=>console.log(data))
    // },[])
    console.log(state)
   
    // console.log(elements)
    function addToCart(item) {
      let additem = JSON.stringify(item)
      localStorage.setItem(item.id, additem)
  
  }
  return (
    <div className='offer bg-[#fcc839] py-7'>
      <div className="container mt-5 mb-12  w-[92%]  min-[1500px]:w-[85%] ">
      <div className="title py-3">
        <p className="flex gap-x-2 text-2xl border-b-thin border-[#ddd] border-solid">
          <h3 className="font-medium  items-center underline underline-offset-8 -decoration--main-color decoration-2">
            Hot</h3>Product<img className="w-[22px] mt-[3px] -ml-1 h-[22px]" src={fire} alt="" />
        </p>
        </div>
        <hr className="mb-8 bg-[#a5a4a4] h-[0.1px] -mt-[11.5px]"/> 

        <div className="grid
gap-5 grid-cols-1 min-[480px]:grid-cols-[1fr,1fr] max-[640px]:grid-rows-5 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-6">
        {state.map((item,index) =>
                  <>
                       <div  key={item.id}
        className={`item p-3 w-full rounded-lg  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mx-auto bg-white flex items-center flex-col justify-center relative before:text-sm  ${index===4?`min-[480px]:col-start-1 min-[480px]:col-end-3 min-[480px]:row-start-3 min-[480px]:row-end-5 min-[900px]:col-start-3   min-[900px]:col-end-5 min-[900px]:row-start-1 min-[900px]:row-end-3 min-[1300px]:col-start-3 min-[1300px]:col-end-5 min-[1300px]:row-start-1 min-[1300px]:row-end-3`:""} before:absolute before:content-['25%'] before:z-10 before:w-fit before:top-0 before:right-0 before:px-2 before:py-1 before:text-white before:text-center before:-bg--main-color overflow-hidden`}
      >
        
        <img className={`${index !== 4 ?  ` min-[640px]:w-[150px] p-2` : " min-[640px]:w-[450px] p-4"} w-[250px] product-imgOne`} src={item.mainImg} alt="" />
              <img className={`${index !== 4 ? ` min-[640px]w-[150px] p-2` : " min-[640px]w-[450px] p-4"} w-[250px] product-imgTwo absolute  top-0 `} src={item.relatedImg[1]} alt="" />
                    <ul className={`${index !== 4 ? `product-action relative min-[640px]:opacity-0 min-[640px]:absolute` : ""} absolute z-10 flex items-center gap-5 min-[640px]:left-[calc(50%-80px)]   `}>
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
      <h1 className={` ${index !== 4 ? `product-name text-sm h-[80px]` : "text-lg"}  pt-5   overflow-hidden text-center  px-2 `}>{item.name}</h1>
        <ul className={` ${index !== 4 ? `rating ` : ""} flex justify-center items-center gap-2 py-3 -text--main-color`}>
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
        <span className={` ${index !== 4 ? `price ` : ""} flex justify-center items-center  text-lg gap-1 pb-3`}>
          <span className={`${index !== 4 ? `text-[16px] ` : "text-[21px] mr-4"} -text--main-color `}>{item.price} DA</span>
          <span className={`${index !== 4 ? `text-[16px] ` : "text-[21px] "} text-[#777] line-through `}>{item.old_price?item.old_price + "DA":""}</span>
        </span>
        <button onClick={()=>addToCart(item)}  className={` ${index!==4 ?`add min-[640px]:opacity-0 relative min-[640px]:bottom-[-50px] min-[640px]:absolute  before:absolute`:"relative before:absolute"}  outline-none overflow-hidden bg-[#000]  py-4 w-3/4 text-white rounded-full block mx-auto text-center
                max-[499px]:mb-8 
                 hover:text-white transition duration-300 
                   before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
                 before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full `}>
               <span className=" relative z-10 transition-colors duration-300 "> Add to Cart</span>
              </button>
                </div>
                  </>
            
         )}
</div>
          </div> 
    </div>
  )
}
