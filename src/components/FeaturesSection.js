import React from 'react';

const features = [
  {
    badge: "SYSTEM_01",
    title: "UNIFIED\nCOMMAND",
    description: "Every tournament, scrim, practice session synchronized in one tactical interface. Complete visibility. Zero confusion.",
    points: [
      "Real-time event synchronization across all platforms",
      "Tournament brackets and elimination tracking",
      "Automatic timezone conversion for global teams",
      "Color-coded priority classification system"
    ],
    display: "CALENDAR\nSYSTEM"
  },
  {
    badge: "SYSTEM_02",
    title: "ROSTER\nINTEL",
    description: "Know who's available before you deploy. Players confirm or decline with one action. No surprises. No excuses.",
    points: [
      "One-click availability confirmation protocol",
      "Real-time roster status for every operation",
      "Automated substitute deployment recommendations",
      "Historical attendance and reliability metrics"
    ],
    display: "AVAILABILITY\nTRACKING"
  },
  {
    badge: "SYSTEM_03",
    title: "INSTANT\nCOMMS",
    description: "Direct Discord integration. Instant notifications when players update status. Your command center, your server, your control.",
    points: [
      "Instant DM notifications for command staff",
      "Automated team channel status broadcasts",
      "Customizable notification priority levels",
      "Bot commands for rapid status verification"
    ],
    display: "DISCORD\nPROTOCOL"
  },
  {
    badge: "SYSTEM_04",
    title: "MATCH\nPREP",
    description: "Deploy roles. Select maps. Brief strategy. Everything your team needs before they execute. Preparation equals victory.",
    points: [
      "Role assignment for each operation",
      "Map pool selection and ban phase tracking",
      "Strategic notes and tactical briefing system",
      "Historical performance analytics and insights"
    ],
    display: "TACTICAL\nBRIEFING"
  }
];

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <div className="section-intro" style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <div className="section-tag" style={{ marginLeft: 'auto', marginRight: 'auto' }}>// TACTICAL SYSTEMS</div>
        <h2 className="section-title" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          FULL SPECTRUM<br />
          <span className="highlight">COORDINATION</span>
        </h2>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-module" key={index}>
            <div className="feature-content">
              <div className="feature-badge">{feature.badge}</div>
              <h3 className="feature-title">{feature.title.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < feature.title.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul className="feature-points">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="feature-display">
              <div className="display-placeholder">{feature.display.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < feature.display.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
