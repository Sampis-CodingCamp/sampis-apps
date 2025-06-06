import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false
  );
  const [userData, setUserData] = useState(false);
  const [artikel, setArtikel] = useState([]);
  const [convert, setConvert] = useState([]);
  const [dashData, setDashData] = useState(false);
  const [item, setItem] = useState([]);
  const [poin, setPoin] = useState([])

  const getArtikelData = async () => {
    try {
      
      const { data } = await axios.get(backendUrl + "/artikel");
      

      if (data.status === "success") {
        setArtikel(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error); // Log error
      toast.error(error.message);
    }
  };

  const formatTanggal = (tanggalStr) => {
    const today = new Date();
    const date = new Date(tanggalStr);

    // Ambil hanya tanggal (tanpa jam)
    const todayDateOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const dateOnly = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );

    const diffTime = todayDateOnly - dateOnly;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Hari ini";
    if (diffDays === 1) return "1 hari lalu";
    if (diffDays === 2) return "2 hari lalu";
    if (diffDays === 3) return "3 hari lalu";

    // format tanggal biasa kalau > 3 hari
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const loadProfileUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      

      // Ganti ini:
      // if (data.success === "success")
      // Jadi:
      if (data.status === "success") {
        setUserData(data.data);
        
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);

      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "Invalid token"
      ) {
        toast.error("Sesi login habis, silakan login ulang.");
        setToken(false);
        localStorage.removeItem("token");
      } else {
        toast.error(error.message);
      }
    }
  };

  const getAllConvert = async () => {
    try {
      const res = await axios.get(backendUrl + "/sampah", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      const data = res.data;

      if (data.status === "success") {
        setConvert(data.data); // Ambil dari 'data.data'
        
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  const updateStatus = async (trashId, status) => {
    try {
      const { data } = await axios.put(
        backendUrl + `/sampah/${trashId}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (data.status === "success") {
        toast.success("Status berhasil diperbarui!");
        getAllConvert(); // refresh data
      } else {
        toast.error("Gagal memperbarui status.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const getDashData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      if (data.status === "success") {
        setDashData(data.dashData);
        
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getItem = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/item");
      

      if (data.status === "success") {
        setItem(data.data); // ✅ Perbaiki di sini
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
      toast.error(error.message);
    }
  };

  const getAllPoin = async () => {
  if (!token || !userData) return;

  const endpoint =
    userData.role === 'admin' ? '/poin' : '/poin/user';

  try {
    const res = await axios.get(backendUrl + endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    const data = res.data;

    if (data.status === "success") {
      setPoin(data.data);
      
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log("Error fetching data:", error);
    toast.error(error?.response?.data?.message || error.message);
  }
};


  const updateStatusPoin = async (poinId, status) => {
    try {
      const { data } = await axios.put(
        backendUrl + `/poin/${poinId}/approve`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (data.status === "success") {
        toast.success("Status berhasil diperbarui!");
        getAllPoin(); // refresh data
      } else {
        toast.error("Gagal memperbarui status.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  const value = {
    token,
    artikel,
    getArtikelData,
    setToken,
    backendUrl,
    userData,
    setUserData,
    formatTanggal,
    loadProfileUserData,
    getAllConvert,
    convert,
    updateStatus,
    dashData,
    getDashData,
    getItem,
    item,
    getAllPoin,
    poin,
    updateStatusPoin
  };

  useEffect(() => {
    getArtikelData();
  }, []);

  

  useEffect(() => {
    if (token) {
      loadProfileUserData();
    } else {
      setUserData(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getItem();
    }
  }, [token]);

useEffect(() => {
  if (token && userData) {
    getAllPoin();
  }
}, [userData]);


  useEffect(() => {
    
  }, [userData]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
