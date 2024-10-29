import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "person-plus",
      title: (
        <>
          Select Your Role and <br /> Sign Up
        </>
      ),
    },
    {
      icon: "file-earmark-text",
      title: (
        <>
          Buyers Post Your <br /> Requirements
        </>
      ),
    },
    {
      icon: "search",
      title: (
        <>
          Review, Select, and <br /> Contact the Best Suppliers
        </>
      ),
    },
    {
      icon: "journal-text",
      title: (
        <>
          Suppliers Complete your <br /> profile and get notified for <br />
          opportunities
        </>
      ),
    },
    {
      icon: "pencil-square",
      title: (
        <>
          Contact to Buyers and Share <br /> your Quote for the service
        </>
      ),
    },
    {
      icon: "hand-thumbs-up",
      title: (
        <>
          Both the Parties can Connect <br /> and Make Business Leave a Feedback
        </>
      ),
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-3">How it works?</h2>
      <p className="text-center text-muted mb-5">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with <br /> potential buyers, and build
        successful business relationships, sharing valuable feedback.
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-0">
        {steps.map((step, index) => (
          <div className="col" key={index}>
            <div
              className="card shadow-none p-4 border-0 h-100 text-center"
              style={{
                backgroundColor: index % 2 !== 0 ? "#fff" : "#E8FBFF", // Change color for odd cards
              }}
            >
              <div className="card-body">
                <i className={`bi bi-${step.icon} icon-large mb-3`}></i>
                <h5 className="card-title">{step.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
