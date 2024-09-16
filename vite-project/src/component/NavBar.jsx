
import { useEffect, useState } from "react";
import {Link } from "react-router-dom"
export default function NavBar() {
  const [addedItems, setAddItems] = useState("")
  let addedElements = [];

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      let parsedValue = JSON.parse(value);
      addedElements.push(parsedValue)
    }
    setAddItems(addedElements)
  }, [])
  
  function handleDrop(event) {
    let dropdown = document.getElementById(event.target.id);
    event.target.classList.toggle("rotate-90");
        let dropdownContent = dropdown.nextElementSibling;
        if (dropdownContent.classList.contains("h-0")) {
          // dropdownContent.style.display = "none";
          dropdownContent.classList.remove("h-0")
        } else {
          dropdownContent.classList.add("h-0")

        }
      
    }
    
  function hideSideMenu() {
   document.querySelector(".sideMenu").style.marginLeft="-75%"
    document.querySelector(".overlay").style.display="none"
 }
  function showSideMenu() {
   document.querySelector(".sideMenu").style.marginLeft="0%"
    document.querySelector(".overlay").style.display="block"
  }
  document.addEventListener("click", (event) => {
  const  sideMenu =document.querySelector(".sideMenu")
  const  sideIcon =document.querySelector(".sideIcon")
    if (!sideMenu.contains(event.target) && event.target !== sideIcon){
hideSideMenu()
   }
 })
  return (
    <>
      <div className="navBar bg-white">
        <div className="container w-[92%] pt-5 pb-2 bg-white min-[900px]:w-[90%] min-[1500px]:w-[85%] ">

          <header >
            <div className="flex justify-between items-center flex-wrap pb-4 gap-y-6">

           
            <Link to={"/"}><img src="/leader.png" className="w-48" alt=" " /></Link>
            <form
                className="flex search truncate order-3 w-full min-[500px]:w-4/5 m-auto min-[900px]:order-2 min-[900px]:w-1/2 items-center 
              border-2 border-solid border-red-700  
          rounded-lg"
              action=""
            >
              <input
                className="focus:outline-none w-3/4 py-2 pl-2 text-sm"
                type="text"
                placeholder="Search for products..."
              />
              <button className="-bg--main-color w-44 h-12  text-md text-white">
                Search
              </button>
            </form>
            <Link to={"cart"} className="flex gap-x-5  items-center order-2 min-[900px]:order-3">
              <i
                className={`g-white w-12 h-12  relative text-xl fa-solid fa-solid fa-bag-shopping 
            border-solid border-2 border-#777 p-2 rounded-full flex
             items-center justify-center`}
                >
                  <span
    className={`absolute w-5 h-5 -bg--main-color top-0 left-3/4 rounded-full text-white text-[11px] flex justify-center items-center`}
  >
    {addedItems.length}
  </span>
              </i>
              <div className="flex flex-col text-[#777]">
                <span>My Cart:</span>
                <span>542,000 DA</span>
              </div>
              </Link>
              </div>
            <nav className="flex justify-between items-center pt-4  -border-t--thin  border-[#ddd]">
              <span>
                <ul className="hidden min-[900px]:flex items-center  gap-9 text-[18px] ">
                  <li className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px]
                   before:top-[157%] before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full    "><Link to="/">Home</Link></li>
                  <li className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px]
                   before:top-[157%] before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full    "><Link to="allProducts">All Products</Link></li>
                  <li className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px]
                   before:top-[157%] before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full    "><Link to="contact">Contact</Link></li>
                 <li className="relative before:absolute before:bottom-0 before:left-0 before:h-[2px]
                   before:top-[157%] before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full    "><Link to="/">Pages</Link></li>
                </ul>
                <i onClick={()=>showSideMenu()} className="sideIcon fa-solid cursor-pointer fa-bars text-2xl "></i>
                <div className="overlay z-40 fixed top-0 left-0 w-[75%] ml-[-75%]  h-[100vh] bg-slate-900 opacity-75"></div>
                <div className="sideMenu overflow-scroll fixed transition-all duration-300 p-5 z-50 left-0 ml-[-75%] top-0 w-[75%]   h-full bg-[#fef1c7]">
                  <div className="flex gap-16 justify-between pb-2 mb-5 items-center border-solid border-b-[#b8b8b8] -border-b--thin">
                    <Link to={"/"}><img src="/leader.png" className="w-44" alt=" " /></Link>
                  <i onClick={()=>hideSideMenu()} className=" fa-solid  fa-xmark  text-white -bg--main-color hover:bg-black transition-all duration-[.3ms] text-lg p-5 w-5 h-5 flex justify-center items-center rounded-full cursor-pointer"></i>
                  </div>
                  <ul className="sideContent">
                    <li className="item   transition-all duration-300">
                      <Link to={"/"} className="py-2  border-solid -border-b--thin border-[#777] flex  justify-between items-center ">
                        <span className=""><i className="fa-solid fa-house mr-1"></i> Home</span>
                      </Link>
                    </li>
                    <li className="item  relative transition-all duration-300 ">
                      <Link to={"allProducts"} onClick={()=>hideSideMenu()} className="py-3 border-solid -border-b--thin border-[#777] flex justify-between items-center ">
                        <span className="  "> <i class="fa-solid fa-laptop mr-2"></i>Ordinateurs & Périphériques</span>
                      </Link>
                        <i id="one" onClick={(e)=>handleDrop(e)} className={`absolute top-[13px] cursor-pointer text-right right-0 dropdown-btn fa-solid fa-angle-right transition-all duration-300`}></i>
                      <ul className=" h-0 overflow-hidden flex-col sub-menu transition-all duration-300">
                        <li> <Link to={"allProducts"} onClick={()=>hideSideMenu()}
                         className="px-6  py-2 border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Imprimantes</Link></li>
                         <li><Link to={"allProducts"}  onClick={()=>hideSideMenu()}
                          className="px-6  py-2 border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> PC Portable </Link></li>
                        <li><Link to={"allProducts"}  onClick={()=>hideSideMenu()}
                         className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Moniteurs </Link></li>
                        <li><Link to={"allProducts"}   onClick={()=>hideSideMenu()}
                         className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Desktops</Link></li>
                        <li><Link to={"allProducts"}   onClick={()=>hideSideMenu()}
                         className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Solution Réseau</Link></li>
                      </ul>
                    </li>
                    <li className="item  relative transition-all duration-300">
                      <Link to={""} className="py-2 border-solid -border-b--thin border-[#777] flex justify-between items-center ">
                        <span className=""><i onClick={()=>hideSideMenu()} class="fa-solid fa-bolt mr-2"></i>Accessoires d'Ordinateurs</span>
                      </Link>
                        <i id="two" onClick={(e)=>handleDrop(e)} className={` absolute top-[13px] right-0 cursor-pointer dropdown-btn fa-solid fa-angle-right transition-all duration-300`}></i>
                      <ul className=" h-0 overflow-hidden flex-col sub-menu transition-all duration-300">
                      <li> <Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"> <i class="fa-solid fa-angles-right text-xs"></i> Table Laptop</Link></li>
                         <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Logiciels</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Chargeurs</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Sacs & Housses</Link></li>
                      </ul>
                    </li>
                    <li className="item  relative transition-all duration-300">
                      <Link className="py-2 border-solid -border-b--thin border-[#777] flex justify-between items-center ">
                        <span className=""><i  class="fa-solid fa-keyboard mr-2"></i>Accessoires Informatique</span>
                      </Link>
                        <i id="three" onClick={(e)=>handleDrop(e)} className={` absolute top-[13px] right-0 cursor-pointer dropdown-btn fa-solid fa-angle-right transition-all duration-300`}></i>
                      <ul className=" h-0 overflow-hidden flex-col sub-menu transition-all duration-300">
                        <li> <Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"> <i class="fa-solid fa-angles-right text-xs"></i> Claviers</Link></li>
                         <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Tapis de Souris</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Casques</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Clé USB</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Disque Dur Ext</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Claviers/Souris</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Cables</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Adaptateurs</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Gadgets USB</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Encre et Tonner</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Souris & Tapis</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Haut Parleurs</Link></li>
                      </ul>
                    </li>
                    <li className="item  relative transition-all duration-300">
                      <Link className="py-2 border-solid -border-b--thin border-[#777] flex justify-between items-center ">
                        <span className=""><i class="fa-solid fa-bolt mr-2"></i>Composants D'Ordinateurs</span>
                      </Link>
                        <i id="four" onClick={(e)=>handleDrop(e)} className={`absolute top-[13px] right-0 cursor-pointer dropdown-btn fa-solid fa-angle-right transition-all duration-300`}></i>
                      <ul className=" h-0 overflow-hidden flex-col sub-menu transition-all duration-300">
                        <li> <Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"> <i class="fa-solid fa-angles-right text-xs"></i> Alimentations</Link></li>
                         <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Disque Dur Int </Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Refroidissement</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> cartes Son</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Lecteurs Cartes</Link></li>
                        <li><Link className="px-6  py-2  border-solid -border-b--thin border-[#777] w-full block"><i class="fa-solid fa-angles-right text-xs"></i> Mémoire & RAM</Link></li>
                      </ul>
                    </li>

                  </ul>
                </div>
              </span>
              <span className="flex gap-2">
              <Link to={"/Login"} className="flex relative overflow-hidden items-center text-sm gap-x-2 w-fit bg-black text-white rounded-full px-4 py-2
                 hover:text-white transition duration-300 before:absolute 
                   before:w-[150%] before:h-full before:left-[-15%] before:transition before:duration-300
                 before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full ">
               <span className=" relative flex items-center gap-2 z-10 transition-colors duration-300 ">Login <i className="fa-solid fa-right-to-bracket text-lg"></i></span>
               </Link>
              <Link to={"/singUp"} className="flex relative overflow-hidden items-center text-sm gap-x-2 w-fit bg-black text-white rounded-full px-4 py-2
                 hover:text-white transition duration-300 before:absolute 
                   before:w-[150%] before:h-full before:right-[-15%] before:transition before:duration-300
                 before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full ">
               <span className=" relative z-10 flex items-center gap-2 transition-colors duration-300 ">       Sing up<i className="fa-solid fa-user-plus "></i></span>
               </Link>

              </span>
              </nav>
             
          </header>
        </div>
      </div>
    </>
  );
}
