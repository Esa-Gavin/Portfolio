import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../assets/data/portfolioData';
import profileImage from '../../images/IMG_1490.JPG';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="particles"></div>
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div className="hero-greeting" variants={itemVariants}>
            <span className="wave">👋</span> Hello, I'm
          </motion.div>

          <motion.h1 className="hero-name" variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.div className="hero-title-container" variants={itemVariants}>
            <h2 className="hero-title">
              <span className="title-main">{personalInfo.title}</span>
              <span className="title-separator">|</span>
              <span className="title-sub">{personalInfo.subtitle}</span>
            </h2>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Crafting exceptional digital experiences with React and modern web technologies.
            Transforming ideas into elegant, user-friendly applications.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="hero-btn hero-btn-primary"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="hero-btn hero-btn-secondary"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                {social.icon === 'FaGithub' && <FaGithub />}
                {social.icon === 'FaLinkedin' && <FaLinkedin />}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-image-container" variants={imageVariants}>
          <div className="hero-image-wrapper">
            <img src={profileImage} alt="Gavin Kariuki" className="hero-image" />
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <Link to="about" smooth={true} duration={500} offset={-70}>
          <FaChevronDown className="scroll-icon" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
