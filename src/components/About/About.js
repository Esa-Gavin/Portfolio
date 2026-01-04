import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../assets/data/portfolioData';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <div className="about-intro">
              <h3 className="about-heading">Hello! I'm Gavin Kariuki</h3>
              <p className="about-paragraph">{personalInfo.bio.intro}</p>
            </div>

            <div className="about-detail">
              <p className="about-paragraph">{personalInfo.bio.detail}</p>
            </div>

            <div className="about-passion">
              <p className="about-paragraph">{personalInfo.bio.passion}</p>
            </div>

            <div className="about-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <span>{personalInfo.email}</span>
              </div>
            </div>

            <div className="about-actions">
              <a
                href={personalInfo.resumeUrl}
                className="resume-btn"
                download
                aria-label="Download Resume"
              >
                <FaDownload />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          <motion.div className="about-highlights" variants={itemVariants}>
            <div className="highlight-card">
              <div className="highlight-number">3+</div>
              <div className="highlight-label">Years Experience</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">15+</div>
              <div className="highlight-label">Projects Completed</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">10+</div>
              <div className="highlight-label">Technologies Mastered</div>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">100%</div>
              <div className="highlight-label">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
