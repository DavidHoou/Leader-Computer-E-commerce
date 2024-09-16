import Ads from './ads'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useParams, useSearchParams , useLoaderData } from 'react-router-dom';
import laptop from "../../public/pc-laptop.png"
import monitor from "../../public/monitor.png"
import printer from "../../public/Printers.png"
import usb from "../../public/cléUsb.png"
import disqueDur from "../../public/DisqueDurExt.png"
import cables from "../../public/Cables.png"
import clavierSouris from "../../public/claviers-Souris.jpg"
import casque from "../../public/Casque.png"
import gadgetUSB from "../../public/gadgetsUSB.jpg"
import encreToner from "../../public/encore-toner.png"
import adaptateurs from "../../public/adaptateurs.jpg"
import hautParleurs from '../../public/hautParleurs.jpg'
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import 'swiper/css';

import retour from "../../public/retour.jpg"
// import { machine } from "../../public/machine"
// import outils from '../../public/outils.json';

export default function Field() {
  // const outils = useLoaderData();
  // console.log(outils)
  const location = useLocation()
  console.log(location)
  // console.log(location.state.search)
  const params=useParams()
  const [outils,setOutils]=useState([])
  const [machine, setMachine] = useState([])
  const [loading, setLoading]= useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../public/outils.json");
        const data = await response.json();
        setOutils(data);
      } catch (error) {
        console.error(error)
      }
    };
    const fetchDataMachine = async () => {
      try {
        const response = await fetch("../../public/machine.json");
        const data = await response.json();
        setMachine(data);
      }catch (error) {
        console.error(error)
      }
    } 
    Promise.all([fetchData(), fetchDataMachine()]).then(() => {
      setLoading(false);

    })

    
  }, [location.pathname,params]);
  const [searchParams, setSearchParmas] = useSearchParams()
  // const location = useLocation();
  // location.search.set("minVal","75000")
  // console.log(location.search)
  let typeMachine = searchParams.get("gender")
 
  const [classItems, setClassItems] = useState([...document.querySelectorAll(".marque")])
  let changed = [];
  let counter = 0
  let styleLink = {
    backgroundColor: "#d01418",
    color: "white",
    border:"none"
  }
  let selected = new URLSearchParams(searchParams)
  // console.log(activeClass[0].classList)
  function genrateParams(test, value) {
    let generated= new URLSearchParams(searchParams)
    if (value === null) {
      generated.delete(test)
    } else {
      generated.set(test, value)
    }
    // selected.delete("type")
    // console.log(generated)
    return `?${generated}`
  }
  function changeStyle(event) {
    const links = document.querySelectorAll(`.${event.target.closest("ul").classList[0]} li a`);
    links.forEach(link => link.classList.remove('selected'));
    let item = event.target.closest("ul").classList[0];
    // console.log(item);
    event.target.classList.add('selected');
  }
  function clearItems(event) {
    const links = document.querySelectorAll(`.${event.target.classList[0]}`);
    let item = event.target.classList[0];
    console.log(item);
    links.forEach(link => link.classList.remove('selected'));
}
  let diffrent=[...selected].filter((item)=>!item.includes("gender") && !item.includes("null"))
  // console.log(selected.get("maxVal"))
  // console.log(selected.get("minVal"))
  // console.log(selected)
  // outils.map((element) => {console.log((element["price"].split(",")).join(""))})
  if (outils.length > 0) {
  if (selected) {
      [...outils][0][typeMachine].map((element) => {
        for (const [key, value] of diffrent) {
          // console.log(key,value)
          
          if (element[key] === value) {
            // console.log(diffrent.indexOf(diffrent[diffrent.length-1]))
            // console.log(element[key])
            counter++;
            // console.log(key)
            // console.log(diffrent[diffrent.length-1])
            if (counter !== diffrent.length && diffrent.length!==1  && (diffrent[diffrent.length-1]).includes(key)) {
              counter = 0;
            }
            // console.log(counter)
            if (counter === diffrent.length) {
              // console.log(counter,diffrent.length)
              // console.log(diffrent.length)
              // console.log(selected.get("minVal"))
              // console.log((element["price"].split(",")).join(""))
              // console.log(selected.get("maxVal"))
              // if (selected.get("minVal")  < (element["price"].split(",")).join("")  < selected.get("maxVal")){
              //        console.log("exist")
              // }
              changed.push(element)
              counter = 0;
            }
          } else {
            counter = 0;
            continue;
          }
      }
    })
   }
  }
  //  price range   /////////////////////////////////////////////////////////////////////////////////////
