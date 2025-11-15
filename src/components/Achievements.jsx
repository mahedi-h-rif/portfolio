import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaAward, FaUsers } from 'react-icons/fa'
import '../App.css'
import './Achievements.css'

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: "University of Dhaka Code Samurai Hackathon 2022",
      description: "Finalist"
    },
    {
      icon: <FaMedal />,
      title: "East Delta Inter-University Programming Contest 2022",
      description: "Ranked 11"
    },
    {
      icon: <FaMedal />,
      title: "Ahmed Zubayer Inter-University Programming Contest UITS 2022",
      description: "Ranked 4"
    },
    {
      icon: <FaAward />,
      title: "NCPC 2023, Jahangirnagar University",
      description: "Ranked 59 out of 1000+ teams"
    },
    {
      icon: <FaTrophy />,
      title: "IUBAT, BUBT, UITS Collaboration Programming Contests 2022",
      description: "Champion"
    }
  ]

  const activities = [
    {
      icon: <FaUsers />,
      title: "ICPC Asia Dhaka Regional Contests",
      description: "Participated in 2020 (Team - UITS Meek Geek), 2022 & 2023 (Team - UITS O(struggle))"
    },
    {
      icon: <FaAward />,
      title: "ICPC Programming Camp 2023",
      description: "Attended camp led by Dr. Yonghui Wu (Fudan University, China) hosted by BUBT"
    },
    {
      icon: <FaUsers />,
      title: "UITS Programmers Community",
      description: "Former mentor and trainer"
    },
    {
      icon: <FaAward />,
      title: "Gen AI Training",
      description: "Completed Gen AI training by Brain Station 23 (certified)"
    }
  ]

  return (
    <section id="achievements" className="section achievements-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Achievements & Activities
      </motion.h2>

      <div className="achievements-container">
        <motion.div
          className="achievements-section-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="subsection-title">Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="achievement-icon-wrapper">
                  {achievement.icon}
                </div>
                <h4>{achievement.title}</h4>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="activities-section-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="subsection-title">Activities</h3>
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="activity-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="activity-icon-wrapper">
                  {activity.icon}
                </div>
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements

