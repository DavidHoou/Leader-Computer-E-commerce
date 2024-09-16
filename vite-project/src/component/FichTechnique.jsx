import React, { useEffect, useState } from 'react'
// import outils from "../../public/outils.json"
import { useParams,useLoaderData, useLocation, useOutletContext ,useSearchParams} from 'react-router-dom'


export default function FichTechnique({}) {
  const params = useParams()
  const [searchParams, setSearchParmas] = useSearchParams()

  const location = useLocation()
  console.log(location)

  const information = useOutletContext()
  console.log(information)
  // const outils = useLoaderData()
  const [outils, setOutils] = useState([...information])
  const [loading, setLoading] = useState(true)
  // const [carState,setCarstate]=useState([...outils[params.id].caractéristiques])
  // const [fichState,setfichstate]=useState([...outils[params.id].DescTech])
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("../../public/outils.json");
  //     const data = await response.json();
  //     setOutils(data);
  //     setLoading(false)
  //   };
  //   fetchData();
  // }, [location.pathname,params]);
  // console.log(data[params.id].DescTech)
  let typeMachine = searchParams.get("gender")

  return (
    <>
      {outils ?
            (<div key={ [...outils][0][typeMachine][params.id]} id='fichTechnique' className='container justify-center grid items-start grid-cols-1 min-[900px]:grid-cols-2 gap-10 m-5 p-5 '>
              <table  className='bg-red-50 border-solid -border--thin border-[#ddd]'>
                <tr>
                  <th className='-bg--main-color text-white p-5'>Principales caractéristiques</th>
                </tr>
            {
              [...outils][0][typeMachine][params.id].caractéristiques.map(item =>
                    <>
                <tr className='item-data'>
                      <td className="py-1 px-4 text-center font-medium leading-8">{item}</td>
                    </tr>
                      </>
                 )
                  }
                 
              </table>
        
              <table  className='bg-red-50 border-solid -border--thin border-[#ddd]'>
                <tr>
                  <th className='-bg--main-color text-white p-5'>Descriptif technique</th>
                </tr>
                 {
                   [...outils][0][typeMachine][params.id].DescTech.map(item =>
                    <>
                <tr className='item-data'>
                      <td className="py-2 px-4 text-center font-medium leading-8 ">{item}</td>
                    </tr>
                      </>
                 )
                  }
                 
              </table>
            </div>):""
        
    }
    </>
  )
}
