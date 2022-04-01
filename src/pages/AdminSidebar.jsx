import React from 'react'
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="relative flex min-h-screen">
        <div className="w-64 flex flex-col bg-[#071831] text-white sticky">
          <Link to="/admin/adminmembers" className="py-2 text-center">Members</Link>
          <Link to="/admin/adminevents" className="py-2 text-center">Events</Link>
        </div>
    </div>
  )
}

export default AdminSidebar