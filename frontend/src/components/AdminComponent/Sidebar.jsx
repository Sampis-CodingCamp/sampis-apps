import React from "react";
import { AppContext } from "../../context/AppContex";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  return (
    <div>
      <div className="bg-gray-100 text-ink h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
        <div className="hidden md:block mt-4 text-center italic">
          <img src={assets.logoNiga} alt="" />
        </div>
        <ul className="flex flex-col mt-5 text-xl">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center justify-center md:justify-start py-3 px-2 space-x-0 md:space-x-4 mb-2 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
                isActive ? "bg-blue-600 text-white" : ""
              }`
            }
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"
                />
              </svg>
            </div>
            <span className="hidden md:inline">Dashboard</span>
          </NavLink>
          <NavLink
            to="/all-convert"
            className={({ isActive }) =>
              `flex items-center justify-center md:justify-start py-3 px-2 space-x-0 md:space-x-4 mb-2 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
                isActive ? "bg-blue-600 text-white" : ""
              }`
            }
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"
                />
              </svg>
            </div>
            <span className="hidden md:inline">Penukaran</span>
          </NavLink>
          <NavLink
            to="/add-item"
            className={({ isActive }) =>
              `flex items-center justify-center md:justify-start py-3 px-2 space-x-0 md:space-x-4 mb-2 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
                isActive ? "bg-blue-600 text-white" : ""
              }`
            }
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"
                />
              </svg>
            </div>
            <span className="hidden md:inline">Tambah Barang</span>
          </NavLink>
          <NavLink
            to="/all-item"
            className={({ isActive }) =>
              `flex items-center justify-center md:justify-start py-3 px-2 space-x-0 md:space-x-4 mb-2 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
                isActive ? "bg-blue-600 text-white" : ""
              }`
            }
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z"
                />
              </svg>
            </div>
            <span className="hidden md:inline">Daftar Barang</span>
          </NavLink>
          <NavLink
            to="/artikel-list"
            className={({ isActive }) =>
              `flex items-center justify-center md:justify-start py-3 px-2 space-x-0 md:space-x-4 mb-2 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
                isActive ? "bg-blue-600 text-white" : ""
              }`
            }
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z"
                />
              </svg>
            </div>
            <span className="hidden md:inline">Daftar Artikel</span>
          </NavLink>
          <NavLink
            to="/add-artikel"
            className={({ isActive }) =>
              `flex items-center justify-center md:justify-start py-3 px-2 space-x-0 md:space-x-4 mb-2 rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
                isActive ? "bg-blue-600 text-white" : ""
              }`
            }
          >
            <div className="flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-4h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7z"
                />
              </svg>
            </div>
            <span className="hidden md:inline">Tambah Artikel</span>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
