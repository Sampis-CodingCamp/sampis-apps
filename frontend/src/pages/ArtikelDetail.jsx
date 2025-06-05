import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContex";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLink,
} from "react-icons/fa"; // ← Tambahkan ini

const ArtikelDetail = () => {
  const { artikel, formatTanggal } = useContext(AppContext);
  const { artikelId } = useParams();
  const [artikelInfo, setArtikelInfo] = useState(null);
  const [showShare, setShowShare] = useState(false); // ← State untuk toggle share

  useEffect(() => {
    const fetchArtikel = () => {
      const info = artikel.find((art) => art._id === artikelId);
      setArtikelInfo(info);
    };
    fetchArtikel();
  }, [artikel, artikelId]);

  if (!artikelInfo) return <div className="container py-16">Loading...</div>;

  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("Link disalin ke clipboard!");
  };

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

      <section className="pb-32 pt-16">
        <div className="container">
          <div>
            <p className="mb-3 text-3xl font-bold text-ink">
              {artikelInfo.judul}
            </p>
            <hr className="my-5 h-px border-0 bg-gray-300" />
            <div className="mb-5 items-center">
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <div className="flex space-x-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-xl font-semibold text-ink">
                        {artikelInfo.sumber}
                      </p>
                      <p className="truncate text-sm text-gray-500">Penulis</p>
                    </div>
                  </div>
                </div>
                <div className="relative w-1/2">
                  <p className="absolute bottom-0 end-0 text-sm text-gray-500">
                    {formatTanggal(artikelInfo.tanggal)}
                  </p>
                </div>
              </div>

              {/* BAGIKAN */}
              <div className="mt-8 flex items-center relative">
                <p className="mr-3">Bagikan</p>
                <button
                  onClick={() => setShowShare(!showShare)}
                  className="hover:border-ink hover:bg-ink mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 12v.01M12 4v.01M20 12v.01M12 20v.01M8.59 8.59L7 7m0 10l1.59-1.59M16.41 8.59L18 7m0 10l-1.59-1.59"
                    />
                  </svg>
                </button>

                {showShare && (
                  <div className="absolute top-10 left-0 z-10 flex gap-3 bg-white shadow-md p-3 rounded-xl">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        currentUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600"
                      title="Facebook"
                    >
                      <FaFacebookF size={20} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        currentUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500"
                      title="Twitter"
                    >
                      <FaTwitter size={20} />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        currentUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500"
                      title="WhatsApp"
                    >
                      <FaWhatsapp size={20} />
                    </a>
                    <button
                      onClick={handleCopyLink}
                      title="Salin Link"
                      className="text-gray-700"
                    >
                      <FaLink size={20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* GAMBAR DAN ISI */}
          <div className="mb-12">
            <img
              src={artikelInfo.foto}
              className="mb-2 h-auto w-full rounded-md lg:h-[600px]"
              alt="image"
            />
            <p className="text-center text-sm italic text-gray-500">
              {artikelInfo.caption || "Ilustrasi gambar"}
            </p>
          </div>
          <div>
            <p className="mb-4">{artikelInfo.isi}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtikelDetail;
