import leader from "../../public/leader.svg"
import masterCard from "../../public/masterCard.png"
import visa from "../../public/visa.png"
import baridimob from "../../public/Baridiweb-logo.png"
import ccp from "../../public/ccp.png"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
      <div className="footer bg-black">
          <div className="container min-[900px]:w-[85%]">
        <div className="links grid grid-cols-1 min-[500px]:grid-cols-[2fr,1fr] justify-between gap-x-8  min-[1000px]:grid-cols-[2fr,1fr,1fr,1fr] p-5">
        <div className="first-col flex items-center text-left flex-col min-[500px]:items-start ">
          <img src={leader} className="w-3/4 -ml-2" alt="" />
          <div className="contact flex justify-center items-center gap-5 py-5 ">
            <i className="fa-solid fa-headset text-[50px] text-white"></i>
            <span>
            <h2 className="text-white text-xl ">Hotline Free 24/24</h2>
            <h2 className="-text--main-color text-xl">(+213) 123 456 789</h2>
            {/* <h2 className="text-[teal] text-xl">(+213) 699 783 223</h2> */}
             </span>
          </div>
          <p className="text-[#ddd] pb-1">Address: Belghanem Street, Ghardaia, Algeria</p>
          <p className="text-[#ddd] ">Email: LeaderComputer47@yahoo.com</p>
          {/* <p className="text-[#ddd] ">Email: leadercomputer47@yahoo.com</p> */}
        </div>
        <div className="second-col text-center min-[500px]:text-start ">
          <h1 className="mt-6 mb-2 text-xl text-white">FAQ & Help</h1>
          <ul>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">F.A.Q's</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Ordering Tracking</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Contacts</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Events</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Help Center</li>
          </ul>
        </div>
        <div className="second-col text-center min-[500px]:text-start ">
          <h1 className="mt-6 mb-2 text-xl text-white">Shipping & Delivery</h1>
          <ul>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Delivery information</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Discount</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Payment& Shipping</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Estimated Delivery Time</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Shipping Guide</li>
          </ul>
        </div>
        <div className="second-col text-center min-[500px]:text-start ">
          <h1 className="mt-6 mb-2 text-xl text-white">Information</h1>
          <ul>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Popular</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Our Services</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Your Account</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color mb-1">Privacy Policy</li>
            <li className="text-gray-400 transition-all duration-500 hover:pl-1 cursor-pointer hover:-text--main-color ">Terms & Condition</li>
          </ul>
        </div>
        </div>
          </div>
          <div className="copyright -bg--main-color p-2">
        <div className="container w-full min-[900px]:w-[85%] flex flex-col-reverse items-center  min-[700px]:flex-row  min-[700px]:justify-between">
        <p className="text-black p-2 text-lg">Copyright &copy; <Link to={"/"} className="text-white">Leader.</Link> all rights reserved</p>
          <ul className="flex items-center gap-3 px-20  w-full min-[700px]:w-fit justify-center">
         <li className="w-14  "><img className="cursor-pointer  grayscale-0 transition duration-300 hover:grayscale block m-auto " src={baridimob} alt="" /></li>
          <li className="w-12"><img  className="cursor-pointer  grayscale-0 transition duration-300 hover:grayscale block m-auto   " src={visa} alt="" /></li>
            <li className="w-16"><img className="cursor-pointer grayscale-0 transition duration-300 hover:grayscale  block m-auto   " src={masterCard} alt="" /></li>
          <li className=" w-10 "><img className="cursor-pointer grayscale-0 transition duration-300 hover:grayscale w-[50px] block m-auto   " src={ccp} alt="" /></li>
          </ul>
          
          </div>
        </div>
    </div>
  )
}
