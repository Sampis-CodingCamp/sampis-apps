import React, { useContext } from "react";
import { AppContext } from "../../context/AppContex";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { token, setToken } = useContext(AppContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    token && setToken("");
    token && localStorage.removeItem("token");
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="grow ml-16 md:ml-64 h-screen  text-ink">
        <div className="bg-gray-100 text-ink border-b border-gray-300 p-4 flex justify-between items-center">
          <h1>Dashboard</h1>
          <button
            onClick={logout}
            className="flex bg-red-500 itext-sm px-10 py-2 rounded-full hover:bg-red-400 cursor-pointer"
          >
            <span className="font-medium text-white">Keluar</span>
          </button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
