import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData, useLocation, useParams,useSearchParams} from "react-router-dom";
import { Link as ReactLink} from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


export default function PrdouctDetails() {
  // const outils = useLoaderData();
  const params = useParams();
  const [searchParams, setSearchParmas] = useSearchParams()

  const location = useLocation();
  console.log(location);
  const [loading, setLoading] = useState(true);
  const [product, SetProduct] = useState([]);
  const [elements, setElement] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../public/outils.json");
      const data = await response.json();
      SetProduct(data);
      setLoading(false);
    };
    fetchData();
  }, [location.pathname, params.id]);
  // console.log(product)
  // console.log(product)
  // const [nav,setNav]=useState({tab1:{id:0,name:"FICH TECHNIQUE"},tab2:{id:0,name:"REVIEWS"}})
  // function navActive(e) {
  //   setNav(prevNav => (prevNav.map(item => ({ ...item, isActive: false }))))
  //   setNav(prevNav => (prevNav.map(item => {item.id===e.event.target.id?item.isActive:true })))
  // }
  // console.log(product[params.id].mainImg)
  // console.log(product[params.id].relatedImg)
  // console.log(params)
  function changeImg(event) {
    // console.log(document.querySelector(".main-img").src)
    document.querySelector(".main-img").src = event.target.src;
    let elements = document.querySelectorAll(".relatedImg img");
    for (let i = 0; i < elements.length; ++i) {
      console.log(elements[i].classList);
      elements[i].classList.remove("activeImg");
    }
    event.target.classList.add("activeImg");
  }
  let typeMachine = searchParams.get("gender")
  product.length > 0 ? console.log([...product][0][typeMachine]) : "there no outils"
  

      function addToCart(item) {
        let additem = JSON.stringify(item)
        localStorage.setItem(item.id, additem)
    
    }
  return (
    <>
      {loading ?
        <div className="container h-[100vh] bg-white my-5 flex items-center justify-center min-[1500px]:w-[80%]">
          <div className="loader p-5"></div>
        </div>
        :
        (<div className="detailsProduct my-5 ">
      <div className="container min-[1500px]:w-[85%]">
        <div className="backLinks flex  gap-2 bg-white w-fit ">
          <ReactLink to={"/allProducts"} className="p-3 ">AllProducts <span className="ml-1 -text--main-color"><i className="fa-solid fa-chevron-right "></i></span></ReactLink>
          <ReactLink to={`..${location.state? `?${location.state.search}` :""}`} relative="path" state={{search:searchParams.toString()}} className="p-3">{product.length>0?[...product][0][typeMachine][params.id].machine:""} <span className="ml-1 -text--main-color">&gt;</span></ReactLink>
          <ReactLink to={".."} className="p-3">Product Deatils <span className="ml-1 -text--main-color">&gt;</span></ReactLink>
        </div>
        <div className="preview p-5 items-center bg-white my-5  grid gap-10 border-2 grid-cols-1 min-[900px]:grid-cols-[1fr,1fr] min-[1200px]:grid-cols-[1fr,2fr]">
          <div className="details-imgs py-4 px-2  m-auto ">
            <div className=" h-[300px]">
              <img
                className="main-img  w-full"
                    src={[...product][0][typeMachine][params.id].mainImg}
                alt="main-img"
              />
            </div>
            <div className="flex gap-3 mt-8 items-center justify-center">
              {[...product][0][typeMachine][params.id].relatedImg.map((srcImg) => ( 
                <div
                  onClick={(event) => changeImg(event)}
                  className="relatedImg border-solid -border--thin border-[#ddd] overflow-hidden"
                >
                  <img className="w-20  cursor-pointer  " src={srcImg} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="info p-5 max-[900px]:text-center">
            {/* <div>{`/allProducts/field${location?`?${location.state.search}` :""}`}</div> */}
            <h1 className="text-2xl font-medium">{[...product][0][typeMachine][params.id].name}</h1>
            <div className="review pt-1 pb-3 flex gap-5 max-[900px]:justify-center items-center">
              <ul className="rating flex justify-start items-center gap-2 py-1 -text--main-color">
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
              <ScrollLink
                to="detailsInfo"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1400}
                onClick={() => {
                  document.querySelector(".fichTechnique").click();
                }}
                className=" cursor-pointer border-solid -border-r--thin border-[#ddd] pr-4 transition-all duration-300 hover:-text--main-color"
                
                  >
                FichTechnique
              </ScrollLink>
              <ScrollLink
                to="detailsInfo"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1400}
                onClick={() => {
                  location ? console.log(location) : "";
                  document.querySelector(".reviews").click()
                }}
                className="transition-all cursor-pointer duration-300 hover:-text--main-color"
              >
               + Add Review
              </ScrollLink>
            </div>
            <span className="price font-sm flex max-[900px]:justify-center items-center  text-2xl gap-5 pb-3">
              <span className="font-medium -text--main-color">
                {[...product][0][typeMachine][params.id].price}DA
              </span>
              <span className="line-through font-medium  text-[#777]">
                {[...product][0][typeMachine][params.id].old_price
                  ? [...product][0][typeMachine][params.id].old_price + "DA"
                  : ""}
              </span>
              <span className="-text--main-color text-sm bg-red-300 px-2 py-1">
                {[...product][0][typeMachine][params.id].sold}%
              </span>
            </span>
            <span className="text-sm">
              Availability:{" "}
              <span className="-text--main-color">
                {[...product][0][typeMachine][params.id].availability}
              </span>
            </span>
            <span className="block text-sm">
              SKU:{" "}
              <span className="-text--main-color">LE018CL0JYLZGNAFAMZ</span>
            </span>
            <p className="text-[#777] leading-7 pt-6">
              Typi non habent claritatem insitam, est usus legentis in iis qui
              facit eorum claritatem. Investigationes demonstraverunt lectores
              legere me lius quod ii legunt saepius. Claritas est etiam
              processus. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when anunknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>
            <h2 className="pt-5 text-xl pb-2 max-[900px]:text-center">
              <span className="font-medium">Hurry Up!</span> Only 98 products
              left in stock
            </h2>
            <div className="progress-bar w-[55%] min-[900px]:w-full h-2  rounded-full mt-2 max-[900px]:mt-1 -bg--main-color max-[900px]:m-auto"></div>
            <div className="flex items-center max-[900px]:justify-center   gap-3 my-8">
              <div className="flex justify-around items-center  w-[180px] add-product border-solid  -border--thin border-[#777] rounded-full p-3 ">
                <button
                  onClick={() => setElement(elements + 1)}
                  className="text-xl font-semibold"
                >
                  +
                </button>
                <span className="text-xl font-medium">{elements}</span>
                <button
                  onClick={() => elements > 0 && setElement(elements - 1)}
                  className="text-xl font-semibold"
                >
                  -
                </button>
              </div>
              <button onClick={()=>addToCart([...product][0][typeMachine][params.id])}
                className=" outline-none overflow-hidden bg-[#000] p-4 w-[200px] text-white  rounded-full  block 
               relative bottom-[3px] 
                 hover:text-white transition   duration-300 before:absolute 
                   before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
                 before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full "
              >
                <span className="  relative z-10 transition-colors duration-300 ">
                  Add to Cart
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="details z-100 bg-white p-5">
          <div className="previewNav flex items-center gap-5 text-xl font-medium">
            <NavLink
              className={({ isActive }) => `fichTechnique pb-1 ${isActive ? `linked` : ""}`}
                  to={`fichTechnique${typeMachine?`?gender=${typeMachine}`:""}`}
                  state={{search:searchParams.toString()}}
            >
              FICH TECHNIQUE
            </NavLink>
            <NavLink
              className={({ isActive }) => `reviews pb-1 ${isActive ? `linked` : ""}`}
                  to={`reviews${typeMachine?`?gender=${typeMachine}`:""}`}
                  state={{search:searchParams.toString()}}

            >
              REVIEWS
            </NavLink>
          </div>
          <div id="detailsInfo" key={location.pathname} className=" line h-[1px] -z-10 w-full bg-[#ddd]"></div>
          <Outlet  context={product}/>
        </div>
      </div>
    </div>)}
    </>
  );
}
