import React, { useState, useEffect } from "react";
// import style from "./style.module.css";

import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Universal Cookies
import Cookies from "universal-cookie";

const Sidebar = () => {
  let navigate = useNavigate();

  const cookies = new Cookies();

  const logout = (e) => {
    e.preventDefault();

    cookies.remove("auth", { path: "/" });
    return navigate("/login");
  };

  return (
    <>
      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <span className="brand-title">Wonderful Banten</span>
          </h3>
          <label htmlFor="sidebar-toggle" className="ti-menu-alt"></label>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink
                to="/kelolawisata"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className="fa-solid fa-map-location-dot"></i>

                <span>Kelola Wisata</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kelolaberita"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i className="fa-regular fa-newspaper"></i>
                <span>Kelola Berita</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kelolaulasan"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i class="fa-solid fa-comment-dots"></i>
                <span>Kelola Ulasan</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kelolaadmin"
                className={({ isActive }) =>
                  isActive ? "side-link active" : "side-link"
                }
              >
                <i class="fa-solid fa-user-pen"></i>
                <span>Kelola Admin</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* 
      <div className="main-content">
        <header>
          <div className="logout-icons">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Logout</span>
          </div>
        </header>

        <main>
          <h2 className="dash-title">Dasboard Admin</h2>

          <section className="recent">
            <div className="activity-grid">
              <div className="activity-card">
                <h3>Kelola Data</h3>

                <div className="table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Project</th>
                        <th>Start Date</th>
                        <th>End Date</th>

                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>App Development</td>
                        <td>15 Aug, 2020</td>
                        <td>22 Aug, 2020</td>

                        <td>
                          <span className="badge success">Success</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div> */}
    </>
  );
};

export default Sidebar;
