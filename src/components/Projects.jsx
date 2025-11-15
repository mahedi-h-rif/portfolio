import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import '../App.css'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: "UCB Bank - Internet Banking",
      description: "Scalable banking platform handling thousands of transactions per second. Implemented secure authentication, fraud prevention, and optimized backend for 2× transaction load.",
      link: "https://unet.ucb.com.bd/login.html",
      type: "Banking Platform"
    },
    {
      title: "UCB Bank - Enterprise Banking",
      description: "Enterprise banking solution with advanced security features and high-performance APIs for corporate clients.",
      link: "https://unet.ucb.com.bd/eb/login.html",
      type: "Enterprise Solution"
    },
    {
      title: "Modhumoti Bank - Retail Banking",
      description: "Retail banking platform with modern UI/UX, secure transaction processing, and seamless user experience.",
      link: "https://retail.modhumotibank.net/login.html",
      type: "Retail Banking"
    },
    {
      title: "NCC Bank - Digital Banking",
      description: "Digital banking portal with comprehensive features for account management, transactions, and financial services.",
      link: "https://www.nccalways.com.bd/sign-in",
      type: "Digital Banking"
    },
    {
      title: "JSON Formatter AI",
      description: "AI-powered JSON formatter capable of accurately formatting even malformed or misaligned JSON, surpassing standard formatters.",
      link: "#",
      github: "#",
      type: "AI Tool",
      tech: ["React", "Vite", "Node.js", "Gemini API"]
    },
    {
      title: "Data Structure Visualizer",
      description: "A web-based tool to visualize data structures and algorithms with interactive demonstrations.",
      github: "#",
      type: "Educational Tool",
      tech: ["HTML", "CSS", "JavaScript", "SQL"]
    },
    {
      title: "Gadgets Application",
      description: "An application containing Calendar, Clock, Notepad, Calculator, and Tic-Tac-Toe games.",
      github: "#",
      type: "Desktop App",
      tech: ["Java", "Java Swing"]
    }
  ]

  return (
    <section id="projects" className="section projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-header">
              <span className="project-type">{project.type}</span>
              <div className="project-links">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tech && (
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

