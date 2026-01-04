import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { personalInfo, socialLinks } from '../../assets/data/portfolioData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      // EmailJS configuration
      // Replace with your actual EmailJS credentials
      // Service ID, Template ID, and Public Key from EmailJS dashboard
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      // For now, simulate form submission
      // Uncomment the emailjs.send() call when you have credentials
      /*
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email
        },
        publicKey
      );
      */

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Oops! Something went wrong. Please try again or contact me directly via email.'
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 5000);
    }
  };

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
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Let's work together on your next project</p>
        </motion.div>

        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
              I'm always open to discussing new projects and opportunities.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FaEnvelope />
                </div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="detail-content">
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <h4>Connect with me</h4>
              <div className="social-links">
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
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-wrapper" variants={itemVariants}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="6"
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {status.message && (
                <div className={`status-message ${status.error ? 'error' : 'success'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
