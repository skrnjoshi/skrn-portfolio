// components/Work.js
import React from "react";
import TypingBox from "./TypingBox";
import image from "../assets/img/cognizant_logo.png";
import "../assets/css/styles.css"; // Importing external CSS

const textArray1 = [
  "Cognizant, Hyderabad (Mar 2021 – Present)",
  "Frontend Developer (React, Redux) on Centene Healthcare Management Platform Project",
  "Project Description: Developed and optimized web applications as part of the Centene healthcare management platform.",
  "– Developed and optimized user-friendly web applications using React and Redux for Centene’s healthcare management platform.",
  "– Led the migration of 3 systems and 6 applications from older frameworks to React, enhancing performance and maintainability.",
  "– Designed and integrated RESTful APIs with the front end, improving data flow and reducing response time by 30%",
  "– Implemented component-based architecture, ensuring reusability and consistency across applications.",
  "– Configured and optimized CI/CD pipelines using Jenkins, automating front-end deployments.",
  "– Provided technical support and resolved 10+ production bugs, improving user experience.",
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
