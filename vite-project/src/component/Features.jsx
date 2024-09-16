
import featOne from "../imgs/startup.svg";
import featTwo from "../imgs/currency.svg";
import featFour from "../imgs/money.svg";
import featThree from "../imgs/operator.svg";

export default function Features() {
  return (
    <div className="features bg-white ">
      <div className="container min-[1500px]:w-[85%]  p-4  ">
              <div className="Feats   grid grid-cols-1  min-[480px]:grid-cols-[1fr,1fr] min-[780px]:grid-cols-[1fr,1fr,1fr] min-[1280px]:grid-cols-[1fr,1fr,1fr,1fr] ">
              <div className="feat flex justify-start items-center pl-4 gap-4 p-4 -border-b--thin border-[#eee]  min-[480px]:border-none">
            <img className="w-12 -fill--main-color" src={featOne} alt="" />
          <span className="text-ms">
            <h4 className="font-semibold">Free Shipping</h4>
            <p className="text-[#777] text-base">Free Shipping One All Order</p>
          </span>
        </div>
        <div className="feat pl-4 flex justify-start items-center gap-4 p-2 -border-b--thin border-[#eee] min-[480px]:border-none">
          <img className="w-12" src={featTwo} alt="" />
          <span>
            <h4 className="font-semibold">Money Guarantee</h4>
            <p className="text-[#777]">30 Days Money Back Guarantee</p>
          </span>
        </div>
        <div className="feat pl-4 flex justify-start items-center gap-4 p-2 -border-b--thin min-[480px]:border-none">
          <img className="w-12" src={featThree} alt="" />
          <span>
            <h4 className="font-semibold">Online Supporte 24/7</h4>
            <p className="text-[#777]">Thechnical Support Stand By</p>
          </span>
        </div>
        <div className="feat pl-4 flex justify-start items-center gap-4 p-3 ">
          <img className="w-12" src={featFour} alt="" />
          <span>
            <h4 className="font-semibold">Secure Payment</h4>
            <p className="text-[#777]">All Payment Method Are Accepted</p>
          </span>
        </div>
       </div>
      </div>
    </div>
  );
}
