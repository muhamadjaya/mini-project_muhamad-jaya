import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";

import DashboardHeader from "../../components/DashboardHeader";
import TableWisata from "../../components/TableWisata";

import Table from "../../components/Table";

const KelolaWisata = () => {
  return (
    <>
      {/* <Sidebar />
      <div id="wrap">
        <div className="container mt-5 pt-5" id="main">
          <div className="row">
            <div className="col-12 col-lg-12">
              <Table />
            </div>
          </div>
        </div>
      </div> */}

      <Sidebar />
      <div className="main-content">
        <DashboardHeader />

        <main>
          {/* <h2 className="dash-title">Dasboard Admin</h2> */}

          <TableWisata />
        </main>
      </div>
    </>
  );
};

export default KelolaWisata;
