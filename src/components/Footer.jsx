import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import FooterLogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#123456",
        color: "#ffffff",
        padding: "40px 0",
      }}
    >
      <div className="container">
        <div className="row border-top border-bottom py-3">
          {/* Logo and Copyright */}
          <div className="col-12 col-md-4 d-flex flex-column align-items-center align-items-md-start mb-3 mb-md-0">
            <img src={FooterLogo} alt="Footer Logo" className="mb-3" />
            <p>&copy; R Singhania</p>
          </div>

          {/* Links Section */}
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row  align-items-center align-items-md-start justify-content-md-around mb-3 mb-md-0">
            <div className="mb-3 mb-md-0">
              <h5 className="fw-bold">Company</h5>
              <ul className="list-unstyled">
                <li>About</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div className="mb-3 mb-md-0">
              <h5 className="fw-bold">Terms</h5>
              <ul className="list-unstyled">
                <li>Data privacy</li>
                <li>Terms</li>
                <li>Accessibility</li>
              </ul>
            </div>

            <div>
              <h5 className="fw-bold">Related</h5>
              <ul className="list-unstyled">
                <li>Find Buyer</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>

          {/* Social Icons Section */}
          <div className="col-12 col-md-2 d-flex justify-content-center justify-content-md-end align-items-center">
            <a href="#" className="text-white mx-2">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white mx-2">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white mx-2">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white mx-2">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
