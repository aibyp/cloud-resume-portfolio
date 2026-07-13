import "../styles/projects.css";

import ats from "../assets/projects/ats.png";
import clickclass from "../assets/projects/clickclass.png";
import gym from "../assets/projects/gym.png";
import styletransfer from "../assets/projects/styletransfer.png";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Resume ATS",
    image: ats,
    description:
      "An AI-powered ATS Resume Analyzer that compares resumes against job descriptions using Gemini AI and provides ATS compatibility scores with detailed feedback.",
    tech: ["Python", "Gemini", "Streamlit", "NLP"],
    github: "https://github.com/aibyp",
    live: "#",
  },

  {
    title: "ClickClass",
    image: clickclass,
    description:
      "AI-powered classroom attendance system using Face Recognition with OpenCV for automatic attendance management and analytics.",
    tech: ["Python", "OpenCV", "Flask", "SQLite"],
    github: "https://github.com/aibyp",
    live: "#",
  },

  {
    title: "AI Gym Trainer",
    image: gym,
    description:
      "Real-time posture correction and exercise counter using Computer Vision and Pose Estimation for fitness guidance.",
    tech: ["MediaPipe", "Python", "OpenCV", "AI"],
    github: "https://github.com/aibyp",
    live: "#",
  },

  {
    title: "Neural Style Transfer",
    image: styletransfer,
    description:
      "Transforms ordinary photographs into artistic paintings using Deep Learning and Convolutional Neural Networks.",
    tech: ["TensorFlow", "CNN", "Python", "Deep Learning"],
    github: "https://github.com/aibyp",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-header">

        <span>FEATURED PROJECTS</span>

        <h2>Projects That Define Me</h2>

        <p>
          A collection of AI, Machine Learning and Full Stack projects built
          during my learning journey.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="live-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default Projects;