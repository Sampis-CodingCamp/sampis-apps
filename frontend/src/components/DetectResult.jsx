// DetectedResult.js
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContex";

const DetectedResult = ({ image, result }) => {

  const navigate = useNavigate();
  const {token} = useContext(AppContext)

  const handleSellClick = () => {

    if (token) {
      navigate("/sellTrash", { state: { jenisSampah: result.type } });
    } else {
      navigate("/login");
    }
  };


  return (
    <div className="border-2 border-dashed border-[#8F8F8F] rounded-md p-6 mt-6">
      <p className="font-semibold mb-2">
        Jenis sampah: <span className="font-normal">{result.type}</span>
      </p>
      <p className="mb-2 font-semibold">
        Pemanfaatan sampah: <span className="font-normal text-gray-700">{result.usage}</span>
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
