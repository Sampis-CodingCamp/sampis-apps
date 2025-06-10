import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../../context/AppContex';
import axios from 'axios';
import { toast } from 'react-toastify';

const PopUpForm = ({ itemId, onClose }) => {
  const [itemData, setItemData] = useState(null);
  const [formData, setFormData] = useState({
    namaPenerima: '',
    telp: '',
    alamat: '',
  });

  const { backendUrl, token } = useContext(AppContext);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await axios.get(`${backendUrl}/item/${itemId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        if (data.status === 'success') {
          setItemData(data.data);
        } else {
          toast.error(data.message);
        }
      } catch (err) {
        console.error('Gagal mengambil data item:', err);
        toast.error('Gagal mengambil data item');
      }
    };

    fetchItem();
  }, [itemId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!itemData) return;

    try {
      const payload = {
        namaItem: itemData.nama,
        jumlah: itemData.poin,
        namaPenerima: formData.namaPenerima,
        telp: formData.telp,
        alamat: formData.alamat,
        foto: itemData.foto,
      };

      const { data } = await axios.post(`${backendUrl}/poin/tukar`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });

      toast.success("Penukaran Sampoint sedang diproses!");
      onClose();
    } catch (err) {
      console.error(err);
      toast.error('Gagal mengirim pemesanan');
    }
  };

  if (!itemData)
    return (
      <div className="fixed inset-0 bg-black/20 z-50 flex justify-center items-center text-white">
        Loading...
      </div>
    );

  return (
    <div className="fixed inset-0 bg-black/20 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">Form Pemesanan</h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm text-gray-700">
          <div>
            <label className="block mb-1 font-medium">Nama Item</label>
            <input
              type="text"
              value={itemData.nama}
              readOnly
              className="w-full rounded-xl border px-4 py-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Poin Dibutuhkan</label>
            <input
              type="text"
              value={itemData.poin}
              readOnly
              className="w-full rounded-xl border px-4 py-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Nama Penerima</label>
            <input
              type="text"
              name="namaPenerima"
              required
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              className="w-full rounded-xl border px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Nomor Telepon</label>
            <input
              type="tel"
              name="telp"
              required
              onChange={handleChange}
              placeholder="Contoh: 081234567890"
              className="w-full rounded-xl border px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Alamat Pengiriman</label>
            <textarea
              name="alamat"
              required
              onChange={handleChange}
              placeholder="Masukkan alamat lengkap"
              className="w-full rounded-xl border px-4 py-2 resize-none"
              rows={3}
            ></textarea>
          </div>

          <div className="flex justify-between items-center gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="w-1/2 bg-emerald-700 text-white py-2 rounded-xl hover:bg-emerald-800 transition cursor-pointer"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopUpForm;
