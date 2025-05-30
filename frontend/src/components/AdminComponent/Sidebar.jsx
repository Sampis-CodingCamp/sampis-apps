import React from "react";
import { AppContext } from "../../context/AppContex";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div>
      <aside className="w-[240px] bg-white shadow-md h-screen p-4">
        <div>
          <div className="mb-10 px-3">
            <img src={assets.logoNiga} alt="" />
          </div>
          <nav className="flex flex-col gap-4 px-3">
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3  rounded-lg px-3 py-2 w-full cursor-pointer ${
                  isActive ? "text-white bg-indigo-600" : "bg-sky-50"
                }`
              }
              to="/dashboard"
            >
              <i className="fas fa-th-large text-sm"></i>
              <span className="hidden md:block font-semibold text-sm">
                Dashboard
              </span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3   rounded-lg px-3 py-2 w-full cursor-pointer ${
                  isActive ? "text-white bg-indigo-600" : "bg-sky-50"
                }`
              }
              to="/add-artikel"
            >
              <i className="fas fa-book-open text-sm"></i>
              <span>Artikel</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3   rounded-lg px-3 py-2 w-full cursor-pointer ${
                  isActive ? "text-white bg-indigo-600" : "bg-sky-50"
                }`
              }
              to="/all-convert"
            >
              <i className="fas fa-user-graduate text-sm"></i>
              <span>Penukaran</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex items-center gap-3  rounded-lg px-3 py-2 w-full cursor-pointer ${
                  isActive ? "text-white bg-indigo-600" : "bg-sky-50"
                }`
              }
              to="/artikel-list"
            >
              <i className="fas fa-folder-open text-sm"></i>
              <span>List Artikel</span>
            </NavLink>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
