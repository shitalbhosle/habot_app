import React, { useState } from "react";
import VideoImage from "../assets/video.png";
import YoutubeImage from "../assets/youtube.png";

const Video = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  return (
    <div className="container my-5">
      <div className="row align-items-center bg-dark text-white p-4 rounded">
        {/* Video Section */}
        <div className="col-md-6 text-center">
          <div className="video-box bg-light p-3 rounded position-relative">
            <img
              src={VideoImage}
              alt="Video Placeholder"
              className="img-fluid rounded"
            />
            <div className="overlay">
              <button className="play-button">
                <img src={YoutubeImage} alt="" />
              </button>
            </div>
            <p className="mt-2">POST YOUR REQUIREMENTS</p>
          </div>
        </div>

        {/* Tab Section for Buyer/Supplier */}
        <div className="col-md-6 ps-lg-4">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link ${activeTab === "buyer" ? "active" : ""} `}
                onClick={() => setActiveTab("buyer")}
              >
                Buyer
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  activeTab === "supplier" ? "active" : ""
                }`}
                onClick={() => setActiveTab("supplier")}
              >
                Supplier
              </button>
            </li>
          </ul>

          <div className="tab-content mt-4">
            {activeTab === "buyer" && (
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Post your requirements.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Sit back for multiple suppliers to contact you.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Choose among the suppliers based on the ratings and reviews.
                </li>
              </ul>
            )}
            {activeTab === "supplier" && (
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  View buyer requirements.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Send offers to interested buyers.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill text-success me-2"></i>{" "}
                  Get ratings and reviews from buyers.
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