//   function clearPrice(event) {
//       event.preventDefault(); // prevent the default link behavior
//       // Remove the min and max values from the generated object
//       generated.delete("minVal");
//       generated.delete("maxVal");
//       // Update the URL parameters
//       const newUrl = `${window.location.pathname}?${generated.toString()}`;
//       window.history.pushState({}, '', newUrl);
  
//   }
//   // console.log(changed) 
// // range price style
//   const rangeInput = document.querySelectorAll(".rangeInput input")
//   const priceInput = document.querySelectorAll(".priceInput input")
//   const progress = document.querySelector(".slider .progress");
//   // const [priceValue,setPriceValue]=useState({minPrice:2500,maxPrice:7500})
//   const [inputValue,setInputValue]=useState({minVal:20000,maxVal:50000})
//   let priceGap = 1000;
//     priceInput.forEach(input =>{
//       input.addEventListener("input", e => {
//         // let minPrice = parseInt(priceInput[0].value)
//         // let maxPrice = parseInt(priceInput[1].value);
//         let minPrice = parseInt(priceInput[0].value)
//         let maxPrice = parseInt(priceInput[1].value)
//         if ((maxPrice - minPrice >=  priceGap) && maxPrice <= rangeInput[1].max) {
//           if (e.target.className === "inputMin") {
//             rangeInput[0].value = minPrice;
//             progress.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
//             } else {
//             rangeInput[1].value = maxPrice;
//               progress.style.right = (100 - (maxPrice / rangeInput[1].max) * 100 )+ "%";
//            }
//         }
//       })
//     })

//     rangeInput.forEach(input =>{
//       input.addEventListener("input", e => {
//         let minVal = parseInt(rangeInput[0].value)
//         let maxVal = parseInt(rangeInput[1].value)
//         if ((maxVal - minVal) < priceGap) {
//           if (e.target.className === "rangeMin") {
//             rangeInput[0].value = maxVal - priceGap;
//             } else {
//             rangeInput[1].value = minVal + priceGap;
            
//            }
//         }
//         else {
//           priceInput[0].value = minVal;
//           priceInput[1].value = maxVal;
//           progress.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
//           progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//       })
//     })
  //   let inputGenerate= new URLSearchParams(searchParams)
  //   function generateMin(event) {
  //   setInputValue(preValue => ({ ...preValue, [event.target.name]: event.target.value }))    
  //   inputGenerate.set("minValue",event.target.value)
  //   const newUrl = `${window.location.pathname}?${inputGenerate.toString()}`;
  //   window.history.pushState({}, '', newUrl);
  //   return newUrl;
  // }
  
  
  

// let generated = new URLSearchParams(searchParams);

