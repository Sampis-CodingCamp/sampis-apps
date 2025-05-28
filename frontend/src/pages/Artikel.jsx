import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContex";

// Fungsi format tanggal
const formatTanggal = (tanggalStr) => {
  const now = new Date();
  const tanggal = new Date(tanggalStr);
  const diffTime = now - tanggal; // dalam milidetik
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Hari ini";
  if (diffDays === 1) return "1 hari lalu";
  if (diffDays === 2) return "2 hari lalu";
  if (diffDays === 3) return "3 hari lalu";

  // format tanggal biasa kalau > 3 hari
  return tanggal.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const Artikel = () => {
  const { artikel } = useContext(AppContext);

  return (
    <div>
      <div
        className="relative w-full h-28 bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        <div className="relative z-10 container pt-16 lg:pt-24">
          <Navbar />
        </div>
      </div>

      <section className="pb-8 pt-16">
        <div className="container">
          <p className="mb-4 text-2xl font-bold text-ink">Artikel</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {artikel.map((item, index) => (
              <a
                href=""
                key={index}
                className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
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
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Artikel;
