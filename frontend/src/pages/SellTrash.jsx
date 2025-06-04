import React, { useState, useEffect, useContext } from "react";
import TrashForm from "../components/Form/TrashForm";
import TrashUpload from "../components/Form/TrashUpload";
import DeliveryMap from "../components/Form/DeliveryMap";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContex";
import { toast } from "react-toastify";
import axios from "axios";

const SellTrash = () => {
  const location = useLocation();
  const jenisSampahDariDeteksi = location.state?.jenisSampah || "";
  const pointsDariDeteksi = location.state?.points || "";
  const [delivery, setDelivery] = useState("Diantar");
  const [trashImg, setTrashImg] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const { backendUrl, token } = useContext(AppContext);

  const [formData, setFormData] = useState({
    jenisSampah: "",
    jumlah: "",
    points: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      jenisSampah: jenisSampahDariDeteksi,
      points: pointsDariDeteksi,
    }));
  }, [jenisSampahDariDeteksi, pointsDariDeteksi]);

  useEffect(() => {
    if (delivery === "Dijemput") {
      getUserLocation();
    }
  }, [delivery]);

  const estimasiPoints =
    formData.jumlah && formData.points
      ? Number(formData.jumlah) * Number(formData.points)
      : 0;

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation tidak didukung browser ini.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });

        // Optional: Reverse Geocoding pakai Nominatim API
        try {
          const res = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          setAddress(res.data.display_name || "Alamat tidak ditemukan");
        } catch (err) {
          setAddress("Gagal mengambil alamat");
        }
      },
      (error) => {
        toast.error("Gagal mengambil lokasi");
        console.error(error);
      }
    );
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("jenis", formData.jenisSampah);
      form.append("jumlah", formData.jumlah);
      form.append("estimasiPoin", estimasiPoints);
      form.append("metode", delivery);

      const baseCampLoc = { lat: -6.322195, lng: 106.979335 };
      const baseCampAddress = "TPST Bantar Gebang, Bekasi, Jawa Barat";


      if (delivery === "Dijemput" && userLocation) {
        form.append(
          "lokasi",
          JSON.stringify({ line1: userLocation, line2: address })
        );
      }

      if (delivery === "Diantar") {
      form.append(
        "lokasi",
        JSON.stringify({
          line1: baseCampLoc,
          line2: baseCampAddress,
        })
      );
    }

      if (trashImg) {
        form.append("foto", trashImg); // ⬅️ Upload file ke form
      }

      const { data } = await axios.post(`${backendUrl}/sampah`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      toast.success("Data berhasil dikirim!");

      // Opsional: Reset form
      setFormData({ jenisSampah: "", jumlah: "", points: "" });
      setTrashImg("");

      navigate("/my-profile");
    } catch (error) {
      toast.error("Gagal mengirim data");
      console.error(error);
    }
  };

  return (
    <div>
      <div
        className="relative w-full h-28S bg-cover bg-top"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
        <div className="relative z-10 mx-4 sm:mx-[8%]">
          <Navbar />
        </div>
      </div>

      <div className=" text-center py-20">
        <span className="inline-flex items-center justify-center rounded-full bg-green-apple px-3 py-1 font-semibold mb-2 text-emerald-700">
          <p className="text-sm whitespace-nowrap">Form</p>
        </span>
        <p className="mb-2 text-5xl sm:text-3xl text-ink font-bold">
          Formulir Sampah
        </p>
      </div>

      <div className="relative  mx-4 mb-8 sm:mx-[8%]">
        <div className="relative pb-20 w-full h-full bg-[#F9FAFB] p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <TrashForm formData={formData} handleChange={handleChange} />
            <TrashUpload trashImg={trashImg} setTrashImg={setTrashImg} />

            <div>
              <label className="block my-1 font-medium text-gray-700">
                Total
              </label>
              <input
                type="number"
                value={estimasiPoints}
                disabled
                className="w-full mb-1 border border-gray-300 rounded-lg p-2 bg-gray-100 text-gray-600"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Metode pengiriman
              </label>
              <select
                onChange={(e) => setDelivery(e.target.value)}
                value={delivery}
                className="border rounded px-3 py-2 w-full"
              >
                <option value="Diantar">Diantar</option>
                {estimasiPoints >= 500 && (
                  <option value="Dijemput">Dijemput</option>
                )}
              </select>
            </div>

            <DeliveryMap
              delivery={delivery}
              userLocation={userLocation}
              address={address}
            />

            <button
              type="submit"
              className="hover:bg-[#BF9264] bg-orange-400 text-white px-6 py-2 rounded-lg  transition duration-200"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellTrash;
