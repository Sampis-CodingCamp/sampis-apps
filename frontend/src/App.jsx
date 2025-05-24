import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Artikel from './pages/BeritaDetail'
import ScanTrash from './pages/ScanTrash'
import Login from './pages/Login'
import MyProfile from './pages/MyProfile'
import SellTrash from './pages/SellTrash'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div >
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/berita" element={<Artikel />} />
          <Route path="/scanTrash" element={<ScanTrash />} />
          <Route path="/sellTrash" element={<SellTrash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/points" element={<MyProfile />} />
        </Routes>
    </div>
  )
}

export default App
