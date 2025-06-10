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
              key={index}
              onClick={() => navigate(`/artikel/${item._id}`)}
              className="cursor-pointer group flex flex-col justify-between rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="pb-6">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                  <img
                    className="h-auto w-full rounded-t-sm align-middle transition duration-300 ease-linear sm:h-56"
                    src={item.foto}
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="px-6">
                <div className="flex-1">
                  <div className="flex">
                    <div className="flex w-1/2 justify-start space-x-2">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="h-4 w-4 flex-shrink-0"
                        >
                          <path
                            fill="currentColor"
                            d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
                          />
                        </svg>
                        <span className="ml-2 text-sm text-orange">
                          {item.sumber}
                        </span>
                      </div>
                    </div>
                    <div className="flex w-1/2 justify-start space-x-2">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4 text-ginger"
                        >
                          <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                          <path
                            fillRule="evenodd"
                            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <time
                          dateTime={item.date}
                          className="ml-2 text-sm text-wolf"
                        >
                          {formatTanggal(item.tanggal)}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 px-6 py-6">
                <p className="mb-3 text-lg font-medium">{item.judul}</p>
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
