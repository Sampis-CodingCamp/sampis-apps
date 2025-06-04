import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContex";
import { assets } from "../../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";

const AddItem = () => {
  const [itemImg, setItemImg] = useState(false);
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [poin, setPoin] = useState("");
  const [jenis, setJenis] = useState("");
  const [stok, setStok] = useState("");

  const { backendUrl, token } = useContext(AppContext);
  
  const onSubmitHandler = async (event) => {
    event.preventDefault();

      try {
      if (!itemImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();
      formData.append("foto", itemImg);
      formData.append("nama", nama);
      formData.append("poin", poin);
      formData.append("jenis", jenis);
      formData.append("stok", stok);
      formData.append("deskripsi", deskripsi);

      const { data } = await axios.post(backendUrl + "/item", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (data.status === "success") {
        toast.success("Barang berhasil ditambah");
        setItemImg(false);
        setNama("");
        setPoin("");
        setJenis("");
        setStok("");
        setDeskripsi("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  }



  return (
    <div className="grow p-8">
      <h2 className="text-2xl font-bold mb-6">Tambah Barang</h2>

      <form
       onSubmit={onSubmitHandler}
       className="bg-white shadow-lg rounded-xl p-8 space-y-8 max-w-5xl mx-auto">
        {/* Upload Image */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <label htmlFor="psi-img" className="cursor-pointer">
            <div className="w-48 h-32 bg-gray-200 border rounded-md flex items-center justify-center overflow-hidden">
              <img
                src={itemImg ? URL.createObjectURL(itemImg) : assets.upload}
                className="object-cover w-full h-full"
                alt="Upload"
              />
            </div>
          </label>
          <input
            onChange={(e) => setItemImg(e.target.files[0])}
            type="file"
            id="psi-img"
            hidden
          />
          <p className="text-sm text-gray-500 text-center md:text-left">
            Klik gambar untuk mengunggah <br /> gambar barang
          </p>
        </div>

        {/* Nama & Poin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Nama Barang
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukan Nama Barang"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Poin Barang
            </label>
            <input
              type="number"
              value={poin}
              onChange={(e) => setPoin(e.target.value)}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukan Poin"
              required
            />
          </div>
        </div>

        {/* Stok & Jenis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Stok Barang
            </label>
            <input
              type="text"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukan Stok Barang"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Jenis Barang
            </label>
            <select
              onChange={(e) => setJenis(e.target.value)}
              value={jenis}
              required
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Pilih Jenis</option>
              <option value="Eco Friendly">Eco Friendly</option>
              <option value="Electronic">Electronic</option>
            </select>
          </div>
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Deskripsi Barang
          </label>
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Masukan deskripsi barang"
            rows={6}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all"
          >
            Tambah Barang
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
