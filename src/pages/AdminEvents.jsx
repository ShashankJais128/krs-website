import React from 'react'
import { Link } from "react-router-dom";

function AdminEvents() {
  return (
    <div className="flex-1 my-12 mx-20 justify-center items-center">
          

            {/* form */}
            <div className='py-4 px-8 rounded-xl bg-[#071831]'>
              <h1 className="p-2 text-3xl text-white">Add an event</h1>
              <div className='grid grid-cols-2'>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Event Name</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter event name' type="text" />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Status</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter event status' type="text" />
                </div>
                <div className="py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Image</h2>
                  <input className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter image link' type="text" />
                </div>
                
                <div className="col-span-2 py-2 px-4">
                  <h2 className="text-xl p-1 my-1 text-white">Description</h2>
                  <textarea className="text-lg w-full py-0.5 px-1 mx-1 rounded" placeholder='Enter description of the event...' type="text" />
                </div>
                
              </div>
              
              <button className="text-2xl py-1.5 px-3 mx-1 my-6 bg-[#0C3EF1] rounded-lg text-white">Add event</button>
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
             

                
              </div>
            </div>
          
    </div>
  )
}

export default AdminEvents