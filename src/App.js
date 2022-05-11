// import './App.css';
import { Routes, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";
// import Wisata from "./pages/Wisata";
// import DetailWisata from "./pages/DetailWisata";
import WisataAlam from "./pages/WisataAlam";
import DetailWisataAlam from "./pages/DetailWisata";
import WisataPantai from "./pages/WisataPantai";
import DetailWisataPantai from "./pages/DetailWisata";
import WisataKuliner from "./pages/WisataKuliner";
import DetailWisataKuliner from "./pages/DetailWisata";
import Berita from "./pages/Berita";
import Login from "./pages/Login";
import KelolaWisata from "./pages/KelolaWisata";
import InputWisata from "./pages/InputWisata";
import UbahWisata from "./pages/UbahWisata";
import KelolaBerita from "./pages/KelolaBerita";
import InputBerita from "./pages/InputBerita";
import UbahBerita from "./pages/UbahBerita";
import Tentang from "./pages/Tentang";
import NotFound from "./pages/NotFound";

import PrivateRoutes from "./PrivateRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />
      {/* <Route path="/wisata" element={<Wisata />} />
      <Route path="/wisata/detailwisata/:id" element={<DetailWisata />} /> */}

      <Route path="/wisataalam" element={<WisataAlam />} />
      <Route
        path="/wisataalam/detailwisata/:id"
        element={<DetailWisataAlam />}
      />

      <Route path="/wisatapantai" element={<WisataPantai />} />
      <Route
        path="/wisatapantai/detailwisata/:id"
        element={<DetailWisataPantai />}
      />

      <Route path="/wisatakuliner" element={<WisataKuliner />} />
      <Route
        path="/wisatakuliner/detailwisata/:id"
        element={<DetailWisataKuliner />}
      />

      <Route path="/berita" element={<Berita />} />
      <Route path="/tentang" element={<Tentang />} />
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
