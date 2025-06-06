import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import {
  Home,
  Repeat,
  PlusSquare,
  Boxes,
  Newspaper,
  FilePlus,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-ink h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300">
      <div className="hidden md:block mt-4 text-center italic">
        <img src={assets.logoNiga} alt="Logo" className="mx-auto w-24" />
      </div>
      <ul className="flex flex-col mt-5 text-base">
        <SidebarLink to="/dashboard" label="Dashboard" Icon={Home} />
        <SidebarLink to="/all-convert" label="Penukaran" Icon={Repeat} />
        <SidebarLink to="/add-item" label="Tambah Barang" Icon={PlusSquare} />
        <SidebarLink to="/all-item" label="Daftar Barang" Icon={Boxes} />
        <SidebarLink to="/artikel-list" label="Daftar Artikel" Icon={Newspaper} />
        <SidebarLink to="/add-artikel" label="Tambah Artikel" Icon={FilePlus} />
      </ul>
    </div>
  );
};

const SidebarLink = ({ to, label, Icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center justify-center md:justify-start py-3 px-2 md:px-4 space-x-0 md:space-x-4 mb-2 rounded-lg transition-all hover:cursor-pointer hover:bg-blue-600 hover:text-white ${
        isActive ? "bg-blue-600 text-white" : "text-gray-700"
      }`
    }
  >
    <Icon className="w-5 h-5 flex-shrink-0" />
    <span className="hidden md:inline">{label}</span>
  </NavLink>
);

export default Sidebar;
