import "../styles/skills.css";
import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaAws,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiFlask,
  SiLangchain,
  SiStreamlit,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Artificial Intelligence",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "LangChain", icon: <SiLangchain /> },
      { name: "RAG" },
      { name: "Generative AI" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Streamlit", icon: <SiStreamlit /> },
    ],
  },

  {
    title: "Libraries",
    skills: [
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib" },
      { name: "Seaborn" },
    ],
  },

  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "GitHub" },
      { name: "VS Code" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-header">
        <span>TECH STACK</span>

        <h2>Technologies I Work With</h2>

        <p>
          A collection of technologies, frameworks and tools i use while
          building AI&ML -powered applications and solutions.
        </p>
      </div>

      <div className="skills-container">

        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >

            <h3>{category.title}</h3>

            <div className="skills-grid">

              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-pill"
                  whileHover={{
                    scale: 1.08,
                    y: -5,
                  }}
                >
                  {skill.icon && (
                    <span className="skill-icon">
                      {skill.icon}
                    </span>
                  )}

                  <span>{skill.name}</span>

                </motion.div>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;