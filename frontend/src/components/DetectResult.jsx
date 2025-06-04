import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContex";
import trashInfo from "./TrashHandleInfo";

const DetectedResult = ({ image, result }) => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  const handleSellClick = () => {
    if (token) {
      navigate("/sellTrash", { state: { jenisSampah: result.type, points: result.points } });
    } else {
      navigate("/login");
    }
  };

  // Cek kalo result.type ada di trashInfo
  const info = trashInfo[result.type] || {
    usage: "Informasi tidak tersedia.",
    links: [],
  };

  return (
    <div className="border-2 border-dashed border-[#8F8F8F] rounded-md p-6 mt-6">
      <p className="font-semibold mb-2">
        Jenis sampah: <span className="font-normal">{result.type}</span>
      </p>
      <p className="mb-2 font-semibold">
        Pemanfaatan sampah:{" "}
        <span className="font-normal text-gray-700">{info.usage}</span>
      </p>
      <p className="mb-4">
        <strong>Poin yang didapat:</strong>{" "}
        <span className="text-green-600 font-semibold">{result.points} poin /Kg</span>
      </p>

      <img
        src={image}
        alt="Hasil Deteksi"
        className="w-full max-h-[300px] object-contain rounded"
      />

      {/* Tampilkan link sumber jika ada */}
      {info.links.length > 0 && (
        <div className="mt-4">
          <p className="font-semibold mb-1">Referensi & Bacaan Lebih Lanjut:</p>
          <ul className="list-disc list-inside text-sm text-blue-600 space-y-1">
            {info.links.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-end mt-6">
        <button
          onClick={handleSellClick}
          className="hover:bg-[#BF9264] bg-orange-400 text-white font-medium px-6 py-2 rounded hover:scale-105 transition"
        >
          Jual Sampah
        </button>
      </div>
    </div>
  );
};

export default DetectedResult;
