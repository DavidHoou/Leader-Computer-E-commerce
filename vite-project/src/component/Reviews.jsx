import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation, useOutletContext, useParams ,useSearchParams } from 'react-router-dom'
import outils from "../../public/outils"
import star from "../../public/favourite.png"


export default function Reviews() {
  // const outils = useLoaderData();
  const params = useParams()
  const [searchParams, setSearchParmas] = useSearchParams()

  const location = useLocation()
  console.log(location)
  const information = useOutletContext()
  console.log(information)
  const [outils,setOutils]=useState([...information])
  const [loading, setLoading] = useState(true)
  let typeMachine = searchParams.get("gender")
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("../../public/outils.json");
  //     const data = await response.json();
  //     setOutils(data);
  //     setLoading(false)
  //   };
  //   fetchData();
  // }, [location.pathname,params]);
  // const [reviews, setReviews] = useState([...outils[params.id].reviews])
  // console.log(reviews)
  return (
    <>
      {outils ?
      (    <div className='reviews'>
        <div className="container p-5 grid gap-10 items-center grid-cols-1 min-[900px]:grid-cols-[1fr,1fr]">
          <div>
            <h2 className='mb-3 text-xl font-medium'>Costumer Reviews:</h2>
          <div className="grid gap-7 grid-cols-1  min-[700px]:grid-cols-2">
          {[...outils][0][typeMachine][params.id].reviews.map((item,index) =>
            <>
              <div  id={index} className={`col-${index} p-3 bg-white rounded-2xl border-solid border-[2px]  -border--main-color`}>
                <div className='flex  justify-between'>
                  <span className='flex gap-2 items-center'>
                    <img className='w-11 ' src={item.img} alt="" />
                    <span>
                      <p className='font-medium text-medium '>{item.name}</p>
                      <p className='text-sm text-[#777]'>{item.username}</p>
                    </span>
                  </span>
                  <span className='flex flex-col-reverse items-center mt-[-20px] gap-1'>{item.rate} <img className='w-5' src={star} alt="" /></span>
                </div>
                <p className='text-[15.5px] leading-6 py-3 text-center text-[#444]'>{item.opinion}</p>
                <span className='text-[15px] '>Posted On: <span className='text-[#444]'>{item.reviewDate}</span> </span>
              </div>
            </>
        )}
  </div>
  </div>
          <div className='add-Review'>
            <h2 className='mb-3 text-xl font-medium'>Add Your Reviews</h2>
            <div className='flex flex-col justify-start  items-center min-[900px]:flex-row  min-[900px]:gap-10'>
              <h2 className='text-medium font-medium'>Your Rating <span className='-text--main-color'>*</span> </h2>
              <ul className=" flex justify-start items-center gap-2 py-2 -text--main-color">
            <li>
              <i className="text-2xl fa-regular fa-star "></i>
            </li>
            <li>
             <i className="text-2xl fa-regular fa-star"></i>
            </li>
            <li>
              <i className="text-2xl fa-regular fa-star"></i>
            </li>
            <li>
             <i className="text-2xl fa-regular fa-star"></i>
            </li>
            <li>
              <i className="text-2xl fa-regular fa-star"></i>
                </li>
                </ul>
            </div>
            <form action=""> 
              <label htmlFor="name flex gap-5">
                <div className='flex py-5  flex-col items-center pt-3 min-[900px]:flex-row  min-[900px]:justify-between   gap-3'>
                  <h1 className='text-medium font-medium'>Your Name <span className='-text--main-color ' >*</span></h1>
                <input className=' border-solid border-[2px] -border--main-color w-full min-[900px]:w-[75%] p-3 rounded-2xl outline-none placeholder:text-sm' placeholder='Write your nickname...' type="text" name='name'/>
               </div>
              </label>
              <label htmlFor="name py-5 flex gap-5">
                <div className='flex flex-col items-center pt-3 min-[900px]:flex-row  min-[900px]:justify-between min-[900px]:items-start gap-3'>
                  <h1 className='text-medium font-medium'>Your Review <span className='-text--main-color' >*</span></h1>
                <textarea className='border-solid border-[2px] h-60 -border--main-color w-full min-[900px]:w-[75%] resize-none  p-3 rounded-2xl outline-none placeholder:text-sm' placeholder='Write your review...' type="text" name='name'/>
               </div>
              </label>
              <button className=" outline-none overflow-hidden bg-[#000] p-4 w-[200px] text-white  rounded-full mt-[40px] block m-auto
                 relative bottom-[3px] 
                   hover:text-white transition min-[900px]:ml-auto min-[900px]:mr-[100px]  duration-300 before:absolute 
                     before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
                   before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full ">
            <span className="  relative z-10 transition-colors duration-300 ">Submit Review</span>
          </button>
            </form>
          </div>
  </div>
      </div>):""}
    </>
  )
}
