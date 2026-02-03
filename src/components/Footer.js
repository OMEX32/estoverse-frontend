import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>ESTOVERSE</h3>
          <p>Tactical coordination infrastructure for competitive esports organizations. Deployed by champions. Built for victory.</p>
        </div>
        <div className="footer-section">
          <h4>SYSTEMS</h4>
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#deploy">Deployment</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>SUPPORT</h4>
          <ul className="footer-links">
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#help">Command Center</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#status">System Status</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>INTEL</h4>
          <ul className="footer-links">
            <li><a href="#about">Mission</a></li>
            <li><a href="#blog">Field Reports</a></li>
            <li><a href="#careers">Recruitment</a></li>
            <li><a href="#legal">Protocol</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>// ESTOVERSE_2026 // ALL SYSTEMS OPERATIONAL</p>
      </div>
    </footer>
  );
};

export default Footer;
