import React from 'react'
import krslogo from "./krslogo.jpg";

const Faculty = [
    {
      name: "Dr. Nirmal K Rout",
      designation: "Senior Faculty Member",
      img: krslogo
    },
    {
        name: "Dr. Nirmal K Rout",
        designation: "Senior Faculty Member",
        img: krslogo
    },
    {
        name: "Dr. Nirmal K Rout",
        designation: "Senior Faculty Member",
        img: krslogo
    },
    {
        name: "Dr. Nirmal K Rout",
        designation: "Senior Faculty Member",
        img: krslogo
    },
    {
        name: "Dr. Nirmal K Rout",
        designation: "Senior Faculty Member",
        img: krslogo
    }
    
  ]

function HomeFaculty() {
  return (
    <div className='bg-black flex flex-col items-center pb-16 relative'>
    <div className='h-52 w-52 rounded-bl-full bg-gradient-to-tr from-blue-800 to-blue-300 absolute z-0 top-0 right-0'></div>
        <div className='z-20 px-12  w-full'>
            <h1 className='text-white text-3xl font-semibold'>Our Faculty</h1>
            <hr className="mt-2 w-32 border-t-4 rounded-full border-blue-500" />

            <div className='grid grid-cols-5 mt-6 pl-4 justify-center'>
                {Faculty.map(Faculty => {
                    return (
                            <div className="relative w-[200px] h-[200px] even:mt-24">
                                <img className='z-0 w-full h-full rounded-2xl' src={krslogo} alt="" />
                                <div className='border-2 w-[150px] h-[80px] p-2 rounded-3xl bg-gray-700 text-center flex flex-col items-center justify-center space-y-2 absolute -bottom-10 -right-10 z-10'>
                                    <p className='text-white'>{Faculty.name}</p>
                                    <p className='text-white text-xs'>{Faculty.designation}</p>
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default HomeFaculty