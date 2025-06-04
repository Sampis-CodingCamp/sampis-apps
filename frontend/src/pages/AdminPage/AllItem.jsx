import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContex";
import axios from "axios";
import { toast } from "react-toastify";
import { UserPen, Trash2 } from "lucide-react";

const AllItem = () => {
  const { item, formatTanggal, backendUrl, token, getItem } =
    useContext(AppContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [form, setForm] = useState({
    nama: "",
    poin: "",
    jenis: "",
    stok: "",
    deskripsi: "",
    foto: null,
  });

  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await axios.delete(`${backendUrl}/item/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      toast.success("Artikel berhasil dihapus!");
      getItem();
    } catch (error) {
      console.log("Data gagal dihapus", error);
      toast.error(error.message);
    }
  };

  const openEditModal = (e, item) => {
    e.stopPropagation();
    setSelectedItem(item);
    setForm({
      nama: item.nama,
      poin: item.poin,
      jenis: item.jenis,
      stok: item.stok,
      deskripsi: item.deskripsi,
      foto: null,
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto") {
      setForm({ ...form, foto: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", form.nama);
    formData.append("deskripsi", form.deskripsi);
    formData.append("jenis", form.jenis);
    formData.append("stok", form.stok);
    formData.append("poin", form.poin);

    if (form.foto) {
      formData.append("foto", form.foto);
    }

    try {
      await axios.put(`${backendUrl}/item/${selectedItem._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      toast.success("Item berhasil diperbarui!");
      setShowModal(false);
      getItem();
    } catch (error) {
      toast.error("Gagal update Item");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grow p-8">
        <h2 className="text-2xl mb-4">Daftar Barang</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {item.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow hover:shadow-lg bg-white transition duration-300 border border-gray-100"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={item.foto}
                  alt={item.nama}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between text-sm mb-2 text-gray-500">
                  <span className="font-medium text-orange-500">
                    Stok: {item.stok}
                  </span>
                  <span className="font-medium text-blue-600">
                    Poin: {item.poin}
                  </span>
                </div>

                <p className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                  {item.nama}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.deskripsi}
                </p>
              </div>

              <div className="p-4 border-t border-gray-100 flex justify-end gap-2 bg-gray-50">
                <button
                  onClick={(e) => openEditModal(e, item)}
                  className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition"
                >
                  <UserPen size={16} />
                  Edit
                </button>
                <button
                  onClick={(e) => handleDelete(e, item._id)}
                  className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition"
                >
                  <Trash2 size={16} />
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL EDIT */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-xl shadow-lg space-y-4">
              <h2 className="text-xl font-bold">Edit Barang</h2>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="nama"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Nama Barang
                  </label>
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    value={form.nama}
                    onChange={handleInputChange}
                    placeholder="Nama barang"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="deskripsi"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Deskripsi
                  </label>
                  <textarea
                    name="deskripsi"
                    id="deskripsi"
                    value={form.deskripsi}
                    onChange={handleInputChange}
                    placeholder="Deskripsi barang"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="poin"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Poin
                  </label>
                  <input
                    type="number"
                    name="poin"
                    id="poin"
                    value={form.poin}
                    onChange={handleInputChange}
                    placeholder="Poin"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="stok"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Stok
                  </label>
                  <input
                    type="number"
                    name="stok"
                    id="stok"
                    value={form.stok}
                    onChange={handleInputChange}
                    placeholder="Jumlah stok"
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="jenis"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Jenis Barang
                  </label>
                  <select
                    name="jenis"
                    id="jenis"
                    onChange={handleInputChange}
                    value={form.jenis}
                    required
                    className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Pilih Jenis</option>
                    <option value="Eco Friendly">Eco Friendly</option>
                    <option value="Electronic">Electronic</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="foto"
                    className="block mb-1 font-medium text-gray-700"
                  >
                    Foto
                  </label>
                  <input
                    type="file"
                    name="foto"
                    id="foto"
                    accept="image/*"
                    onChange={handleInputChange}
                    className="w-full"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllItem;
