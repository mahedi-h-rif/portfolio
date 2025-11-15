import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import '../App.css'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Let's Connect</h3>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions. Feel free to reach out!
          </p>

          <div className="contact-details">
            <motion.a
              href="mailto:mhmahedi77@gmail.com"
              className="contact-item"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">mhmahedi77@gmail.com</span>
              </div>
            </motion.a>

            <motion.a
              href="tel:+8801854496139"
              className="contact-item"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">+8801854496139</span>
              </div>
            </motion.a>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  className="form-input form-textarea"
                  rows="6"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="form-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>&copy; 2024 Md Mahedi Hassan. All rights reserved.</p>
        <p>Built with React, Three.js, and lots of ☕</p>
      </motion.div>
    </section>
  )
}

export default Contact

