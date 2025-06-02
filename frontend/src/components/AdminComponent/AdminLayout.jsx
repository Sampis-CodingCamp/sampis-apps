import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    // <div className='flex'>
    //   <Sidebar/>
    //   <div className='flex-1 p-4'>
    //     <Outlet/>
    //   </div>
    // </div>
    <div className="flex">
      <Sidebar />
      <div className="grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
        <div className="bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center">
          <h1>Dashboard</h1>
        </div>
        <div>
          {/* <Dashboard /> */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
