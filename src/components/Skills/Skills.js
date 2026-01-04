import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaMobile,
  FaServer,
  FaCode
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiGraphql,

  SiWebpack
} from 'react-icons/si';
import { skills } from '../../assets/data/portfolioData';
import './Skills.css';

const Skills = () => {
  const iconMap = {
    FaReact: FaReact,
    SiJavascript: SiJavascript,
    FaHtml5: FaHtml5,
    FaCss3Alt: FaCss3Alt,
    FaVuejs: FaVuejs,
    SiTailwindcss: SiTailwindcss,
    FaNodeJs: FaNodeJs,
    FaPhp: FaPhp,
    FaLaravel: FaLaravel,
    SiGraphql: SiGraphql,
    FaGitAlt: FaGitAlt,
    FaGithub: FaGithub,
    FaCode: FaCode,
    FaNpm: FaNpm,
    SiWebpack: SiWebpack,
    FaMobile: FaMobile,
    FaServer: FaServer
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const renderSkillCard = (skill, index) => {
    const IconComponent = iconMap[skill.icon];
    return (
      <motion.div key={index} className="skill-card" variants={itemVariants}>
        <div className="skill-icon">
          {IconComponent && <IconComponent />}
        </div>
        <div className="skill-name">{skill.name}</div>
      </motion.div>
    );
  };

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-grid">
              {skills.frontend.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </motion.div>

          <motion.div
            className="skills-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="category-title">Backend Development</h3>
            <div className="skills-grid">
              {skills.backend.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </motion.div>

          <motion.div
            className="skills-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="category-title">Tools & Platforms</h3>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </motion.div>

          <motion.div
            className="skills-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="category-title">Concepts & Practices</h3>
            <div className="skills-grid">
              {skills.concepts.map((skill, index) => renderSkillCard(skill, index))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
