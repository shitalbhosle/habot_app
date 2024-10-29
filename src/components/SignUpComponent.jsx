import React, { useState } from "react";

function SignUpComponent() {
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-6 text-center text-md-start">
          <h2 className="fw-bold">
            Ready to dive into <span className="text-primary">HABOT?</span>
          </h2>
          <p className="text-muted">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="btn btn-success btn-lg mt-3 btn-res">
            Sign up Today!
          </button>
        </div>

        {/* Right Column */}
        <div className="col-md-6 d-flex flex-column align-items-center">
          <div className="row gy-3">
            {[
              "Abu Dhabi",
              "Dubai",
              "Sharjah & Ajman",
              "Fujairah",
              "Ras Al Khaimah",
              "Umm Al Quwain",
            ].map((location, index) => (
              <div key={index} className="col-6">
                <button
                  onClick={() => handleLocationClick(location)}
                  className={`btn w-100 ${
                    selectedLocation === location
                      ? "btn-outline-warning"
                      : "btn-outline-secondary"
                  }`}
                >
                  {location}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpComponent;
