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

  const getArtikelData = async () => {
    try {
      console.log("Backend URL:", backendUrl); 
      const { data } = await axios.get(backendUrl + "/artikel");
      console.log("Data dari API:", data); 

      
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

  

  

  const value = {
    token, artikel,
    getArtikelData,
    setToken,
    backendUrl,
    userData,
    setUserData,
  };

  useEffect(() => {
    getArtikelData();
  }, []);



  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
