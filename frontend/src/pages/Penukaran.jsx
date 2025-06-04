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
    if (token) getPenukaran();
  }, [token]);

  const getStatusInfo = (status) => {
    switch (status) {
      case "approved":
        return {
          text: "Disetujui",
          color: "bg-green-100 text-green-600",
          icon: <CheckCircle className="w-5 h-5" />,
        };
      case "cancel":
        return {
          text: "Dibatalkan",
          color: "bg-red-100 text-red-600",
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
        className="relative w-full h-28 bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        <div className="relative z-10 container pt-16 lg:pt-24">
          <Navbar />
        </div>
      </div>

      <div className="px-4 sm:px-[8%] mt-10">
        <h2 className="text-xl font-semibold text-zinc-700 border-b pb-3">
          Riwayat Penukaran
        </h2>

        <div className="my-6 space-y-6">
          {penukaran
            .sort((a, b) => {
              const priority = {
                approved: 2,
                pending: 1,
                cancel: 3,
              };
              const getPriority = (status) => priority[status] || 4;
              return getPriority(a.status) - getPriority(b.status);
            })
            .map((item, index) => {
              const statusInfo = getStatusInfo(item.status);
              return (
                <article
                  key={index}
                  className="rounded-xl border-2 border-gray-100 bg-white transition-shadow hover:shadow-md"
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
  );
};

export default Penukaran;
