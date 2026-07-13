import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Preethi Kondaveeti</h3>

      <p>Building AI that solves real-world problems.</p>

      <div className="footer-links">
        <a href="https://github.com/aibyp" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/preethi-kondaveeti/" target="_blank">LinkedIn</a>
        <a href="mailto:preethyyyyy555@gmail.com">Email</a>
      </div>

      <p className="copyright">
        © 2026 Preethi Kondaveeti. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;