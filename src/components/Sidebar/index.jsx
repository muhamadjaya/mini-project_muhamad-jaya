import React, { useState, useEffect } from "react";
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
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top customNav">
          <div className="container-fluid">
            <Link className="navbar-brand navBrand" to="/">
              Wonderful Banten
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/kelolawisata"
                >
                  Kelola Wisata
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/kelolaberita"
                >
                  Kelola Berita
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/kelolaulasan"
                >
                  Kelola Ulasan
                </NavLink>
              </div>
              <div className="navbar-nav ms-auto">
                <NavLink
                  onClick={logout}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/login"
                >
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
