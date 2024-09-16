import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Checkout() {
    const location = useLocation()
    let filteredTotal = location.state.total
    let result = {}
    let selected = [];
    console.log(filteredTotal)
    for (const key in filteredTotal) {
        if (filteredTotal[key] === 0) {
            continue;
        }
        result[key]=filteredTotal[key]
    }
    console.log(result)
    const [elements,setElements]=useState(location.state.items)
    const [total, setTotal] = useState(result)
    const [price, setPrice] = useState(location.state.price)
    // console.log(elements[2].id)
    // console.log(result[3])
    console.log(price)
    
    for (let i = 0; i < elements.length; ++i){
        console.log(elements[i].id)
        for (const key in result) {
            // console.log(key)
            if (elements[i].id === Number(key)) {
    selected.push(elements[i])
}
        }
    }
 console.log(selected)
    //  console.log(total)
    function alertHandle() {
        console.log("alert")
        console.log(document.querySelector(".alert"))
        document.querySelector(".alert").classList.remove("hidden")
        document.querySelector(".alert").style.display = "flex"
        document.querySelector(".alert").style.top = "0"
        setTimeout(() => {
            document.querySelector(".alert").style.top = "-88px"
            document.querySelector(".alert").classList.add("hidden")
            // console.log("i'm working")
        }, 7000);
    }
    function handleClick(e) {
        document.querySelector(".alert").classList.remove("hidden")
        document.querySelector(".alert").style.display = "none"
   }
    return (
        <>
            <div className='alert bg-[#04AA6D] z-10 w-full fixed top-0 hidden p-7 px-24 duration-400 transition-all justify-between text-lg text-white' >
                <span><span className='font-medium'>Done!</span> your Order has been sent successfully</span>
                <span onClick={()=>handleClick()} className='text-2xl cursor-pointer transition-all duration-300 hover:text-black'>&times;</span>
            </div>
      <div className='checkout'>
          <div className="container grid grid-cols-1 min-[768px]:gap-6 min-[768px]:grid-cols-2 bg-white p-5 w-[92%]  my-5 min-[900px]:w-[90%] min-[1500px]:w-[85%] ">
              <div className="left">
                  <h3 className='text-xl font-medium pt-5 pb-2 border-b-2 border-b-solid border-b-[#ddd]'>Billing Details</h3>
                  <form className='my-5' action="">
                      <div className='flex flex-col w-full gap-1'>
                          <label className='ml-1 ' htmlFor="country">Country <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='country' placeholder='country' />
                     </div>
                      <div className='min-[1300px]:flex min-[130px]:gap-4 overflow-hidden'>
                      <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="firstName">First Name <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='firstName' placeholder='first Name' />
                     </div>
                      <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="lastName">Last Name <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='lastName' placeholder='last Name' />
                     </div>
                     </div>
                     <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="companyName">Company Name <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='companyName' placeholder='company name' />
                     </div>
                     <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="streetAddress">Street Address <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='streetAddress' placeholder='street address' />
                     </div>
                     <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="city">City / Town<span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='city' placeholder='City / Town' />
                      </div>
                      <div className='min-[1300px]:flex min-[130px]:gap-4 overflow-hidden'>
                      <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="stateCountry">State / Country <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='stateCountry' placeholder='state / country' />
                     </div>
                      <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="postCode">Post Code / Zip <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='postCode' placeholder='post code' />
                     </div>
                     </div>
                      <div className='min-[1300px]:flex min-[130px]:gap-4 overflow-hidden'>
                      <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="email">ُEmail Address <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='email' placeholder='email address' />
                     </div>
                      <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="phoneNumber">Phone <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='phoneNumber' placeholder='phone number' />
                     </div>
                     </div>
                  </form>
              </div> 
              <div className="right p-5 border-2 border-solid border-[#ddd]">
              <h3 className='text-xl mb-10 font-medium   pb-2 border-b-2 border-b-solid border-b-[#ddd]'>Your Order</h3>
                            <div className=' pb-2  text-[#666] text-center flex justify-around -border-b--thin border-b-solid border-b-[#ddd]'>
                            <span className='font-medium text-center w-1/3'>Product</span>
                            <span className='font-medium'>Qts</span>
                            <span className='font-medium'>Total</span>
                    </div>
                    {
                        selected.map(item => 
                            <>
                        <div className=' pb-2 py-9  text-[#666]  flex justify-around -border-b--thin border-b-solid border-b-[#ddd]'>
                                    <span className='truncate w-[42%] '>{item.name} </span><span className='font-medium'>x{price[item.id]}</span>
                            <span className=' truncate'>{item.price} DA</span>
                                </div>
                                </>
                        )
                  }
                  {/* <div className='py-9 pb-2  text-[#666]  flex justify-around -border-b--thin border-b-solid border-b-[#ddd]'>
                      <span>impriment epson <span className='font-medium'>x2</span></span>
                      <span>880,000 DA</span>
              </div> */}
                  <div className='py-9 pb-2 px-9  text-[#666]  flex justify-between -border-b--thin border-b-solid border-b-[#ddd]'>
                      <span className=''>Cart SubTotal</span>
                        <span className='text-lg font-medium'>{location.state.final}DA</span>
              </div>
                  <div className='py-9 pb-2  px-9 text-[#666]  flex justify-between -border-b--thin border-b-solid border-b-[#ddd]'>
                      <span className=''>Order Total</span> {location.state.isCouponApplied?(<span>-50%</span>):""}
                        <span className='text-lg font-medium'>{location.state.isCouponApplied?location.state.finalResult:location.state.final}DA</span>
              </div>
              <button  onClick={alertHandle}
        className=" outline-none overflow-hidden bg-[#000] p-4 w-full text-white  rounded-full  block 
       relative bottom-[3px] 
         hover:text-white transition mt-8  duration-300 before:absolute 
           before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
         before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full "
      >
        <span className="  relative z-10 transition-colors duration-300 " >
         Place Order
        </span>
      </button>
              </div>
          </div>
            </div>
            </>
  )
}
