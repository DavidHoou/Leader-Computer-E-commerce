import newsletter from "../../public/newsletter.png";
export default function Newsletter() {
  return (
    <div className="newsletter bg-white">
      <div className="container p-5   flex items-center flex-col justify-center min-[900px]:flex-row min-[900px]:justify-between min-[900px]:w-[85%]">
        <div className="flex justify-center items-center gap-7 ">
          <img className="w-20" src={newsletter} alt="" />
          <div className="email-sing-up">
            <h1 className="text-xl font-semibold">Sign up to newsletter</h1>
            <p className="text-sm text-[#777] py-1 ">
              Get email updates about our last shops....and receive
            </p>
            <span>$30 Coupon for First Shopping</span>
          </div>
        </div>
        <form className="send overflow-hidden my-5 border-solid -border--main-color border-2 no-underline   rounded-md flex justify-between items-center" action="">
          <input className="p-3 w-full min-[1000px]:w-[350px] min-[1000px]:px-4  focus:outline-none placeholder:text-sm placeholder:text-[#777]" type="text" placeholder="Enter your email here" />
          <button className="p-3 min-[1000px]:py-4 -bg--main-color  text-white h-[120%]  ">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
