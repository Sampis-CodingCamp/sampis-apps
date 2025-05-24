import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { AppContext } from '../context/AppContex';
import axios from 'axios';

const SellTrash = () => {
  const location = useLocation();
  const jenisSampahDariDeteksi = location.state?.jenisSampah || '';

  const {backendUrl} = useContext(AppContext)

  const [formData, setFormData] = useState({
    jenisSampah: '',
    jumlah: ''
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      jenisSampah: jenisSampahDariDeteksi,
    }));
  }, [jenisSampahDariDeteksi]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Terkirim:', formData);
  };

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
          <p className="text-sm whitespace-nowrap">Form</p>
        </span>
        <p className="mb-2 text-5xl sm:text-3xl text-hitam-manja font-bold">
          Formulir Sampah
        </p>
      </div>

      <div className="relative z-10 mx-4 mb-8 sm:mx-[8%]">
        <div className="relative pb-20 w-full h-full bg-[#F9FAFB] p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Nama</label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Jenis Sampah</label>
              <input
                type="text"
                name="jenisSampah"
                value={formData.jenisSampah}
                disabled
                className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-600 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Jumlah (pcs)</label>
              <input
                type="number"
                name="jumlah"
                value={formData.jumlah}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
                required
              />
            </div>

            <button
              type="submit"
              className="hover:bg-[#BF9264] bg-orange-400 text-white px-6 py-2 rounded-lg  transition duration-200"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellTrash;
