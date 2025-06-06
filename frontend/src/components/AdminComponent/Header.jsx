import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContex'
import { useNavigate } from 'react-router-dom'


const Header = () => {

  const {token, setToken} = useContext(AppContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    token && setToken('')
    token&& localStorage.removeItem('token')
  }

  return (
     <div className="flex justify-between items-center">
          <h1 className="text-gray-900 font-semibold text-lg">Panel Admin JMK</h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm select-none">
            <button
              aria-label="Notifications"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <i className="fas fa-bell"></i>
            </button>
            <button onClick={logout} className="flex bg-red-500 itext-sm px-10 py-2 rounded-full hover:bg-red-400 cursor-pointer">
              
              <span className="font-medium text-white">Logout</span>
            </button>
          </div>
        </div>
  )
}

export default Header
