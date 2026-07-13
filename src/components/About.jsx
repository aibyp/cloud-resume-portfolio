import "../styles/about.css";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaBullseye,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      text: "B.Tech Computer Science (AI & ML) at Lovely Professional University with a current CGPA of 9.0.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Experience",
      text: "AI/ML Intern at YHills and Secretary of The Code Breakers Club, organizing technical events and workshops.",
    },
    {
      icon: <FaBrain />,
      title: "Specialization",
      text: "Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI, LangChain, RAG and AI Agents.",
    },
    {
      icon: <FaBullseye />,
      title: "Career Goal",
      text: "To build trustworthy AI products that solve real-world problems and positively impact millions of users.",
    },
  ];

  return (
    <section className="about" id="about">

      <div className="section-header">
        <span>WHO AM I?</span>

        <h2>Building Intelligent AI Solutions</h2>

        <p>
          I love combining Artificial Intelligence with software engineering to
          create practical products that are useful, scalable and impactful.
        </p>
      </div>

      <div className="about-container">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Hello, I'm Preethi 👋</h3>

          <p>
            I'm a Computer Science student specializing in Artificial
            Intelligence & Machine Learning at Lovely Professional University.
          </p>

          <p>
            My interests include Machine Learning, Deep Learning, Computer
            Vision, Generative AI and Agentic AI. I enjoy building production-
            ready AI applications that solve meaningful real-world problems.
          </p>

          <p>
            Every project I build is another step toward becoming an AI Engineer
            capable of creating intelligent systems used by millions of people.
          </p>

        </motion.div>

        <div className="about-grid">

          {cards.map((card, index) => (
            <motion.div
              className="about-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="about-icon">{card.icon}</div>

              <h4>{card.title}</h4>

              <p>{card.text}</p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default About;