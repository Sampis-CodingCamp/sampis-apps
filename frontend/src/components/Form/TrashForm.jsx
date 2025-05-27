import React from "react";

const TrashForm = ({ formData, handleChange }) => {
  return (
    <>
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Jenis Sampah
        </label>
        <input
          type="text"
          name="jenisSampah"
          value={formData.jenisSampah}
          disabled
          className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-600 cursor-not-allowed"
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Point /kg
        </label>
        <input
          type="text"
          name="points"
          value={formData.points}
          disabled
          className="w-full bg-gray-100 border border-gray-300 rounded-lg p-2 text-gray-600 cursor-not-allowed"
          required
        />
      </div>

      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Jumlah sampah /kg
        </label>
        <input
          type="number"
          name="jumlah"
          placeholder="masukkan jumlah sampah anda"
          value={formData.jumlah}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
          required
        />
      </div>
    </>
  );
};

export default TrashForm;
