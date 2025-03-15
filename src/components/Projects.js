import React from "react";
import { motion } from "framer-motion";
import projectImage from "../assets/img/projects.jpg";
import projectImage1 from "../assets/img/project1.jpg";

const ProjectItem = ({ title, description, image, link }) => {
  return (
    <motion.div
      className="projects__item"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="projects__img-container">
        <img src={image} alt={title} className="projects__img" />
      </div>
      <div className="projects__content">
        <h3 className="projects__title">{title}</h3>
        <p className="projects__description">{description}</p>
        <a href={link} className="projects__link">
          View Project <i className="bx bx-right-arrow-alt"></i>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing skills, projects, and contact information, built with React, CSS, and JavaScript.",
      image: projectImage1,
      link: "/",
    },
    {
      title: "Image Compressor App",
      description:
        "An efficient image compression tool built with React, allowing users to reduce image size without significant quality loss.",
      image: projectImage,
      link: "https://skrn-compressor.web.app/",
    },
    {
      title: "E-Commerce Website",
      description:
        "A fully responsive e-commerce website built with React and Redux, featuring product filtering, cart management, and payment integration.",
      image: projectImage,
      link: "#",
    },
    {
      title: "Weather App",
      description:
        "A weather application that fetches real-time weather data using an API and displays it in a user-friendly interface.",
      image: projectImage,
      link: "#",
    },
  ];

  return (
    <motion.section
      className="projects section"
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Projects</h2>
      <div className="bd-grid">
        <motion.div
          className="projects__container"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
