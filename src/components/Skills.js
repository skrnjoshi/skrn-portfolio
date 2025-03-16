import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAws, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiRedux, SiExpress } from "react-icons/si";

const SkillCard = ({ title, percentage, Icon }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="skill-card__header">
        <Icon className="skill-card__icon" />
        <h4 className="skill-card__title">{title}</h4>
      </div>
      <div className="skill-card__progress">
        <motion.div
          className="skill-card__progress-bar"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      </div>
      <span className="skill-card__percentage">{percentage}%</span>
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    { title: "React", percentage: 90, Icon: FaReact },
    { title: "Node.js", percentage: 85, Icon: FaNodeJs },
    { title: "MongoDB", percentage: 85, Icon: SiMongodb },
    { title: "Express.js", percentage: 80, Icon: SiExpress },
    { title: "Redux", percentage: 85, Icon: SiRedux },
    { title: "AWS", percentage: 75, Icon: FaAws },
    { title: "Git", percentage: 80, Icon: FaGitAlt },
  ];

  return (
    <motion.section
      className="skills section"
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Skills</h2>
      <div className="skills__container">
        <motion.div
          className="skills-grid"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              percentage={skill.percentage}
              Icon={skill.Icon}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
