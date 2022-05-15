import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoNavbar from "../../assets/images/logo.png";

const Navbar = () => {
  const [category, setCategory] = useState([
    "wisata-alam",
    "wisata-pantai",
    "wisata-kuliner",
  ]);

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top customNav">
          <div className="container-fluid">
            {/* <Link className="navbar-brand navBrand" to="/">
              Wonderful Banten
            </Link> */}
            <Link className="navbar-brand navBrand" to="/">
              <img src={LogoNavbar} alt="Logo" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    aria-current="page"
                    to="/"
                  >
                    Beranda
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <NavLink
                    // className="nav-link dropdown-toggle"
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link dropdown-toggle"
                        : "nav-link dropdown-toggle"
                    }
                    to="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Kategori
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/wisataalam">
                        Wisata Alam
                      </NavLink>
                      <NavLink className="dropdown-item" to="/wisatapantai">
                        Wisata Pantai
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to={`kategori/${category[2]}`}
                      >
                        Wisata Kuliner
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/berita"
                  >
                    Berita
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/tentang"
                  >
                    Tentang
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                <li className="nav-item ">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* <div className="collapse navbar-collapse d" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Beranda
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/wisata"
                >
                  Wisata
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/virtualtour"
                >
                  Virtual Tour
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/berita"
                >
                  Berita
                </NavLink>
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </NavLink>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Alam
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Pantai
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="dropdown-item">
                      Kuliner
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="navbar-nav ms-auto">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </div>
            </div> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
