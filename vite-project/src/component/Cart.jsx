import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  // localStorage.clear()
  // const [elements, setElement] = useState(0);
  const [price, setPrice] = useState("");
  const [totalQ,setTotalQ]=useState("")
  const [addItems, setAddItems] = useState([]);
  const [result,setResult]=useState("there is no data there")
  const [isCouponApplied,setIsCouponApplied]=useState(false)
  const [message,setMessage]=useState("")
  useEffect(() => {
    let addedElements = [];
    let pricItems = {};
    let qunantity = {};
  for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    let parsedValue = JSON.parse(value);
    addedElements.push(parsedValue)
    pricItems[parsedValue.id]= 0
    qunantity[parsedValue.id]= 0
    }
    setAddItems(addedElements)
    setPrice(pricItems)
    setTotalQ(qunantity)
  }, [])
  console.log(price)
  // console.log(addItems)
  function handleIncClick(item) {
    // console.log(item.price)
    setPrice((prevData) => ({ ...prevData, [item.id]: prevData[item.id] + 1 }))
    setTotalQ((preValue) => ({ ...preValue, [item.id]: parseFloat(item.price.replace(/,/g, "")) * (price[item.id] + 1) }))
    // console.log(parseFloat(item.price.replace(/,/g, "")))
    // setResult((preValue)=>preValue + parseFloat(item.price.replace(/,/g, "")))
  }
  function handleDecClick(item) {
    setTotalQ((preValue)=>({...preValue,[item.id]:parseFloat(item.price.replace(/,/g,"")) * (price[item.id]-1) }))
    setPrice((prevData) => ({ ...prevData, [item.id]: prevData[item.id] - 1 }))
    // setResult((preValue)=>preValue - parseFloat(item.price.replace(/,/g, "")))
  }
  // console.log(price)
  //  setAddItems(addedtems)
  // console.log(typeof(totalQ[`total-${0}`]))
  // console.log(parseFloat(totalQ[`total-${0}`].replace(/,/g,"")) * price[`item-${0}`])
 let operation= ()=> {
    let total = 0;
   // for (let i = 0; i < Object.keys(totalQ).length; ++i){
   for (const key in totalQ) {
      total += totalQ[key]
    }
    return total;
  }
  function handleCoupon() {
    const coupField = document.querySelector(".coupon-field").value;
    if (coupField && coupField === "LEADER50") {
      setMessage("the Coupon code has been applied successfully.")
      setIsCouponApplied(true)
    } else {
      setMessage("Invalid coupon code")
    } 
  }
  // console.log(localStorage.removeItem()
  function removeElement(item) {
    localStorage.removeItem(item.id)
    // location.reload()
    setAddItems((prevItems) => prevItems.filter((element => item.id !== element.id)))
    price[item.id] && handleDecClick(item);
    console.log(addItems)
  }
  let finalResult = operation() > 0 ? (isCouponApplied ? ((operation() + 500) * 0.5) : (operation() + 500)) : 0;
  return (
    <div className="cart ">
      <div className="container  w-[92%] bg-white p-4 pb-16  my-5 min-[900px]:w-[90%] min-[1500px]:w-[85%]">
        {addItems.length > 0 ? (
          <>
          <table className="w-full">
          <thead>
            <tr>
              <th>image</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <>
              {addItems.map((item) => (  
              
            <tr key={item.id} className="text-center">
                          <td>
        <Link to={`allProducts/field/${item.id}/${item.machine}`}>
                              <img
                                      src={`${item.mainImg}`}
                                  alt=""
                                  className="w-[150px] m-auto"
                />
                              </Link>
   
              </td>
              <td>
                <Link to={`allProducts/field/${item.id}/${item.machine}`} className="w-[250px] block m-auto transition-all duration-300 hover:-text--main-color cursor-pointer">{item.name}</Link>
              </td>
              <td>{parseFloat(item.price.replace(/,/g,""))}</td>
              <td>
                <div className="flex justify-around items-center  w-[150px] add-product border-solid m-auto -border--thin border-[#777] rounded-full p-2 ">
                  <button
                    onClick={() => handleIncClick(item)}
                    className="text-xl font-semibold"
                  >
                    +
                  </button>
                  <span className="text-xl font-medium">{price[item.id]}</span>
                  <button
                    onClick={() =>price[item.id] &&  handleDecClick(item)}
                    className="text-xl font-semibold"
                  >
                    -
                  </button>
                </div>
                          </td>
                          <td>{`${totalQ[item.id]}DA`}</td>
                          <td><i onClick={()=>removeElement(item)} className="fa-solid fa-trash-can transition-all duration-300 hover:-text--main-color cursor-pointer"></i></td>
            </tr>
            ))}
</>
          </tbody>
          </table>
          <div className="totaling mt-10 flex justify-around items-center">
          <div className="totalprice">
              <h1 className="mb-4 text-2xl font-medium">Cart Totals</h1>
              <table>
                  <tr>
                      <td className="p-3 w-[400px]">SubTotal:</td>
                      <td className="p-3 ">{operation()} DA</td>
                  </tr>
                  <tr>
                      <td className="p-3 w-[400px]">Total</td>
        <td className="p-3 ">{finalResult} DA</td>
                  </tr>
    </table>
    {isCouponApplied ? (
   <div className="mt-2 ml-2 text-sm -text--main-color">Disscount of 50% has been applied successfully</div>
      
    ):""}
              <Link to={"/checkout"} state={{items:addItems,price:price,total:totalQ,final:operation(),finalResult:finalResult,isCouponApplied:isCouponApplied}}
        className=" outline-none overflow-hidden bg-[#000] p-3 w-[250px] text-white  rounded-full  block 
       relative bottom-[3px] text-sm
         hover:text-white transition mt-6   duration-300 before:absolute 
           before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
         before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full "
      >
        <span className="  relative z-10 transition-colors duration-300 ">
          PROCCED TO CHECKOUT
        </span>
      </Link>
          </div>
          <div className="coupon  ">
              <form action="" className="">
              <input className="coupon-field p-4 w-full min-[1000px]:w-[200px]  focus:outline-none rounded-full placeholder:text-sm placeholder:text-[#777] border-solid border-[#333] border-[1px] " type="text" placeholder="cupon code" name='cupon' />
      <button 
        type="button"
        onClick={() => handleCoupon()}
        disabled={isCouponApplied}
        className=" cursor-pointer outline-none overflow-hidden bg-[#000] p-3 w-[150px] text-white  rounded-full  ml-4 inline-block 
       relative bottom-[3px] text-sm
         hover:text-white transition mt-6  duration-300 before:absolute 
           before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
         before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full "
      >
        <span className="  relative z-10 transition-colors duration-300 ">
          Apply Coupon
        </span>

      </button>
   <div className="mt-2 ml-2 text-sm -text--main-color">{message}</div>
              </form>
          </div>
            </div>
            </>) : (
            <div className="flex border-solid border-2 -border--main-color rounded-md justify-center gap-2 flex-col py-28 items-center">
              <img src="../../public/emptyCart.png" className="w-[400px]" alt="" />
              <h1 className="text-[#333] my-2 font-medium text-2xl font-['Bungee_Tint'] ">Your Cart is Empty!! Add items to Show</h1>
              {/* <h1 className="text-[#333] font-medium text-2xl font-['Bungee_Tint']"></h1> */}
              <button 
  
        className=" cursor-pointer outline-none overflow-hidden bg-[#000] px-5 py-4 w-fit text-white  rounded-full  ml-4 inline-block 
       relative bottom-[3px] 
         hover:text-white transition mt-6 text-center  duration-300 before:absolute 
           before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
         before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full "
      >
        <span className=" text-center relative z-10 transition-colors duration-300 ">
        Start Shopping
        </span>

      </button>
          </div>
              )}

      </div>
    </div>
  );
}
