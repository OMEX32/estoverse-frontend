import React from 'react';

const problems = [
  {
    number: "01",
    title: "GHOST\nPROTOCOL",
    description: "Players vanish 5 minutes before tournament start. Your substitute is offline. Your team forfeits. Match lost before it began."
  },
  {
    number: "02",
    title: "SIGNAL\nBREAKDOWN",
    description: "Critical intel buried in Discord spam. Tournament bracket lost in 200 unread messages. Communication fragmented across 6 platforms."
  },
  {
    number: "03",
    title: "TIMELINE\nCHAOS",
    description: "Manual scheduling across spreadsheets and calendars. Timezone conflicts. Double bookings. Every week is a new disaster."
  },
  {
    number: "04",
    title: "WASTED\nPOTENTIAL",
    description: "Can't commit to high-stakes tournaments. Watching opportunities expire because you can't guarantee your roster will deploy."
  }
];

const ProblemSection = () => {
  return (
    <>
      <div className="section-divider"></div>
      <section className="problem-section">
        <div className="section-intro">
          <div className="section-tag">// MISSION CRITICAL</div>
          <h2 className="section-title">
            YOUR ROSTER IS<br />
            <span className="highlight">UNRELIABLE</span>
          </h2>
        </div>

        <div className="problems-grid">
          {problems.map((problem) => (
            <div className="problem-card" key={problem.number}>
              <div className="problem-number">{problem.number}</div>
              <h3 className="problem-title">{problem.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < problem.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
};

export default ProblemSection;
