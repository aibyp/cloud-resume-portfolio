import "../styles/navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        PREETHI<span>.</span>
      </div>

      <ul className="nav-links">

        <li><a href="#about">About</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#experience">Experience</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="nav-right">

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

        <a
  href="https://preethyyyy-resume-pdf.s3.eu-north-1.amazonaws.com/portfolio-now.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="resume-btn">
      Resume
  </button>
</a>
      </div>

    </nav>
  );
}

export default Navbar;