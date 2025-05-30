import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContex";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";

const Points = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [conversion, setConversion] = useState([]);

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const slotDateFormT = (isoDateString) => {
    const date = new Date(isoDateString);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const getUserConversion = async () => {
    try {
      const res = await axios.get(`${backendUrl}/sampah/user`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      const result = res.data;

      if (result.status === "success") {
        const parsedData = result.data.reverse().map((item) => ({
          ...item,
          lokasi:
            typeof item.lokasi === "string"
              ? JSON.parse(item.lokasi)
              : item.lokasi,
        }));

        setConversion(parsedData);
      } else {
        console.log("⚠️ Status bukan success:", result);
      }
    } catch (error) {
      console.error("❌ Gagal fetch:", error);
      toast.error("Gagal mengambil data");
    }
  };

  useEffect(() => {
    if (token) getUserConversion();
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="relative w-full h-28 bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        <div className="relative z-10 container pt-16 lg:pt-24">
          <Navbar />
        </div>
      </div>

      <div className="px-4 sm:px-[8%] mt-10">
        <h2 className="text-lg font-semibold text-zinc-700 border-b pb-2">
          Sampah Saya
        </h2>

        {/* Sampah Card List */}
        <div className="my-6 space-y-6">
          {conversion.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-4 items-start"
            >
              {/* Foto */}
              <img
                src={item.foto}
                alt={item.jenis}
                className="w-full max-w-[120px] h-auto rounded-lg object-cover bg-indigo-100"
              />

              {/* Info */}
              <div className="flex flex-col text-sm text-gray-700 gap-1">
                <p className="text-lg font-bold text-neutral-800">
                  {item.jenis}
                </p>
                <p className="text-green-600 font-semibold">
                  Estimasi Poin: {item.estimasiPoin}
                </p>
                <p className="text-gray-500">{item.metode}</p>

                <div className="mt-2">
                  <p className="text-sm font-medium">Alamat:</p>
                  <p className="text-xs text-gray-600">{item.lokasi?.line2}</p>
                </div>

                <p className="text-sm mt-2 text-gray-500">
                  {slotDateFormT(item.tanggal)}
                </p>
              </div>

              {/* Status Button */}
              <div className="self-end">
                <button
                  className={`text-sm font-medium text-center w-full px-4 py-2 rounded-lg transition-all
                        ${
                          item.status === "approved"
                            ? "bg-green-500 text-white border-green-500 hover:bg-green-600"
                            : item.status === "cancel"
                            ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
                            : item.status === "pending"
                            ? "bg-yellow-400 text-white border-yellow-400 hover:bg-yellow-500"
                            : "border border-gray-300 text-stone-600 hover:bg-stone-400 hover:text-white"
                        }
                      `}
                >
                  {item.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Points;
