import React from 'react'
import AdminMembers from './AdminMembers';
import AdminSidebar from './AdminSidebar';
import AdminEvents from './AdminEvents';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Admin() {
  return (
    <div className='flex bg-black'>
        <AdminSidebar />
      <Routes>
      <Route path='/adminmembers' element={<AdminMembers/>} />
      <Route path='/adminevents' element={<AdminEvents />} />
      </Routes>
    </div>
  )
}

export default Admin