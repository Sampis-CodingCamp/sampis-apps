import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContex";
import axios from "axios";
import { toast } from "react-toastify";
import { CheckCircle, XCircle, Clock } from "lucide-react";

const Penukaran = () => {
  const { backendUrl, token } = useContext(AppContext);
  const [penukaran, setPenukaran] = useState([]);

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

  const formatTanggal = (isoDate) => {
    const date = new Date(isoDate);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const getPenukaran = async () => {
    try {
      const res = await axios.get(`${backendUrl}/poin/user`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      if (res.data.status === "success") {
        setPenukaran(res.data.data.reverse());
      } else {
        console.warn("Status bukan success:", res.data);
      }
    } catch (err) {
      console.error("Gagal mengambil data:", err);
      toast.error("Gagal mengambil data");
    }
  };

  useEffect(() => {
    if (token) {
      getPenukaran(); // Ambil data awal

      const intervalId = setInterval(() => {
        getPenukaran(); // Ambil data setiap 10 detik
      }, 10000); // 10000 ms = 10 detik

      return () => clearInterval(intervalId); // Bersihkan interval saat komponen unmount
    }
  }, [token]);

  const getStatusInfo = (status) => {
    switch (status) {
      case "Diterima":
        return {
          text: "Disetujui",
          color: "bg-green-900 text-green-900",
          icon: <CheckCircle className="w-5 h-5" />,
        };
      case "Dibatalkan":
        return {
          text: "Dibatalkan",
          color: "bg-red-100 text-red-900",
          icon: <XCircle className="w-5 h-5" />,
        };
      default:
        return {
          text: "Menunggu",
          color: "bg-yellow-100 text-yellow-700",
          icon: <Clock className="w-5 h-5" />,
        };
    }
  };

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

      <div className="pb-8 pt-16">
        <div className="container">
          <h2 className="text-xl font-semibold text-zinc-700 border-b pb-3">
            Riwayat Penukaran
          </h2>

          <div className="my-6 space-y-6">
            {penukaran
              .sort((a, b) => {
                const priority = {
                  Diterima: 2,
                  Menunggu: 1,
                  Dibatalkan: 3,
                };
                const getPriority = (status) => priority[status] || 4;
                return getPriority(a.status) - getPriority(b.status);
              })
              .map((item, index) => {
                const statusInfo = getStatusInfo(item.status);
                return (
                  <article
                    key={index}
                    className="rounded-xl border-2 border-gray-100 bg-white transition-shadow"
                  >
                    <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                      <div className="shrink-0">
                        <img
                          src={item.foto}
                          alt={item.namaItem}
                          className="size-16 sm:size-20 rounded-lg object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 sm:text-lg">
                          {item.namaItem}
                        </h3>

                        <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                          <span className="font-medium text-emerald-600">
                            Poin Ditukar:
                          </span>{" "}
                          {item.jumlah}
                        </p>

                        <p className="text-sm text-gray-600 mt-1">
                          {item.namaPenerima}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          <span className="font-medium">Alamat:</span>{" "}
                          {item.alamat}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                          <p>{formatTanggal(item.tanggal)}</p>
                        </div>

                        {item.status === "Diterima" && (
                          <p className="mt-3 text-sm text-blue-800 bg-blue-50 px-3 py-2 rounded">
                            📦 Informasi pengiriman akan dikirimkan melalui
                            email Anda.
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <span
                        className={`-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl px-3 py-1.5 text-white text-[11px] sm:text-xs ${statusInfo.color.replace(
                          "bg-",
                          "bg-"
                        )}`}
                      >
                        {statusInfo.icon}
                        <span className="font-medium">{statusInfo.text}</span>
                      </span>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Penukaran;
