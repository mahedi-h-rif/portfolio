import { motion } from 'framer-motion'
import '../App.css'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript"]
    },
    {
      title: "Frameworks & Tools",
      skills: [
        "Spring", "Spring Boot", "JPA/Hibernate", "JSP", 
        "MySQL", "PostgreSQL", "REST API", "SOAP API", 
        "Postman", "Swagger", "Git", "Jenkins", "Nginx", 
        "Docker", "Shell Scripting"
      ]
    },
    {
      title: "Other Skills",
      skills: [
        "Linux Server Maintenance", "System Logging & Monitoring", 
        "MVC", "OOP", "HTML", "CSS", 
        "Machine Learning (LLM, Gen-AI, Vector Database)", 
        "WSO2 API Manager"
      ]
    }
  ]

  const competitiveProgramming = {
    title: "Competitive Programming",
    platforms: [
      { name: "Codeforces", rating: "1595 (Max)", problems: "900+", profile: "#" },
      { name: "CodeChef", problems: "50", profile: "#" },
      { name: "Beecrowd", problems: "150", profile: "#" },
      { name: "LightOJ", problems: "30", profile: "#" },
      { name: "HackerRank", problems: "50", profile: "#" },
      { name: "V-Judge", problems: "340+", profile: "#" },
      { name: "LeetCode", problems: "100", profile: "#" }
    ]
  }

  return (
    <section id="skills" className="section skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-item"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="competitive-programming"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="cp-title">{competitiveProgramming.title}</h3>
        <div className="cp-platforms">
          {competitiveProgramming.platforms.map((platform, index) => (
            <motion.div
              key={index}
              className="cp-platform"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="platform-name">{platform.name}</div>
              {platform.rating && (
                <div className="platform-rating">Rating: {platform.rating}</div>
              )}
              <div className="platform-problems">{platform.problems} problems</div>
            </motion.div>
          ))}
        </div>
        <p className="cp-total">Total: 1000+ problems solved across all platforms</p>
      </motion.div>
    </section>
  )
}

export default Skills

