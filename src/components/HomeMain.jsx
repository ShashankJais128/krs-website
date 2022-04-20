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
        <div className='h-96 w-96 mt-56 lg:mt-20 rounded-full bg-gradient-to-tr from-blue-800 to-blue-300 absolute z-0'></div>
        <div className="flex justify-center lg:justify-start w-full mt-12 z-10">
            <div className='w-2/3 lg:w-1/2 h-2/3 lg:ml-28 my-4 space-x-6 flex items-center'>
                <img className="hidden md:block w-24 h-24 rounded-full" src={krslogo} alt="KRS" />
                <h1 className="text-white text-6xl sm:text-7xl font-semibold ">KIIT ROBOTICS SOCIETY</h1>
            </div>
            <img className="hidden lg:block h-[250px]" src={homerobot} alt="" />
        </div>
        <div className='mt-12 lg:mt-0 sm:pt-0 z-10'>
            <h1 className="text-white text-xl sm:text-2xl font-semibold text-center">THE SOCIETY OF <br /> EMINENCE</h1><br />
            <div className='flex justify-center space-x-4'>
                <img className="md:hidden w-12 h-12 sm:w-16 sm:h-16 rounded-full" src={krslogo} alt="kiitLogo" />
                <img className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" src={krslogo} alt="kiitLogo" />
                <img className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" src={krslogo} alt="ksacLogo" />
            </div>
        </div>
        <div className='z-10 px-10 pt-4 w-full'>
            <h1 className='text-white text-3xl font-semibold'>Our Domain</h1>
            <hr className="mt-2 w-32 border-t-4 rounded-full border-blue-500" />

            <div className='grid grid-cols-2 md:grid-cols-5 mt-6 items-center justify-center place-items-center'>
                {Domain.map(Domain => {
                    return (
                        <div className='border-2 mb-12 md:even:mt-16 md:odd:-mt-16 w-[150px] h-[120px] sm:w-[200px] sm:h-[150px] md:w-[120px] md:h-[100px] lg:w-[150px] lg:h-[120px] xl:w-[200px] xl:h-[150px] rounded-2xl bg-gray-700 text-center flex flex-col items-center justify-center space-y-3'>
                            <p className='text-white text-sm lg:text-base'>{Domain.name}</p>
                            <img className='w-12 h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-full' src={Domain.img} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default HomeMain