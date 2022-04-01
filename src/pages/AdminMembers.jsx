import React from 'react'
import { Link } from "react-router-dom";


function AdminMembers() {
  return (
      
    <div className="flex-1 my-12 mx-20 justify-center items-center">
          

            {/* form */}
            <div className='py-4 px-8 rounded-xl bg-[#071831]'>
              <h1 className="p-2 text-3xl text-white">Add a member</h1>
              <div className='grid grid-cols-2'>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">First Name</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter first name' type="text" />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Last Name</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter last name' type="text" />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Domain</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter domain' type="text" />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Roll Number</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Roll no.' type="text" />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">About</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter About' type="text" />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Linkdin</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter Linkedin link' type="text" />
                </div>
              </div>
              
              <button className="text-2xl py-1.5 px-3 mx-1 my-6 bg-[#0C3EF1] rounded-lg text-white">Add member</button>
            </div>

            {/* cards */}
            <div className='py-4'>
              <div className="grid grid-cols-3">

                <div className="border-2 my-2 mx-8 p-2 rounded-lg bg-white">
                  <h2 className="">Shashank Jaiswal</h2> 
                  <div className="flex justify-between">
                    <h3 className="text-sm">2005405</h3>
                    <div className="flex space-x-2">
                      <Link className="" to=""><img src="" alt="dlt" /></Link>
                      <Link className="" to=""><img src="" alt="edit" /></Link>
                    </div>
                  </div>
                </div>

                <div className="border-2 my-2 mx-8 p-2 rounded-lg bg-white">
                  <h2 className="">Shashank Jaiswal</h2> 
                  <div className="flex justify-between">
                    <h3 className="text-sm">2005405</h3>
                    <div className="flex space-x-2">
                      <Link className="" to=""><img src="" alt="dlt" /></Link>
                      <Link className="" to=""><img src="" alt="edit" /></Link>
                    </div>
                  </div>
                </div>

                <div className="border-2 my-2 mx-8 p-2 rounded-lg bg-white">
                  <h2 className="">Shashank Jaiswal</h2> 
                  <div className="flex justify-between">
                    <h3 className="text-sm">2005405</h3>
                    <div className="flex space-x-2">
                      <Link className="" to=""><img src="" alt="dlt" /></Link>
                      <Link className="" to=""><img src="" alt="edit" /></Link>
                    </div>
                  </div>
                </div>

                <div className="border-2 my-2 mx-8 p-2 rounded-lg bg-white">
                  <h2 className="">Shashank Jaiswal</h2> 
                  <div className="flex justify-between">
                    <h3 className="text-sm">2005405</h3>
                    <div className="flex space-x-2">
                      <Link className="" to=""><img src="" alt="dlt" /></Link>
                      <Link className="" to=""><img src="" alt="edit" /></Link>
                    </div>
                  </div>
                </div>

                <div className="border-2 my-2 mx-8 p-2 rounded-lg bg-white">
                  <h2 className="">Shashank Jaiswal</h2> 
                  <div className="flex justify-between">
                    <h3 className="text-sm">2005405</h3>
                    <div className="flex space-x-2">
                      <Link className="" to=""><img src="" alt="dlt" /></Link>
                      <Link className="" to=""><img src="" alt="edit" /></Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          
        </div>
  )
}

export default AdminMembers