import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import ImageUpload from "../components/ImageUpload";

const ScanTrash = () => {
  return (
    <div>
      <div
        className="relative w-full h-28S bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>

        <div className="relative z-10 mx-4 sm:mx-[8%]">
          <Navbar />
        </div>
      </div>

      <div className=" text-center py-20">
        <span className="inline-flex items-center justify-center rounded-full bg-green-apple px-3 py-1 font-semibold mb-2 text-emerald-700">
          <p className="text-sm whitespace-nowrap">Deteksi</p>
        </span>
        <p className="mb-2 text-5xl sm:text-3xl text-hitam-manja font-bold">
          Deteksi Sampahmu
        </p>
      </div>

      <div className="relative z-10 mx-4 sm:mx-[8%]">
        <div className="relative pb-20 w-full h-full bg-[#F9FAFB]">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default ScanTrash;
