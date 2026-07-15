import "../styles/hero.css";
import hero from "../assets/hero.jpeg";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg-circle circle1"></div>
      <div className="hero-bg-circle circle2"></div>

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <span className="hero-badge">
          LOOKING FOR   AI ENGINEER OPPORTUNITIES
        </span>

        <h1>
          PREETHI
          <br />
          <span>KONDAVEETI</span>
        </h1>

        <TypeAnimation
          sequence={[
            "AI Engineer",
            1800,
            "Machine Learning Engineer",
            1800,
            "Generative AI Developer",
            1800,
            "Deep Learning Enthusiast",
            1800
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className="typing"
        />

        <p>
          Passionate about designing intelligent AI systems that solve
          real-world problems using Machine Learning, Deep Learning and
          Generative AI.
        </p>

        <div className="hero-btns">

          <button className="primary-btn">

            Explore Projects

            <FaArrowRight />

          </button>

          <button className="secondary-btn">

            Download Resume

          </button>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/aibyp"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/preethi-kondaveeti/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:preethyyyyy555@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="hero-image">

          <img
            src={hero}
            alt="Preethi"
          />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;