// function generateInput(event) {
  //   const { name, value } = event.target;
  //   const currentValue = generated.get(name);
  
  //   if (currentValue) {
    //     // Update the current value
    //     const updatedValue = currentValue.replace(/[^,]+/, value);
    //     generated.set(name, updatedValue);
    //   } else {
      //     generated.set(name, value);
      //   }
      
      //   const newUrl = `${window.location.pathname}?${generated.toString()}`;
      //   window.history.pushState({}, '', newUrl);
      //   return newUrl;
      // }
      // range price style
      // console.log(generateInput())
      // machine.length > 0? console.log(machine[0].impriments.type) : console.log("there is no machine content")
      // outils.length>0?console.log([...outils][0][typeMachine]):"there no outils"
  console.log(location)
  // console.log()
      // console.log(selected)
  // console.log(typeMachine)
      // console.log(filter)
      //  price range///////////////////////////////////////////////////////////////////////////////////
    //   function addToCart(item) {
    //     let additem = JSON.stringify(item)
    //     localStorage.setItem(item.id, additem)
    
    // }
  return (
         <>
      {
        loading?(
          <div className="container h-[100vh] bg-white my-5 flex items-center justify-center min-[1500px]:w-[85%]">
          <div className="loader p-5"></div>
        </div>
        ):(
          <div className="field">
          <div className="container w-[92%]  my-5 min-[900px]:w-[90%] min-[1500px]:w-[85%] ">
          <Ads size={50} width={192} />
            <div className="shortLink">
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
      breakpoints={{
        500: {
          slidesPerView: 1,
          spaceBetween:20,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
         }}
     
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
            >
    
        <SwiperSlide >
        <Link to="">
                  <div className="item mt-[20px] [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='  overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={retour} alt="retour" /></div>
                  {/* <h3 className='p-6 text-center'></h3> */}
                    </div></Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="">
                  <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={laptop} alt="PC Laptop" /></div>
                  <h3 className='p-3 text-center'>PC Portable </h3>
                    </div></Link>
        </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={monitor} alt="Monitor" /></div>
                  <h3 className='p-3 text-center'>Moniteurs </h3>
               </div>
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={printer} alt="Imprimante" /></div>
                  <h3 className='p-3 text-center'>Imprimantes </h3>
               </div>
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={casque} alt="Casques" /></div>
                  <h3 className='p-3 text-center'>Casques</h3>
               </div>  
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={usb} alt="Clé USB" /></div>
                  <h3 className='p-3 text-center'>Clé USB</h3>
               </div>
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={disqueDur} alt="Disque Dur Ext" /></div>
                  <h3 className='p-3 text-center'>Disque Dur Ext</h3>
               </div>
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={clavierSouris} alt="Claviers/Souris" /></div>
                  <h3 className='p-3 text-center'>Claviers/Souris</h3>
                </div>
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={cables} alt="Cables" /></div>
                  <h3 className='p-3 text-center'>Cables</h3>
                </div>
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={encreToner} alt="Encre et Tonner" /></div>
                  <h3 className='p-3 text-center'>Encre et Tonner</h3>
               </div> 
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={hautParleurs} alt="Haut Parleurs" /></div>
                  <h3 className='p-3 text-center'>Haut Parleurs</h3>
               </div>
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={gadgetUSB} alt="Gadgets USB" /></div>
                  <h3 className='p-3 text-center'>Gadgets USB</h3>
                </div>
    </SwiperSlide>
                <SwiperSlide>
                <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
                relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                        before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                        [&_.img-holder]:hover:rotate-6">
                  <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={adaptateurs} alt="Adaptateurs" /></div>
                  <h3 className='p-3 text-center'>Adaptateurs</h3>
                </div> 
    </SwiperSlide>
    </Swiper>
            </div>
            <div className="filtering grid relative grid-cols-1 min-[900px]:grid-cols-[1fr,3fr] min-[1500px]:grid-cols-[300px,1fr]  gap-5">
              <div className="filtering-left sticky bg-white rounded-md  h-fit pb-5  ">
                <h2 className='text-lg  p-3 bg-[#eee]  border-solid -border--thin border-[#b3b3b3ee] rounded-t-lg'>CATEGORIE</h2>
                <div className='p-3'>
                <h3 className='ml-2 my-2 text-lg font-medium'>{machine[0][typeMachine].type}</h3>
                  <div>
                  <div className='flex justify-between items-center'>
                          <h3 className='ml-2 my-2 text-lg font-medium'>{typeMachine}</h3>
                  <Link to={genrateParams("type",null)}  onClick={(event)=>{clearItems(event)}} className='type -text--main-color mr-4'>Clear</Link>
                  </div>
                  
                    <ul className='typeMenu'>
    
    {machine[0][typeMachine].sideMenu.map((item, index) =>
    
      <li key={index}>
    
        <NavLink to={genrateParams("type", item)} className={({ isActive }) => `type block mb-2  py-2  px-2  border-solid -border--thin border-[#a1a1a1] rounded-lg transition-all ${!isActive ? `selected` : ''} hover:-bg--main-color hover:border-transparent hover:text-white cursor-pointer`} onClick={(event) => changeStyle(event)}>{item}</NavLink>
    
      </li>)}
    
    </ul>
                  </div>
                  <div>
    
                  <div className='flex justify-between items-center'>
                    <h3 className='ml-2 my-2 text-lg font-medium'>Marque</h3>
                      <Link to={genrateParams("marque", null)} onClick={(event)=>{clearItems(event)}} className='marque -text--main-color mr-4'>Clear</Link>
                      
                    </div>
                    <ul className='marqueMenu flex gap-x-3  gap-y-2  flex-wrap justify-center'>
                <>
                      {machine[0][typeMachine].marque.map((item, index) =>
               
               <li key={index}>
    
               <NavLink to={genrateParams("marque", item)} className={({ isActive }) => `marque block mb-1 text-[15px] py-2 px-3 border-solid -border--thin border-[#a1a1a1]  rounded-lg transition-all ${!isActive ? `selected` : ''} hover:-bg--main-color hover:border-transparent hover:text-white cursor-pointer`} onClick={(event) => changeStyle(event)}>{item}</NavLink>
           
             </li>
                        
              )}
                  </>
                  </ul>
                  </div>
     {/*  
                <div>
                                  <div className='flex justify-between items-center'>
                    <h3 className='ml-2 my-2 text-lg font-medium'>Prix(Da)</h3>
                      <Link  onClick={(event)=>{clearPrice(event)}} className='marque -text--main-color mr-4'>Clear</Link>
                    </div>
                     <div className="wrapper">
                      <div className="priceInput flex justify-between items-center">
                      <div className="field   flex  items-center gap-2">
                        <span>Min</span>
                        <input type="number" className='inputMin w-20 text-center border-solid -border--thin -border--main-color p-2 rounded-md'min={inputValue.minVal} max={inputValue.maxVal} name='minVal' onChange={(event)=>generateInput(event)}  step={100} defaultValue={225000} />
                      </div>
                      <div className="separate">-</div>
                      <div className="field flex items-center gap-2">
                        <span>Max</span>
                        <input type="number" className=' inputMax w-20 text-center border-solid -border--thin -border--main-color p-2 rounded-md'min={inputValue.minVal} max={inputValue.maxVal} name='maxVal' onChange={(event)=>generateInput(event)}  step={100} defaultValue={425000}/>
                      </div>
                      </div>
                      <div className=" mt-6 slider relative h-[5px] rounded-full bg-[#ddd]">
                        <div className="progress absolute h-[5px] left-1/4 right-1/4  -bg--main-color"></div>
                      </div>
                    <div className="rangeInput relative">
                        <input className='rangeMax absolute top-[-5px] h-[5px] w-full' name='minVal' type="range" min={inputValue.minVal} max={inputValue.maxVal} 
                          onChange={(event)=>generateInput(event)}
                     defaultValue={255000} step={100}/>
                        <input className='rangeMin absolute top-[-5px] h-[5px] w-full' name='maxVal' type="range" min={inputValue.minVal} max={inputValue.maxVal} defaultValue={425000}  onChange={(event)=>generateInput(event)} step={100}/>
                      </div>
                   </div>
                            
                        {/* <input className='' type="range" min={0}  max={10000}  value={7500}/> 
                </div> */}
                </div>
                </div>
                <div className='filtering-right bg-white rounded-md'>
                    <h2 className='text-lg  p-3
                  border-solid -border-b--thin border-[#b3b3b364] rounded-t-lg'>{typeMachine} <span className=' text-sm text-[#777]'>({changed.length > 0 ? changed.length + " Résultats" : `Not Found`} )</span></h2>
                <div className=" p-3">
                      <div className='grid grid-cols-2 min-[900px]:grid-cols-3  min-[1500px]:grid-cols-4 gap-3'>
                    <>
                      {(changed.length > 0 ?changed:[...outils][0][typeMachine]).map((item,index) =>
                      (
                        <div className='p-3 text-center transition-all [&>.cart]:hover:visible duration-200  hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                        <Link to={`${item.id}?gender=${typeMachine}`} state={{search:searchParams.toString()}} key={index} >
                            <img src={item.mainImg} className='w-[200px] m-auto ' alt="" />
                          <h3 className='text-xs  pl-2 h-8 overflow-hidden mt-1 w-full'>{item.name}</h3>
                          <span className='pl-2 text-lg font-medium' >{item.price} DA</span>
                          <div className='pl-2 mb-3 flex gap-2 text-sm text-center justify-center '>
                          <span className='text-[#777] line-through'>{item.old_price} DA</span>
                            <span className='bg-red-200 text-red-500 p-1 text-xs'>{item.sold}%</span>
                          </div>
                            </Link>
                          <button onClick={()=>addToCart(item)} className="cart w-full text-center  -bg--main-color transition-all duration-200 py-2 rounded-md text-white min-[1500]:invisible">
                            Add to Panier
                            </button>
                        </div>
                        )
                      )}
                    </>
                  </div>
              </div>
                
              </div>
              </div>
          </div>
       </div>
        )
      }
         </>

  )
}
