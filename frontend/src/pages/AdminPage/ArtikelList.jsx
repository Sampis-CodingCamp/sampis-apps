import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContex";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Trash2, UserPen } from "lucide-react";

const ArtikelList = () => {
  const { artikel, formatTanggal, backendUrl, token, getArtikelData } =
    useContext(AppContext);
  const navigate = useNavigate();

  const [selectedArtikel, setSelectedArtikel] = useState(null);
  const [form, setForm] = useState({
    judul: "",
    isi: "",
    sumber: "",
    foto: null,
  });
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await axios.delete(`${backendUrl}/artikel/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      toast.success("Artikel berhasil dihapus!");
      getArtikelData();
    } catch (error) {
      console.log("Data gagal dihapus", error);
      toast.error(error.message);
    }
  };

  const openEditModal = (e, item) => {
    e.stopPropagation();
    setSelectedArtikel(item);
    setForm({
      judul: item.judul,
      isi: item.isi,
      sumber: item.sumber,
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
    formData.append("judul", form.judul);
    formData.append("isi", form.isi);
    formData.append("sumber", form.sumber);
    if (form.foto) {
      formData.append("foto", form.foto);
    }

    try {
      await axios.put(
        `${backendUrl}/artikel/${selectedArtikel._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      toast.success("Artikel berhasil diperbarui!");
      setShowModal(false);
      getArtikelData();
    } catch (error) {
      toast.error("Gagal update artikel");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="grow p-8">
        <h2 className="text-2xl mb-4">Daftar Artikel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artikel.map((item, index) => (
            <div
              onClick={() => navigate(`/artikel-admin/${item._id}`)}
              key={index}
              className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={item.foto}
                  alt={item.judul}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
              <div className="p-4 bg-white">
                <p className="mb-1 text-sm font-medium text-wolf flex justify-between">
                  <span className="text-orange">{item.sumber}</span>
                  <span className="text-gray-500">
                    {formatTanggal(item.tanggal)}
                  </span>
                </p>
                <p className="text-lg font-bold text-ink line-clamp-2">
                  {item.judul}
                </p>
              </div>
              <div className="p-4 flex justify-end gap-2 bg-gray-50 border-t border-dashed border-gray-200">
                <button
                  onClick={(e) => openEditModal(e, item)}
                  className="flex items-center gap-2 bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-md hover:bg-blue-200 transition cursor-pointer"
                >
                  <UserPen size={16} />
                  Edit
                </button>
                <button
                  onClick={(e) => handleDelete(e, item._id)}
                  className="flex items-center gap-2 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-md hover:bg-red-200 transition cursor-pointer"
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
              <h2 className="text-xl font-bold">Edit Artikel</h2>
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <input
                  type="text"
                  name="judul"
                  value={form.judul}
                  onChange={handleInputChange}
                  placeholder="Judul"
                  className="w-full border p-2 rounded"
                  required
                />
                <textarea
                  name="isi"
                  value={form.isi}
                  onChange={handleInputChange}
                  placeholder="Isi artikel"
                  className="w-full border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="sumber"
                  value={form.sumber}
                  onChange={handleInputChange}
                  placeholder="Sumber"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="file"
                  name="foto"
                  accept="image/*"
                  onChange={handleInputChange}
                  className="w-full"
                />
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

export default ArtikelList;
