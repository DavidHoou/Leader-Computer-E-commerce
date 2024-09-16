import React from 'react' 
import Ads from "../component/ads"
import laptop from "../../public/pc-laptop.png"
import monitor from "../../public/monitor.png"
import desktop from "../../public/desktops.jpg"
import printer from "../../public/Printers.png"
import router from "../../public/reseau.png"
import tableLaptop from "../../public/table-laptop.jpg"
import logiciels from "../../public/Logiciels.jpg"
import chargeur from "../../public/chargeurs.png"
import sacAdos from "../../public/sacAdos.png"
import SouriseTapis from "../../public/souris-tapis.png"
import claviers from "../../public/claviers.jpg"
import usb from "../../public/cléUsb.png"
import disqueDur from "../../public/DisqueDurExt.png"
import cables from "../../public/Cables.png"
import clavierSouris from "../../public/claviers-Souris.jpg"
import casque from "../../public/Casque.png"
import tapisDeSouris from "../../public/tapis-de-souris.jpg"
import gadgetUSB from "../../public/gadgetsUSB.jpg"
import encreToner from "../../public/encore-toner.png"
import adaptateurs from "../../public/adaptateurs.jpg"
import hautParleurs from '../../public/hautParleurs.jpg'
import alimentation from "../../public/alimentations.jpg"
import disqueDurInt from "../../public/disqueDurInt.png"
import refroidissement from "../../public/refroidissement.jpg"
import carteSon from "../../public/cartesSon.jpg"
import mémoireRAM from "../../public/mémoire-RAM.png"
import lecteursCart from "../../public/LecteursCarts.jpg"
import Havit from "../../public/Havit.png"
import Canon from "../../public/canon.png"
import SanDisk from "../../public/Sandisk.png"
import HP from "../../public/HP.png"
import ASUS from "../../public/ASUS.png"
import Apple from "../../public/Apple-REC.png"
import { Link } from 'react-router-dom'

