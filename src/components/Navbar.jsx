import React from "react";
import logo from "../assets/logo.png";
import hamburgerIcon from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            src={hamburgerIcon}
            alt="Menu"
            style={{ width: "30px", height: "30px" }}
          />{" "}
          {/* Change the image source and size as needed */}
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item me-3">
              <a className="nav-link text-black" href="#">
                Find Suppliers
              </a>
            </li>
            <select
              className="form-select w-auto me-3"
              aria-label="Default select example"
            >
              <option selected>Find Service Tag</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-outline-success" type="submit">
              Login/Sign Up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
