import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContex";
import axios from "axios";
import { toast } from "react-toastify";
import Points from "./points";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const { userData, setUserData, backendUrl, token, loadProfileUserData } =
    useContext(AppContext);

  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tempData, setTempData] = useState(null);

  // Log userData setiap kali berubah

  const handleCancelEdit = () => {
    console.log("Cancel edit clicked");
    if (tempData) {
      console.log("Restoring tempData:", tempData);
      setUserData(tempData); // restore
    }
    setIsEdit(false);
    setImage(null);
  };

  const updateUserProfileData = async () => {
    if (!userData.username || !userData.phone) {
      toast.error("Username dan nomor telepon wajib diisi");

      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("username", userData.username);
      formData.append("email", userData.email);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("phone", userData.phone);

      if (image) {
        formData.append("foto", image);
      }

      const { data } = await axios.put(
        `${backendUrl}/users/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (data.success || data.status === "success") {
        toast.success(data.message);
        await loadProfileUserData();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
        console.log("Update failed:", data.message);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  // Helper function untuk mendapatkan profile image URL
  const getProfileImageUrl = () => {
    if (image) {
      return URL.createObjectURL(image);
    }
    // Gunakan 'foto' sesuai dengan schema dan backend
    return userData?.foto || assets.profilee;
  };

  useEffect(() => {
  const interval = setInterval(() => {
    loadProfileUserData();
  }, 20000); 

  return () => clearInterval(interval); 
}, []);


  return (
    userData && (
      <div>
        <div
          className="relative w-full h-18 md:h-20 lg:h-24 bg-cover bg-top"
          style={{ backgroundImage: `url(${assets.header_img})` }}
        >
          <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
          <div className="relative container pt-16 lg:pt-24">
            <Navbar />
          </div>
        </div>

        <section className="py-16">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 lg:pr-5 mb-5">
                <div className="rounded-lg border border-gray-200 text-gray-900">
                  <div className="h-20 overflow-hidden rounded-t-lg">
                    <img
                      className="w-full object-cover object-top"
                      src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
                      alt="Background"
                    />
                  </div>

                  <div className="relative -mt-14 ml-4 h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-white">
                    <img
                      className="h-full w-full object-cover rounded-full"
                      src={getProfileImageUrl()}
                      alt="Profile"
                      onError={(e) => {
                        e.target.src = assets.upload;
                      }}
                    />
                  </div>

                  <div className="px-4 py-5">
                    <div className="rounded-md bg-blue-50 p-6">
                      {/* Username */}
                      <div className="mb-4">
                        <p className="text-gray-500">Nama</p>
                        {isEdit ? (
                          <input
                            className="bg-gray-50 text-xl font-medium w-full p-2 border rounded"
                            type="text"
                            value={userData.username || ""}
                            onChange={(e) => {
                              setUserData((prev) => ({
                                ...prev,
                                username: e.target.value,
                              }));
                            }}
                          />
                        ) : (
                          <p className="text-2xl font-semibold text-ink">
                            {userData?.username || "-"}
                          </p>
                        )}
                      </div>

                      {/* Phone */}
                      <hr className="my-5 h-px border-0 bg-gray-300" />
                      <div className="mb-4">
                        <p className="text-gray-500">Nomor Telepon</p>
                        {isEdit ? (
                          <input
                            className="bg-gray-100 w-full p-2 border rounded"
                            type="text"
                            value={userData.phone || ""}
                            onChange={(e) => {
                              setUserData((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }));
                            }}
                          />
                        ) : (
                          <p className="text-base font-semibold text-ink">
                            {userData?.phone || "-"}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <hr className="my-5 h-px border-0 bg-gray-300" />
                      <div className="mb-4">
                        <p className="text-gray-500">Email</p>
                        <p className="text-base font-semibold text-ink">
                          {userData?.email || "-"}
                        </p>
                      </div>

                      {/* Address */}
                      <hr className="my-5 h-px border-0 bg-gray-300" />
                      <div>
                        <p className="text-gray-500">Alamat</p>
                        {isEdit ? (
                          <>
                            <input
                              className="bg-gray-50 mb-2 w-full p-2 border rounded"
                              type="text"
                              placeholder="Alamat 1"
                              value={userData.address?.line1 || ""}
                              onChange={(e) => {
                                setUserData((prev) => ({
                                  ...prev,
                                  address: {
                                    ...prev.address,
                                    line1: e.target.value,
                                  },
                                }));
                              }}
                            />
                            <input
                              className="bg-gray-50 w-full p-2 border rounded"
                              type="text"
                              placeholder="Alamat 2"
                              value={userData.address?.line2 || ""}
                              onChange={(e) => {
                                setUserData((prev) => ({
                                  ...prev,
                                  address: {
                                    ...prev.address,
                                    line2: e.target.value,
                                  },
                                }));
                              }}
                            />
                          </>
                        ) : (
                          <p className="text-base text-ink">
                            {userData.address?.line1}
                            <br />
                            {userData.address?.line2}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="mt-8 flex gap-4">
                      {isEdit ? (
                        <>
                          <button
                            className="border border-green-500 text-green-600 px-8 py-2 rounded-full hover:bg-green-500 hover:text-white transition-all cursor-pointer"
                            onClick={updateUserProfileData}
                            disabled={loading}
                          >
                            {loading ? "Menyimpan..." : "Simpan Informasi"}
                          </button>
                          <button
                            className="border border-red-500 text-red-500 px-8 py-2 rounded-full hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                            onClick={handleCancelEdit}
                          >
                            Batal
                          </button>
                        </>
                      ) : (
                        <button
                          className="border border-orange text-orange px-8 py-2 rounded-full hover:bg-orange hover:text-white transition-all cursor-pointer"
                          onClick={() => {
                            setTempData({ ...userData }); // simpan sebelum edit
                            setIsEdit(true);
                          }}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* POINT SECTION */}
              <div className="w-full lg:w-4/12">
                <div className="mb-10 rounded-lg border border-gray-200 text-gray-900">
                  <div className="px-4 py-5">
                    <div className="rounded-md p-4">
                      <p className="text-sm font-light italic text-gray-500">
                        Poin
                      </p>
                      <p className="mb-4 text-2xl font-semibold text-ginger">
                        {userData?.poin || 0}
                      </p>
                      <hr className="my-5 h-px border-0 bg-gray-300" />
                      <div className="text-sm text-ink flex items-center">
                        <svg
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>
                        Poin didapatkan dari berbagai 
                        <span
                          onClick={() => {
                            document
                              .getElementById("point")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="text-blue-500 cursor-pointer underline hover:text-blue-700 "
                        >
                          aktivitas
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END POINT */}
            </div>
          </div>
          <Points />
        </section>
      </div>
    )
  );
};

export default MyProfile;
