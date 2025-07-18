import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContex";
import { assets } from "../../assets/assets";

const AllConvert = () => {
  const { convert, getAllConvert, updateStatus } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalLokasiOpen, setModalLokasiOpen] = useState(false);
  const [modalLokasiData, setModalLokasiData] = useState(null);

  const renderLokasi = (lokasiStr) => {
    try {
      const lokasi =
        typeof lokasiStr === "string" ? JSON.parse(lokasiStr) : lokasiStr;

      const lat = lokasi.line1?.lat ?? "-";
      const lng = lokasi.line1?.lng ?? "-";
      const alamat = lokasi.line2 ?? "-";

      return { lat, lng, alamat };
    } catch (error) {
      return { lat: "-", lng: "-", alamat: "Format lokasi tidak valid" };
    }
  };

  const formatTanggal = (isoString) => {
    if (!isoString) return "-";

    const date = new Date(isoString);

    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  useEffect(() => {
    getAllConvert();
  }, []);

  const openModalImg = (imgUrl) => {
    setModalImg(imgUrl);
    setModalOpen(true);
  };

  const closeModalImg = () => {
    setModalOpen(false);
    setModalImg("");
  };

  const openModalLokasi = (lokasiStr) => {
    const lokasi = renderLokasi(lokasiStr);
    setModalLokasiData(lokasi);
    setModalLokasiOpen(true);
  };

  const closeModalLokasi = () => {
    setModalLokasiOpen(false);
    setModalLokasiData(null);
  };

  const handleApprove = (id) => {
    updateStatus(id, "Diterima");
  };

  const handleReject = (id) => {
    updateStatus(id, "Dibatalkan");
  };

  return (
    <div className="grow p-8">
      <h2 className="text-2xl mb-4">Semua Data Sampah</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"></div>
      <div className="w-full">
        <div className="bg-white border border-gray-100 rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll shadow-sm">
          {/* Header */}
          <div className="hidden sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_1.2fr_3fr_1.2fr_1.2fr_1fr_1fr] py-3 px-6 border-b bg-gray-100 text-gray-700 font-semibold select-none">
            <p>#</p>
            <p>User</p>
            <p>Jenis</p>
            <p>Jumlah</p>
            <p>Poin</p>
            <p>Metode</p>
            <p>Lokasi</p>
            <p>Tanggal</p>
            <p>Bukti Foto</p>
            <p>Aksi</p>
          </div>

          {[...convert]
            .slice()
            .reverse()
            .map((item, index) => {
              const lokasi = renderLokasi(item.lokasi);
              return (
                <div
                  key={item._id}
                  className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_2fr_1fr_1fr_1.2fr_3fr_1.2fr_1.2fr_1fr_1fr] items-center text-gray-700 py-3 border-b border-gray-100 px-6 hover:bg-gray-50 transition gap-x-2"
                >
                  <p className="max-sm:hidden">{index + 1}</p>
                  <p className="truncate">{item.user?.username || "Unknown"}</p>
                  <p className="capitalize max-sm:hidden">{item.jenis}</p>
                  <p className="max-sm:hidden text-center">{item.jumlah} Kg</p>
                  <p className="max-sm:hidden ">{item.estimasiPoin}</p>
                  <p className="capitalize max-sm:hidden text-xs">
                    {item.metode}
                  </p>
                  <p
                    onClick={() => openModalLokasi(item.lokasi)}
                    className="text-xs max-w-xs truncate cursor-pointer text-blue-600 hover:underline"
                    title="Klik untuk lihat detail lokasi"
                  >
                    {renderLokasi(item.lokasi).alamat}
                  </p>
                  <p className="max-sm:hidden text-xs text-center">
                    {formatTanggal(item.tanggal)}
                  </p>

                  {/* Bukti Foto */}
                  <div className="flex justify-start max-sm:mt-2">
                    {item.foto ? (
                      <img
                        src={item.foto}
                        alt="Bukti"
                        className="w-16 h-16 rounded-lg object-cover cursor-pointer shadow-sm hover:scale-105 transition-transform"
                        onClick={() => openModalImg(item.foto)}
                      />
                    ) : (
                      <span className="text-gray-400 italic text-xs">
                        Tidak ada foto
                      </span>
                    )}
                  </div>

                  {/* Aksi */}
                  <div className="flex flex-col items-center gap-1">
                    {item.status === "Menunggu" ? (
                      <div className="flex gap-2">
                        <img
                          src={assets.cancel_icon}
                          alt="Reject"
                          className="w-8 cursor-pointer"
                          onClick={() => handleReject(item._id)}
                          title="Tolak"
                        />
                        <img
                          src={assets.tick_icon}
                          alt="Approve"
                          className="w-8 cursor-pointer"
                          onClick={() => handleApprove(item._id)}
                          title="Setujui"
                        />
                      </div>
                    ) : (
                      <span
                        className={`font-semibold text-xs capitalize ${
                          item.status === "Diterima"
                            ? "text-green-600"
                            : item.status === "Dibatalkan"
                            ? "text-red-500"
                            : "text-gray-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        {/* Modal Foto */}
        {modalOpen && (
          <div
            className="fixed inset-0 bg-black/30 flex justify-center items-center z-50"
            onClick={closeModalImg}
            role="dialog"
            aria-modal="true"
          >
            <img
              src={modalImg}
              alt="Foto Bukti Besar"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* Modal Lokasi */}
        {modalLokasiOpen && modalLokasiData && (
          <div
            className="fixed inset-0 bg-black/30 flex flex-col justify-center items-center z-50 p-4"
            onClick={closeModalLokasi}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg cursor-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold mb-4">Detail Lokasi</h3>
              <p className="mb-2 font-medium">Alamat:</p>
              <p className="mb-4 text-gray-700 whitespace-pre-wrap">
                {modalLokasiData.alamat}
              </p>
              <p className="font-medium">Latitude:</p>
              <p className="mb-4 text-gray-700">{modalLokasiData.lat}</p>
              <p className="font-medium">Longitude:</p>
              <p className="mb-4 text-gray-700">{modalLokasiData.lng}</p>
              <button
                onClick={closeModalLokasi}
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllConvert;
