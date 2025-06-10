import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContex";
import Banner from "../components/SampointComponent.jsx/Banner";
import { toast } from "react-toastify";
import PopUpForm from "../components/SampointComponent.jsx/PopUpForm";
import { useNavigate } from "react-router-dom";

const Sampoint = () => {
  const { userData, item } = useContext(AppContext);
  const [showFull, setShowFull] = useState(null);
  const [filterJenis, setFilterJenis] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null)

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div
        className="relative w-full h-18 md:h-20 lg:h-24 bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        <div className="relative container pt-16 lg:pt-24">
          <Navbar />
        </div>
      </div>

      {/* Main */}
      <section className="pb-8 pt-16">
        <div className="container">
          <div className="flex justify-between">
            <div>
              <p className="mb-4 text-2xl font-bold text-ink">Sampoint 🪙</p>
              <button
                onClick={() => navigate("/penukaran")}
                className="text-sm font-medium text-center w-full px-4 py-2 rounded-lg bg-green-500 text-white border-green-500 hover:bg-green-600 transition-all cursor-pointer"
              >
                Lihat Penukaran
              </button>
            </div>
            <div>
              <p className="text-sm font-light italic text-gray-500">Poin</p>
              <p className="mb-4 text-2xl font-semibold text-ginger">
                {userData?.poin || 0}
              </p>
            </div>
          </div>
          <hr className="my-5 h-px border-0 bg-gray-300" />

          <div className="mx-auto py-8 sm:py-12">
            <header>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Tukarkan Poin, Dapatkan Hadiah! 🛒
              </h2>
              <p className="mt-4 max-w-2xl text-gray-500 text-justify">
                Poin yang kamu kumpulkan bisa ditukar dengan produk Rycele
                eksklusif dan elektronik keren. Jangan biarkan poinmu
                menganggur—tukarkan sekarang!
              </p>
            </header>

            <Banner />

            {/* Filter Jenis */}
            <div className="mx-auto mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between py-8 sm:py-12">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Poin Jadi Barang Keren, Semua Bisa Kamu Miliki! 💚
                </h2>
                <p className="mt-4 max-w-2xl text-gray-500 text-justify">
                  Simpan dan kumpulkan poin dari setiap kontribusimu. Tukarkan
                  dengan barang favorit atau barang eco-friendly yang mendukung
                  hidup sehat dan bumi lebih baik!
                </p>
              </header>

              <div className="w-full sm:w-auto">
                <ul className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                  {["Eco Friendly", "Electronic"].map((jenis) => (
                    <li key={jenis}>
                      <button
                        onClick={() =>
                          setFilterJenis(filterJenis === jenis ? null : jenis)
                        }
                        className={`flex items-center gap-2 rounded-md border-s-4 px-4 py-3 text-sm font-medium shadow-sm transition
            ${
              filterJenis === jenis
                ? "border-orange-500 bg-blue-50 text-orange-400"
                : "border-transparent text-gray-500 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-700"
            }`}
                      >
                        {jenis}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Item Grid */}
          <div className="mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" id="item">
            {item?.length > 0 ? (
              item
                .slice()
                .reverse()
                .filter((itm) => !filterJenis || itm.jenis === filterJenis)
                .map((itm, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col overflow-hidden rounded shadow-sm bg-white border border-gray-200 h-[380px]"
                  >
                    <img
                      src={itm.foto}
                      alt={itm.nama}
                      className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="flex flex-col justify-between flex-1 p-4">
                      <div>
                        <div className="flex justify-between items-center text-sm font-semibold text-ginger">
                          <p>{itm.poin} Poin</p>
                          <p className="text-gray-500 font-normal">
                            Stok: {itm.stok}
                          </p>
                        </div>

                        <h3 className="mt-1 text-lg font-medium text-gray-900">
                          {itm.nama}
                        </h3>

                        <p className="mt-1 text-sm text-gray-700">
                          {showFull === index ? (
                            itm.deskripsi
                          ) : (
                            <span className="line-clamp-1">
                              {itm.deskripsi}
                            </span>
                          )}
                        </p>

                        {itm.deskripsi.length > 100 && (
                          <button
                            type="button"
                            onClick={() =>
                              setShowFull(showFull === index ? null : index)
                            }
                            className="mt-1 text-xs text-blue-600 underline"
                          >
                            {showFull === index
                              ? "Sembunyikan"
                              : "Lihat Selengkapnya"}
                          </button>
                        )}
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="block w-full rounded-sm bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 cursor-pointer"
                          onClick={() => {
                            if (userData?.poin < itm.poin) {
                              toast.error("Poin Anda tidak cukup");
                              return;
                            }
                            
                            setSelectedItemId(itm._id);
                          }}
                        >
                          Tukar Sekarang
                        </button>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                Loading item atau belum ada data.
              </p>
            )}
          </div>
        </div>
      </section>
      {selectedItemId && (
        <PopUpForm
          itemId={selectedItemId}
          onClose={() => setSelectedItemId(null)}
        />
      )}
    </div>
  );
};

export default Sampoint;
