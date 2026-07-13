import "../styles/stats.css";

function Stats() {
  const stats = [
    { number: "15+", title: "AI Projects" },
    { number: "300+", title: "DSA Problems" },
    { number: "9.0", title: "CGPA" },
    { number: "10+", title: "Certifications" },
  ];

  return (
    <section className="stats" id="stats">

      <p className="section-tag">STATS</p>

      <h2>Numbers That Define Me</h2>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Stats;