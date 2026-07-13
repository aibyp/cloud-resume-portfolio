import "../styles/experience.css";

const timeline = [
  {
    year: "2026",
    title: "AI/ML Intern",
    company: "YHills",
    desc: "Worked on Face Recognition and Machine Learning applications."
  },
  {
    year: "2025",
    title: "Secretary",
    company: "The Code Breakers Club",
    desc: "Organized workshops, hackathons and technical events."
  },
  {
    year: "2024 - Present",
    title: "B.Tech CSE (AI & ML)",
    company: "Lovely Professional University",
    desc: "CGPA: 9.0"
  }
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <p className="section-tag">EXPERIENCE</p>

      <h2>Journey</h2>

      <div className="timeline">

        {timeline.map((item,index)=>(
          <div className="timeline-card" key={index}>
            <span>{item.year}</span>

            <h3>{item.title}</h3>

            <h4>{item.company}</h4>

            <p>{item.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;