import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContex";
import { useNavigate } from "react-router-dom";

const Artikel = () => {
  const { artikel, formatTanggal } = useContext(AppContext);
  const navigate = useNavigate();

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
          <p className="text-xs font-bold text-green-900">ARTIKEL</p>
        </div>
        <p className="mb-2 text-5xl sm:text-3xl text-ink font-bold">
          Artikel Terkini
        </p>
      </div>

      <section className="pb-8 pt-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artikel.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/artikel/${item._id}`)}
                className="cursor-pointer group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.foto}
                    alt={item.judul}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="mb-1 text-sm font-medium text-wolf flex justify-between">
                    <span className="text-orange">{item.sumber}</span>
                    <span className="text-gray-500">
                      {formatTanggal(item.tanggal)}
                    </span>
                  </p>
                  <p className="text-lg font-bold text-ink line-clamp-2">
                    {item.judul}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artikel;
