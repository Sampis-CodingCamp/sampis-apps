import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Artikels from "./pages/Artikel";
import Artikel from "./pages/ArtikelDetail";
import ScanTrash from "./pages/ScanTrash";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import Points from "./pages/points";
import SellTrash from "./pages/SellTrash";
import ArtikelDetail from "./pages/ArtikelDetail";
import Dashboard from "./pages/AdminPage/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import AddArtikel from "./pages/AdminPage/AddArtikel";
import AllConvert from "./pages/AdminPage/AllConvert";
import TrashList from "./pages/AdminPage/ArtikelList";
import AdminLayout from "./components/AdminComponent/AdminLayout";
import ArtikelDetailAdmin from "./pages/AdminPage/ArtikelDetailAdmin";
import Sampoint from "./pages/Sampoint";
import Penukaran from "./pages/Penukaran";
import AddItem from "./pages/AdminPage/AddItem";
import AllItem from "./pages/AdminPage/AllItem";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artikel" element={<Artikels />} />
        <Route path="/scanTrash" element={<ScanTrash />} />
        <Route path="/sellTrash" element={<SellTrash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/sampoint" element={<Sampoint />} />
        <Route path="/artikel/:artikelId" element={<ArtikelDetail />} />
        <Route path="/penukaran" element={<Penukaran />} />

        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-artikel" element={<AddArtikel />} />
          <Route path="all-convert" element={<AllConvert />} />
          <Route path="all-item" element={<AllItem />} />
          <Route path="artikel-list" element={<TrashList />} />
          <Route
            path="artikel-admin/:artikelId"
            element={<ArtikelDetailAdmin />}
          />
          <Route path="add-item" element={<AddItem />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
