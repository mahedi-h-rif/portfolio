import { motion } from 'framer-motion'
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'
import '../App.css'
import './About.css'

const About = () => {
  return (
    <section id="about" className="section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-icon">
            <FaGraduationCap />
          </div>
          <h3>Education</h3>
          <div className="education-item">
            <div className="education-header">
              <FaUniversity className="edu-icon" />
              <div>
                <h4>Bachelor of Science in Computer Science and Engineering</h4>
                <p className="institution">University of Information Technology and Sciences</p>
              </div>
            </div>
            <p className="education-period">January 2020 - December 2023</p>
            <p className="education-cgpa">CGPA: 3.82</p>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I'm a passionate Software Engineer with expertise in building scalable banking 
            solutions and high-performance systems. With a strong foundation in competitive 
            programming and a track record of delivering 15+ high-impact features, I specialize 
            in full-stack development, system optimization, and secure authentication systems.
          </p>
          <p>
            My experience includes scaling platforms to handle 2× transaction loads, 
            engineering secure authentication modules, and implementing robust RESTful APIs 
            for microservices architecture. I'm also passionate about competitive programming, 
            having solved 1000+ problems across various platforms.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

