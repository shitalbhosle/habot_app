import React from "react";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa"; // For icons
import bannerImage from "../assets/banner.png";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div className="container">
        <h1 className="fw-bold">Are You a Supplier?</h1>
        <h3>Explore Matching Opportunities.</h3>
        <div className="row justify-content-center mt-4">
          <div className="col-md-4 mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaBriefcase />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search your required service here"
              />
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white">
                <FaMapMarkerAlt />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search your desired location here"
              />
            </div>
          </div>
          <div className="col-md-auto">
            <button className="btn btn-success px-4" type="button">
              Search
            </button>
          </div>
        </div>
        <p className="mt-4">
          <span>Are you a buyer? </span>
          <a href="#" style={{ color: "#fff", textDecoration: "underline" }}>
            Click here if you are looking to post a requirement
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
