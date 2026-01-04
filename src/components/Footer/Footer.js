import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaArrowUp, FaHeart } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../assets/data/portfolioData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3 className="footer-logo">
              <span className="logo-text">Gavin</span>
              <span className="logo-accent">.</span>
            </h3>
            <p className="footer-description">
              Frontend Developer specializing in React and modern web technologies.
              Building exceptional digital experiences one project at a time.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  {social.icon === 'FaGithub' && <FaGithub />}
                  {social.icon === 'FaLinkedin' && <FaLinkedin />}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-nav">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="footer-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact-info">
              <p>{personalInfo.location}</p>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. Made with <FaHeart className="heart-icon" /> using React
          </p>
          <p className="footer-rights">All rights reserved.</p>
        </div>
      </div>

      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
