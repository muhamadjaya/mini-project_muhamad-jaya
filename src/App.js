// import './App.css';
import { Routes, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";
import Wisata from "./pages/Wisata";
import DetailWisata from "./pages/DetailWisata";
import VirtualTour from "./pages/VirtualTour";
import Berita from "./pages/Berita";
import Login from "./pages/Login";
import KelolaWisata from "./pages/KelolaWisata";
import InputWisata from "./pages/InputWisata";
import UbahWisata from "./pages/UbahWisata";
import KelolaBerita from "./pages/KelolaBerita";
import InputBerita from "./pages/InputBerita";
import UbahBerita from "./pages/UbahBerita";
import NotFound from "./pages/NotFound";

import PrivateRoutes from "./PrivateRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/wisata" element={<Wisata />} />
      <Route path="/wisata/detailwisata/:id" element={<DetailWisata />} />
      <Route path="/virtualtour" element={<VirtualTour />} />
      <Route path="/berita" element={<Berita />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/kelolawisata" element={<KelolaWisata />} />
        <Route path="/kelolawisata/inputwisata" element={<InputWisata />} />
        <Route path="/kelolawisata/ubahwisata/:id" element={<UbahWisata />} />
        <Route path="/kelolaberita" element={<KelolaBerita />} />
        <Route path="/kelolaberita/inputberita" element={<InputBerita />} />
        <Route path="/kelolaberita/ubahberita/:id" element={<UbahBerita />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
