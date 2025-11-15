import { motion } from 'framer-motion'
import { FaBriefcase, FaRocket, FaShieldAlt, FaChartLine, FaCode, FaNetworkWired } from 'react-icons/fa'
import '../App.css'
import './Experience.css'

const Experience = () => {
  const achievements = [
    {
      icon: <FaRocket />,
      text: "Delivered and owned 15+ high-impact banking features, end-to-end"
    },
    {
      icon: <FaCode />,
      text: "Led development of multiple frontend features from requirements to release"
    },
    {
      icon: <FaChartLine />,
      text: "Scaled UCB platform to 2× transaction load with backend optimizations"
    },
    {
      icon: <FaShieldAlt />,
      text: "Engineered secure authentication/authorization modules and fraud-prevention enhancements"
    },
    {
      icon: <FaCode />,
      text: "Engineered high-performance RESTful APIs for 10+ microservices"
    },
    {
      icon: <FaNetworkWired />,
      text: "Implemented scalable inter-service communication (API & event-driven)"
    }
  ]

  return (
    <section id="experience" className="section experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      <div className="experience-container">
        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="experience-header">
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-title">
              <h3>Software Engineer - II</h3>
              <p className="company">BrainStation-23 PLC, Dhaka, Bangladesh</p>
              <p className="period">March 2024 - Present</p>
            </div>
          </div>

          <div className="projects-worked">
            <h4>Projects:</h4>
            <div className="project-tags">
              <span className="project-tag">UCB Bank</span>
              <span className="project-tag">Modhumoti Bank</span>
              <span className="project-tag">NCC Bank</span>
              <span className="project-tag">Gigly Tech</span>
            </div>
          </div>

          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="achievement-icon">{achievement.icon}</div>
                <p>{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

