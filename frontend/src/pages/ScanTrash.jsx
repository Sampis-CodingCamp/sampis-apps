import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import ImageUpload from "../components/ImageUpload";

const ScanTrash = () => {
  return (
    <div>
      <div
        className="relative w-full h-18 md:h-20 lg:h-24 bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        <div className="relative container pt-16 lg:pt-24">
          <Navbar />
        </div>
      </div>

      <div className=" text-center py-20">
        <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
          <p className="text-xs font-bold text-green-900">DETEKSI</p>
        </div>
        <p className="mb-2 text-5xl sm:text-3xl text-ink font-bold">
          Deteksi Sampahmu
        </p>
      </div>

      <div className="relative container">
        <div className="relative w-full h-full bg-[#F9FAFB] rounded-lg shadow-sm">
          <ImageUpload />
        </div>
      </div>
    </div>
  );
};

export default ScanTrash;
