import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContex";

const PendingPenukaran = () => {
  const { poin, getAllPoin, updateStatusPoin } = useContext(AppContext);

  useEffect(() => {
    getAllPoin();
  }, []);

  const handleApprove = (id) => {
    updateStatusPoin(id, "Diterima");
  };

  const handleReject = (id) => {
    updateStatusPoin(id, "Dibatalkan");
  };

  const statusOrder = { Menunggu: 1, Diterima: 2, Dibatalkan: 3 };

  const sortedData = poin
    .filter((item) =>
      ["Menunggu", "Diterima", "Dibatalkan"].includes(item.status)
    )
    .sort((a, b) => {
      const statusCompare = statusOrder[a.status] - statusOrder[b.status];
      if (statusCompare !== 0) return statusCompare;
      return new Date(b.tanggal) - new Date(a.tanggal);
    });

  return (
    <div>
      <section className="bg-[#f9f9fc] rounded-lg p-4 text-gray-700 text-xs">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-sm">Penukaran Point</h2>
        </div>

        <ul className="flex flex-col gap-3">
          {sortedData.map((item) => (
            <li
              key={item._id}
              className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm select-none"
            >
              <img
                alt={item.namaItem}
                className="w-30 h-30 rounded object-cover"
                src={item.foto}
              />
              <div className="flex-1">
                <div className="text-sm font-bold text-gray-900 truncate">
                  {item.namaItem}
                </div>
                <div className="text-gray-700 text-xs mt-0.5 truncate">
                  {item.namaPenerima}
                </div>
                <div className="text-gray-600 text-xs truncate">
                  +62 {item.telp}
                </div>
                <div className="text-gray-600 text-xs truncate">
                  {item.alamat}
                </div>

                <div className="mt-2">
                  {item.status === "Menunggu" ? (
                    <div className="flex gap-2">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                        onClick={() => handleReject(item._id)}
                      >
                        Tolak
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                        onClick={() => handleApprove(item._id)}
                      >
                        Setujui
                      </button>
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

              <div className="text-right">
                <div className="font-semibold">{item.jumlah} poin</div>
                <div className="text-gray-500">
                  {new Date(item.tanggal).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default PendingPenukaran;
