// components/About.js
import React from "react";
import aboutImage from "../assets/img/about.jpg";
import "../assets/css/styles.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutImage} alt="About me" />
        </div>

        <div>
          <h2 className="about__subtitle">I'm Saikiran</h2>
          <p className="about__text">
            Frontend Developer with 3+ years of experience in creating
            responsive, high-performance web and mobile applications. Skilled in
            modern web technologies such as React, React Native, JavaScript, and
            building optimized user interfaces for seamless cross-platform
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
