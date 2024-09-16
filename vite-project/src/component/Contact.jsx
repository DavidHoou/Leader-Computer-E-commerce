import React from 'react'
export default function Contact() {
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
                <span><span className='font-medium text-lg'>Message sent!</span> Stay tuned we will be on touched</span>
                <span onClick={()=>handleClick()} className='text-2xl cursor-pointer transition-all duration-300 hover:text-black'>&times;</span>
            </div>

    <div className='contact'>
      <div className="container   bg-white p-5 w-[92%]  my-5 min-[900px]:w-[90%] min-[1500px]:w-[85%] ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.5361626977474!2d3.6801960753233254!3d32.48509599884793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x126427c9332c4cfd%3A0xfabc1b169254fc51!2sLEADER%20COMPUTER%2047!5e0!3m2!1sen!2sdz!4v1725618625475!5m2!1sen!2sdz" className='border-none w-full h-[600px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div className="contactInfo py-4 grid gap-9 grid-cols-1 min-[768px]:grid-cols-[1fr,2fr]">
          <div>
            <h1 className='text-xl p-2 font-medium border-solid  border-b-2 border-[#ddd] relative before:absolute before:w-[50px] before:h-[2px] before:-bottom-[2px] before:left-0 before:-bg--main-color'>Our Main Office</h1>
            <div className="first-col flex items-center text-left flex-col min-[500px]:items-start ">
          <div className="contact flex justify-center items-center gap-5 py-5 ">
            <i className="fa-solid fa-headset text-[50px] -text--main-color"></i>
            <span>
            <h2 className=" text-xl ">Hotline Free 24/24</h2>
            <h2 className="-text--main-color text-xl">(+213) 699 783 223</h2>
            {/* <h2 className="text-[teal] text-xl">(+213) 699 783 223</h2> */}
             </span>
          </div>
          <p className="  pb-3"><span className='font-medium'>Address:</span> Belghanem Street, Ghardaia, Algeria</p>
          <p className="  pb-3"><span className='font-medium'>Email:</span>  Leadercomputer47@yahoo.com</p>
          <p className="  pb-3"><span className='font-medium'>Fax:</span>  
(+213) 123 456 7890 - (+213) 123 456 7891
</p>
          <p className="  pb-3"><span className='font-medium'>Business Phone:</span>  0699-78-32-23</p>
              <div className='flex items-center gap-4'>
                <h4>Social Share:</h4>
                <ul className='flex gap-3'>
                  <a href="https://www.facebook.com/LCom2017/" target='_blank' className='p-4 w-8 h-8 cursor-pointer hover:-bg--main-color transition-all  hover:text-white hover:border-transparent flex justify-center items-center  border-solid -border--thin border-[#777] rounded-full'><i class="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.facebook.com/LCom2017/" target='_blank' className='p-4 w-8 h-8 cursor-pointer hover:-bg--main-color transition-all  hover:text-white hover:border-transparent flex justify-center items-center  border-solid -border--thin border-[#777] rounded-full'><i class="fa-brands fa-instagram"></i></a>
      

                </ul>
          </div>
        </div>
          </div>
          <div>
            <h1 className='text-xl p-2 font-medium border-solid  border-b-2 border-[#ddd] relative before:absolute before:w-[50px] before:h-[2px] before:-bottom-[2px] before:left-0 before:-bg--main-color'>Contact Us</h1>
            <form className='my-5' action="">
                      <div className='min-[1300px]:flex min-[130px]:gap-4 overflow-hidden'>
                      <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="Name">Name <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='Name' placeholder='Name' />
                     </div>
                      <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="Email">Email <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='Email' placeholder='Email' />
                     </div>
                     </div>
                     <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="PhoneNumber">Phone Number <span className='-text--main-color'>*</span></label>
                          <input className='p-3 border-solid -border--thin border-[#777] rounded-md' type="text" id='PhoneNumber' placeholder='Phone Number' />
                     </div>
                     <div className='flex flex-col w-full gap-1 my-3 '>
                          <label className='ml-1 ' htmlFor="sendMessage">What's on your mind <span className='-text--main-color'>*</span></label>
                          <textarea className='p-3 border-solid h-[200px] -border--thin border-[#777] rounded-md' type="text" id='sendMessage' placeholder="write your message" />
              </div>
              <button type='button' onClick={alertHandle}
        className=" outline-none overflow-hidden bg-[#000] py-3 px-5  max-[768px]:m-auto  text-white  rounded-full  block 
       relative bottom-[3px] 
         hover:text-white transition mt-7  duration-300 before:absolute 
           before:w-[120%] before:h-full before:left-[-10%] before:transition before:duration-300
         before:top-0 before:skew-x-[30deg] before:-bg--main-color hover:before:translate-x-full "
      >
        <span className="  relative z-10 transition-colors duration-300 " >
         Send Message
        </span>
      </button>
                  </form>
          </div>
        </div>
      </div>
      </div>
      </>
  )
}
