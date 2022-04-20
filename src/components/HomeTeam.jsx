import React from 'react'
import { Link } from "react-router-dom";
import krslogo from "./krslogo.jpg";

const Team = [
    {
        name: "ADVITYA DUTT KAUSHIK",
        designation: "Coordinator",
        img: krslogo
    },
    {
        name: "ADVITYA DUTT KAUSHIK",
        designation: "Coordinator",
        img: krslogo
    },
    {
        name: "ADVITYA DUTT KAUSHIK",
        designation: "Coordinator",
        img: krslogo
    },
      {
        name: "ADVITYA DUTT KAUSHIK",
        designation: "Coordinator",
        img: krslogo
    },
    {
        name: "ADVITYA DUTT KAUSHIK",
        designation: "Coordinator",
        img: krslogo
    }   
]

function HomeTeam() {
  return (
    <div className='bg-black flex flex-col items-center pb-16 relative'>
        <div className='h-52 w-52 rounded-bl-full bg-gradient-to-tr from-blue-800 to-blue-300 absolute z-0 top-0 right-0'></div>
        <div className='z-20 px-10  w-full'>
            <h1 className='text-white text-3xl font-semibold'>Our Team</h1>
            <hr className="mt-2 w-32 border-t-4 rounded-full border-blue-500" />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 place-items-center mt-6 pl-4'>
                {Team.map(Team => {
                    return (
                            <div className="relative w-[290px] h-[290px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[130px] lg:h-[130px] xl:w-[180px] xl:h-[180px] lg:even:mt-24 mb-20">
                                <img className='z-0 w-full h-full rounded-2xl' src={krslogo} alt="" />
                                <div className='border-2 w-[250px] sm:w-[180px] lg:w-[120px] xl:w-[150px] h-[70px] py-2 px-1 rounded-2xl bg-gray-700 text-center flex flex-col items-center justify-center space-y-1 absolute -bottom-10 -right-10 z-10'>
                                    <p className='text-white text-sm'>{Team.name}</p>
                                    <p className='text-white text-xs'>{Team.designation}</p>
                                </div>
                            </div>
                    )
                })}
            </div>

            <div className='flex flex-col items-end'>
                <span className=' w-fit'>
                    <Link to="/members"><h2 className='text-blue-800 text-xl font-semibold'>Meet the team &#8594;</h2></Link>                    
                    <hr className="mt-2 w-24 border-t-4 rounded-full border-blue-500" />
                </span>
            
            </div>
            
        </div>
    </div>
  )
}

export default HomeTeam