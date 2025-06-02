import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContex";
import { toast } from "react-toastify";
import axios from "axios";

const AddArtikel = () => {
  const [artikelImg, setartikelImg] = useState(false);
  const [judul, setJudul] = useState("");
  const [isi, setIsi] = useState("");
  const [sumber, setSumber] = useState("");

  const { backendUrl, token } = useContext(AppContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!artikelImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();
      formData.append("foto", artikelImg);
      formData.append("judul", judul);
      formData.append("isi", isi);
      formData.append("sumber", sumber);

      const { data } = await axios.post(backendUrl + "/artikel", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (data.status === "success") {
        toast.success("Artikel berhasil dibuat");
        setartikelImg(false);
        setJudul("");
        setIsi("");
        setSumber("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="grow p-8">
      <h2 className="text-2xl mb-4">Tambah Artikel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"></div>
      <div className="w-full">
        <form
          onSubmit={onSubmitHandler}
          className="bg-white shadow-md rounded-xl p-8 space-y-6"
        >
          {/* Upload Image */}
          <div className="flex items-center gap-6 text-gray-600">
            <label htmlFor="psi-img" className="cursor-pointer">
              <div className="w-48 h-32 bg-gray-500 border rounded-md flex items-center justify-center overflow-hidden">
                <img
                  src={
                    artikelImg ? URL.createObjectURL(artikelImg) : assets.upload
                  }
                  className="object-cover w-full h-full"
                />
              </div>
            </label>
            <input
              onChange={(e) => setartikelImg(e.target.files[0])}
              type="file"
              id="psi-img"
              hidden
            />
            <p className="text-sm text-gray-500">
              Klik gambar untuk mengunggah
              <br />
              banner artikel
            </p>
          </div>

          {/* Judul dan Sumber */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Judul Artikel
              </label>
              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Masukan judul artikel"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Sumber
              </label>
              <input
                type="text"
                value={sumber}
                onChange={(e) => setSumber(e.target.value)}
                className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Masukan sumber artikel"
                required
              />
            </div>
          </div>

          {/* Isi Artikel */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Isi Artikel
            </label>
            <textarea
              value={isi}
              onChange={(e) => setIsi(e.target.value)}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Masukan isi artikel"
              rows={6}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition cursor-pointer"
            >
              Buat artikel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtikel;
