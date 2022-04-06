import React from 'react'
import PP from './pp.jpeg'

const creditsCard = [
  {
    name: "Shashank Jaiswal",
    img: ""
  },
  {
    name: "Aditya"
  },
  {
    name: "Malvika"
  },
  {
    name: "Shyamal"
  },
  {
    name: "Ram"
  }
]


function Credits() {
  return (

    <div className="">
        <h1 className="mx-24 pt-16 font-bold text-4xl ">Credits</h1>
        <hr className="mx-24 mt-2 border-t-2 border-black" />

        <div className="py-16 mx-24">
            <div className="grid grid-cols-2">
              {creditsCard.map(credit => {
                return (
                  <div className='flex flex-col items-center py-8'>
                    <img className='rounded-full w-96 h-96 shadow-2xl shadow-black' src={PP} alt="" />
                    <h1 className='text-2xl font-semibold pt-6'>{credit.name}</h1>
                  </div>
                )
              })}
              
              
            </div>
        </div>
    </div>
  )
}

export default Credits