import React from 'react'
import krslogo from "./krslogo.jpg";
import homerobot from "./HomeRobot.png"

const Domain = [
    {
      name: "Robotics",
      img: krslogo
    },
    {
      name: "Machine Learning",
      img: krslogo
    },
    {
      name: "Internet of Things",
      img: krslogo
    },
    {
      name: "Web Development",
      img: krslogo
    },
    {
      name: "Embedded",
      img: krslogo
    }
  ]


function HomeMain() {
  return (
    <div className="bg-black flex flex-col items-center pb-16">
        <div className='h-52 w-52 mt-20 rounded-bl-full bg-gradient-to-tr from-blue-800 to-blue-300 absolute z-0 top-0 right-0'></div>
        <div className='h-96 w-96 mt-20 rounded-full bg-gradient-to-tr from-blue-800 to-blue-300 absolute z-0'></div>
        <div className="flex w-full mt-8 z-10">
            <div className='w-1/2 h-2/3 ml-28 my-4 space-x-6 flex items-center'>
                <img className="w-24 h-24 rounded-full" src={krslogo} alt="KRS" />
                <h1 className="text-white text-7xl font-semibold">KIIT ROBOTICS SOCIETY</h1>
            </div>
            <img className="h-[250px]" src={homerobot} alt="" />
        </div>
        <div className=' z-10'>
            <h1 className="text-white text-2xl font-semibold text-center">THE SOCIETY OF <br /> EMINENCE</h1><br />
            <div className='flex justify-center space-x-4'>
                <img className="w-16 h-16 rounded-full" src={krslogo} alt="kiitLogo" />
                <img className="w-16 h-16 rounded-full" src={krslogo} alt="ksacLogo" />
            </div>
        </div>
        <div className='z-10 px-12  w-full'>
            <h1 className='text-white text-3xl font-semibold'>Our Domain</h1>
            <hr className="mt-2 w-32 border-t-4 rounded-full border-blue-500" />

            <div className='flex mt-6 justify-center space-x-12'>
                {Domain.map(Domain => {
                    return (
                        <div className='border-2 w-[200px] h-[150px] rounded-2xl bg-gray-700 even:mt-12 text-center flex flex-col items-center justify-center space-y-3'>
                            <p className='text-white'>{Domain.name}</p>
                            <img className='w-20 h-20 rounded-full ' src={Domain.img} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default HomeMain