export default function AllProducts() {
  return (
      <div className="allProduct">
        <div className="container w-[92%]  my-5 min-[900px]:w-[90%] min-[1500px]:w-[85%] ">
        <Ads size={50} width={192} />
        <div className='bg-white rounded-sm my-5'>
          <h1 className='-bg--main-color text-center text-white  py-4 text-lg'>Ordinateurs & Périphériques</h1>
          <div className='grid gap-5 items-center justify-center grid-cols-1 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-6 p-5 '>
            <Link to="/allProducts/field?gender=laptop">
              <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={laptop} alt="PC Laptop" /></div>
              <h3 className='p-3 text-center'>PC Portable </h3>
           </div></Link>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={monitor} alt="Monitor" /></div>
              <h3 className='p-3 text-center'>Moniteurs </h3>
           </div>
           <Link to="/allProducts/field?gender=impriments"><div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={printer} alt="Imprimante" /></div>
              <h3 className='p-3 text-center'>Imprimantes </h3>
           </div></Link>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={desktop} alt="Desktops" /></div>
              <h3 className='p-3 text-center'>Desktops</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={router} alt="Solution Réseau" /></div>
              <h3 className='p-3 text-center'>Solution Réseau</h3>
           </div>
          </div>
        </div>
        <div className='bg-white rounded-sm my-5 '>
          <h1 className='-bg--main-color text-center text-white  py-4 text-lg'>Accessoires d'Ordinateurs</h1>
          <div className='grid gap-5 items-center justify-center grid-cols-1 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-6 p-5 '>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={tableLaptop} alt="Table Laptop" /></div>
              <h3 className='p-3 text-center'>Table Laptop</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={logiciels} alt="Logiciels" /></div>
              <h3 className='p-3 text-center'>Logiciels</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={chargeur} alt="Chargeurs" /></div>
              <h3 className='p-3 text-center'>Chargeurs</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={sacAdos} alt="Sacs & Housses" /></div>
              <h3 className='p-3 text-center'>Sacs & Housses</h3>
           </div>
          </div>
        </div>
        <div className='bg-white rounded-sm my-5 '>
          <h1 className='-bg--main-color text-center text-white  py-4 text-lg'>Accessoires Informatique</h1>
          <div className='grid gap-5 items-center justify-center grid-cols-1 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-6 p-5 '>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={claviers} alt="Sclaviers" /></div>
              <h3 className='p-3 text-center'>Claviers</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={tapisDeSouris} alt="Tapis de Souris" /></div>
              <h3 className='p-3 text-center'>Tapis de Souris</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={casque} alt="Casques" /></div>
              <h3 className='p-3 text-center'>Casques</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={usb} alt="Clé USB" /></div>
              <h3 className='p-3 text-center'>Clé USB</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={disqueDur} alt="Disque Dur Ext" /></div>
              <h3 className='p-3 text-center'>Disque Dur Ext</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={clavierSouris} alt="Claviers/Souris" /></div>
              <h3 className='p-3 text-center'>Claviers/Souris</h3>
            </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={cables} alt="Cables" /></div>
              <h3 className='p-3 text-center'>Cables</h3>
            </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={adaptateurs} alt="Adaptateurs" /></div>
              <h3 className='p-3 text-center'>Adaptateurs</h3>
            </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={gadgetUSB} alt="Gadgets USB" /></div>
              <h3 className='p-3 text-center'>Gadgets USB</h3>
            </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={encreToner} alt="Encre et Tonner" /></div>
              <h3 className='p-3 text-center'>Encre et Tonner</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={SouriseTapis} alt="Souris & TApis" /></div>
              <h3 className='p-3 text-center'>Souris & Tapis</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={hautParleurs} alt="Haut Parleurs" /></div>
              <h3 className='p-3 text-center'>Haut Parleurs</h3>
           </div>
          </div>
        </div>
        <div className='bg-white rounded-sm my-5 '>
          <h1 className='-bg--main-color text-center text-white  py-4 text-lg'>Composants D'Ordinateurs</h1>
          <div className='grid gap-5 items-center justify-center grid-cols-1 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-6 p-5 '>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={alimentation} alt="Alimentations" /></div>
              <h3 className='p-3 text-center'>Alimentations</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={disqueDurInt} alt="DisqueDurInt" /></div>
              <h3 className='p-3 text-center'>Disque Dur Int </h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={refroidissement} alt="refroidissement" /></div>
              <h3 className='p-3 text-center'>Refroidissement</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={carteSon} alt="carteSon" /></div>
              <h3 className='p-3 text-center'>cartes Son</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={lecteursCart} alt="lecteursCart" /></div>
              <h3 className='p-3 text-center'>Lecteurs Cartes</h3>
           </div>
            <div className="item [&_.img-holder]:hover:scale-110 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            relative before:absolute before:bottom-0 before:left-0 before:h-[2.2px] 
                    before:w-0 before:-bg--main-color before:transition-all cursor-pointer before:duration-300 hover:before:w-full
                    [&_.img-holder]:hover:rotate-6">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={mémoireRAM} alt="mémoireRAM" /></div>
              <h3 className='p-3 text-center'>Mémoire & RAM</h3>
           </div>
          </div>
        </div>
        <div className='bg-white rounded-sm my-5 '>
          <h1 className='-bg--main-color text-center text-white  py-4 text-lg'>Top Marques</h1>
          <div className='grid gap-5 items-center justify-center grid-cols-1 min-[500px]:grid-cols-2 min-[700px]:grid-cols-3 min-[900px]:grid-cols-4 min-[1200px]:grid-cols-6 p-5 '>

            <div className="item cursor-pointer transition-all duration-300 hover:scale-105">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={Havit} alt="Havit" /></div>
           </div>
            <div className="item cursor-pointer transition-all duration-300 hover:scale-105">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={Canon} alt="Canon" /></div>
           </div>
            <div className="item cursor-pointer transition-all duration-300 hover:scale-105">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={SanDisk} alt="Sandisk" /></div>
           </div>
            <div className="item cursor-pointer transition-all duration-300 hover:scale-105">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={HP} alt="hp" /></div>
           </div>
            <div className="item cursor-pointer transition-all duration-300 hover:scale-105">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={ASUS} alt="Asus" /></div>
           </div>
            <div className="item cursor-pointer transition-all duration-300 hover:scale-105">
              <div className='   overflow-hidden'><img className='w-full img-holder transition-all duration-300' src={Apple} alt="Apple" /></div>
           </div>

          </div>
        </div>
        </div>
      </div>
  )
}
