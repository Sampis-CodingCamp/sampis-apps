import React from 'react'
import { assets } from '../../assets/assets'
import Sidebar from '../../components/AdminComponent/Sidebar'
import Header from '../../components/AdminComponent/Header'
import Stats from '../../components/AdminComponent/Stats'
import PendingPenukaran from '../../components/AdminComponent/PendingPenukaran'

const Dashboard = () => {
  return (
     <div className="flex w-full min-h-screen bg-white">
      {/* Konten utama */}
      <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">
        <Header />
        <Stats />
        <PendingPenukaran />
      </div>
    </div>
  )
}

export default Dashboard
