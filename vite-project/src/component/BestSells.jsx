import React from "react";
import { Link } from "react-router-dom";
import data from "../../public/outils.json";
import { useEffect, useState } from "react";
export default function BestSells() {
  // localStorage.clear()
  let laptopArray = [...[...data][0].laptop];
  let imprimentsArray = [...[...data][0].impriments];
  let items = laptopArray.concat(imprimentsArray);
  let elements = [];
  for (let i = 0; elements.length < 6; ++i) {
    elements.push(items[Math.floor(Math.random() * items.length)]);
    elements = [...new Set(elements)];
  }
  console.log(elements);
  const [state, setState] = useState(elements);
  // useEffect(() => {
  //   fetch("../../public/items.json").then(res=>res.json()).then(data=>console.log(data))
  // },[])
  console.log(state);

  // console.log(elements)
  function addToCart(item) {
    let additem = JSON.stringify(item);
    localStorage.setItem(item.id, additem);
  }
  return (
    <div className="bestSells bg-[#fcc839] py-7">

      <div
        className="container w-[92%] mt-5 mb-12   
   min-[1500px]:w-[85%] "
          >
                    <div className="title py-5">
        <p className="flex gap-x-2 text-2xl border-b-thin border-[#ddd] border-solid">
          <h3 className="font-medium underline underline-offset-4 -decoration--main-color decoration-2">
            Best Selles
          </h3>{" "}
          Product
        </p>
      </div>
        <div 
          className="grid 
gap-5  grid-cols-[1fr] min-[900]:grid-col-2 min-[1024px]:grid-cols-3 "
        >
          {state.map((item) => (
            <>
              <div key={item.id}
                className={`item w-full  px-4 py-2 relative rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  mx-auto bg-white flex items-center gap-5  overflow-hidden`}
              >
                <img
                  className="product-imgOne   w-[100px] "
                  src={item.mainImg}
                  alt=""
                />

                <img
                  className="product-imgTwo absolute  w-[100px]"
                  src={item.relatedImg[2]}
                  alt=""
                />

                <div>
                  <h1 className="  pt-5 text-sm h-[60px] overflow-hidden text-start  px-2 ">
                    {item.name}
                  </h1>
                  <ul className=" flex justify-start items-center gap-2 py-1 -text--main-color">
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
                  <span className=" flex justify-start items-center  text-sm gap-5 pb-3">
                    <span className="-text--main-color">{item.price} DA</span>
                    <span className="line-through  text-[#777]">
                      {item.old_price ? item.old_price + "DA" : ""}
                    </span>
                  </span>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
