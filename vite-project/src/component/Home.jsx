// import React, { useState } from 'react'
import AdsThree from "./AdsThree";
import AdsTwo from "./AdsTwo";
import Features from "./Features";
import Footer from "./Footer";
// import NavBar from "./NavBar";
import Newsletter from "./Newsletter";
import OnSaleProducts from "./OnSaleProducts";
import Offer from "./Offer";
import Slider from "./Slider";
import BestSells from "./BestSells";
import SeeRecently from "./SeeRecently";
export default function Home() {
  return (
    <>
      <Slider />
      <Features />
      <AdsTwo />
      <OnSaleProducts />
      <AdsThree />
      <Offer/>
      <AdsTwo />
      <BestSells/>
      <AdsThree />
      <SeeRecently/>
      <Newsletter />
    </>
  );
}
