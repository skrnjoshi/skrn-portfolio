// components/Work.js
import React from "react";
import work1 from "../assets/img/work1.jpg";
import work2 from "../assets/img/work2.jpg";
import work3 from "../assets/img/work3.jpg";
import work4 from "../assets/img/work4.jpg";
import work5 from "../assets/img/work5.jpg";
import work6 from "../assets/img/work6.jpg";

const Work = () => {
  const workImages = [work1, work2, work3, work4, work5, work6];

  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work</h2>
      <div className="work__container bd-grid">
        {workImages.map((image, index) => (
          <a href="#" className="work__img" key={index}>
            <img src={image} alt={`Work ${index + 1}`} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
