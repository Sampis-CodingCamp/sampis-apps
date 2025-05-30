import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className='flex-1 p-4'>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout
