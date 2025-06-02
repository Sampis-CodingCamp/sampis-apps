import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="grow ml-16 md:ml-64 h-screen  text-ink">
        <div className="bg-gray-100 text-ink border-b border-gray-300 p-4 flex justify-between items-center">
          <h1>Dashboard</h1>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
