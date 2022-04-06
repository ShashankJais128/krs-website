import React, { useState } from 'react'
import { Link } from "react-router-dom";

const eventCard = [
  {
    name: "Robowar",
    status: "registration open"
  },
  {
    name: "Robocon",
    status: "registration open"
  },
  {
    name: "Pradarshana",
    status: "registration open"
  },
  {
    name: "Workshop",
    status: "registration open"
  }
]

function AdminEvents() {
  const [events, setEvents] = useState(eventCard)

  // deleting members
  const deleteEvent = (name) => {
    const newEvents = events.filter((event)=>{return event.name!==name})
      setEvents(newEvents)
      console.log(newEvents)
  }
  
  // modal state
  const [showModal, setShowModal] = useState(false)
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
              
              {events.map(event => {
                  return (
                    <div className="border-2 my-2 mx-8 p-2 rounded-lg bg-white">
                      <h2 className="">{event.name}</h2> 
                      <div className="flex justify-between">
                        <h3 className="text-sm">{event.status}</h3>
                        <div className="flex space-x-2">
                          <Link className="" onClick={() => deleteEvent(event.name)} to=""><img src="" alt="dlt" /></Link>
                          <Link className="" onClick={() => setShowModal(true)} to=""><img src="" alt="edit" /></Link>
                        </div>
                      </div>
                    </div>  
                  )
                  
                })}                
              </div>
            </div>

            {/* modal */}
            {showModal ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="bg-[#0c264e] border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl text-white font-semibold">Edit member</h3>
                        <button className="ml-auto text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                          <span className="text-white h-6 w-6 text-2xl block outline-none focus:outline-none">x</span>
                        </button>
                      </div>
                      {/*body*/}
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
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                          className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          
    </div>
  )
}

export default AdminEvents