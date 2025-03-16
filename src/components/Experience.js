// components/Work.js
import React from "react";
import TypingBox from "./TypingBox";
import image from "../assets/img/cognizant_logo.png";
import "../assets/css/styles.css"; // Importing external CSS

const textArray1 = [
  "Frontend Developer (React, Redux)",
  "Cognizant, Hyderabad | Nov 2021 – Present",
  "●Developed and optimized web applications for Centene’s healthcare platform using React and Redux.",
  "●Led migration of 3 systems & 6 applications to React, enhancing performance.",
  "●Integrated RESTful APIs, improving data flow and reducing response time by 30%.",
  "●Configured CI/CD pipelines (Jenkins) for automated deployments.",
  "●Resolved 10+ production issues, improving user experience.",
];

const textArray2 = [
  "Cognizant (Full-time · 3 yrs 5 mos)",
  "📍 Hyderabad, Telangana, India · On-site",
  "",
  "● Associate (Nov 2023 – Present · 1 yr 5 mos)",
  "┃",
  "● Programming Analyst (Nov 2022 – Nov 2023 · 1 yr)",
  "┃",
  "● Programmer Analyst Trainee (Nov 2021 – Nov 2022 · 1 yr)",
];

const Experience = () => {
  return (
    <section className="work section" id="Experience">
      <h2 className="section-title">Experience</h2>
      <div className="section-content">
        <div className="section-content-item1">
          <TypingBox textArray={textArray1} speed={10} />
        </div>
        <div className="section-content-item2">
          <div className="work-header">
            <img src={image} alt="Cognizant" className="work-logo" />
            <h2 className="work-company">Cognizant</h2>
          </div>
          <TypingBox textArray={textArray2} speed={30} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
