import React, { useState } from "react";
import "./TermsandConditions.css";

const termsData = [
  {
    title: "Your use of this is governed by these terms of use",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident..."
  },
  {
    title: "Use of the content on this website",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident..."
  },
  {
    title: "How long will it take to get my package?",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
  },
  {
    title: "Will I receive the same product as shown in the picture?",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
  },
  {
    title: "Limitation of liability",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
  },
  {
    title: "Governing Law & Jurisdiction",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..."
  }
];

const TermsandConditions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="termsContainer">
      <h2>Terms & Conditions</h2>
      <p className="intro">
        Please read these terms carefully before using our services. By accessing or using this site, you agree to these terms.
      </p>
      <div className="termsContent">
        {termsData.map((term, index) => (
          <div key={index} className="termSection">
            <h6 onClick={() => toggleSection(index)} className="termTitle">
              {term.title} <span>{activeIndex === index ? "-" : "+"}</span>
            </h6>
            {activeIndex === index && <p className="termText">{term.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsandConditions;
