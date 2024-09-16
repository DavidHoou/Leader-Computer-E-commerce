// import ReactDOM from "react-dom/client";
import React, { useEffect } from 'react';
import Features from "./component/Features";
import { Link, BrowserRouter,Routes,Route, useLocation, createBrowserRouter, createRoutesFromElements, RouterProvider , Outlet} from "react-router-dom"


import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Newsletter from "./component/Newsletter";
import OnSaleProducts from "./component/OnSaleProducts";
import Slider from "./component/Slider";
import "./index.css"
import Home from './component/Home';
import Layout from './layout/Layout';
import PrdouctDetails from './component/PrdouctDetails';
import AllProducts from './component/AllProducts';
import About from './component/About';
import Contact from './component/Contact';
import FichTechnique  from './component/FichTechnique';
import Reviews from './component/Reviews';
import Impriment from "./component/Imprimante"
import Field from "./component/Field";
import Error from './component/Error';
import Login from './component/Login';
import SingUp from './component/SingUp';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import AutoScroll from './component/AutoScroll';


export default function App() {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   window.scrollTo({top:0,behavior:'smooth'})
  // },[pathname])
  const router = createBrowserRouter(createRoutesFromElements(
  
    
    <Route element={<Layout />}> 
    <Route path='/'  element={<Home/>} errorElement={<Error/>}/>
    <Route path='allProducts' element={<AllProducts />} errorElement={<Error/>} />
      <Route path='/allProducts/field'  element={<Field />}  errorElement={<Error/>} />
           <Route  path='/allProducts/field/:id'  element={ <PrdouctDetails/>} errorElement={<Error/>} >
           <Route  index element={<FichTechnique/>} />
                <Route  path='fichTechnique' element={<FichTechnique/>} />
        <Route path='reviews' element={<Reviews />} />
           </Route>
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='login' element={<Login/>} />
    <Route path='singUp' element={<SingUp/>} />
    <Route path='cart' element={<Cart/>} />
    <Route path='checkout' element={<Checkout/>} />
  </Route>
  ))
  return (
    <RouterProvider router={router} >
        <AutoScroll />
    </RouterProvider >
     


  )
 }

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>)
