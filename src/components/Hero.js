import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="hero-accent"></div>
      
      <div className="hero-container">
        <div className="hero-content-wrapper">
          <div className="tactical-header">
            <div className="status-indicator"></div>
            <span className="tactical-code">SYSTEM // ONLINE</span>
          </div>

          <h1 className="hero-headline">
            <span className="line-1">STOP</span>
            <span className="line-2">CHASING</span>
            <span className="line-3">PLAYERS</span>
          </h1>

          <div className="hero-description">
            <p>Deploy tactical coordination infrastructure. Eliminate roster chaos. Execute flawless match preparation. Estoverse is the command center for serious esports teams.</p>
          </div>

          <div className="mission-stats">
            <div className="stat-block">
              <div className="stat-number">100%</div>
              <div className="stat-label">ROSTER VISIBILITY</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">0</div>
              <div className="stat-label">MISSED SCRIMS</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">24/7</div>
              <div className="stat-label">COORDINATION</div>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn-primary"><span>DEPLOY NOW</span></button>
            <button className="btn-secondary">VIEW DEMO</button>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="tactical-panel">
          <div className="panel-header">
            <span>ACTIVE ROSTER</span>
            <span>05/05 ONLINE</span>
          </div>
          <div className="panel-content">
            <div className="roster-display">
              <div className="roster-title">TOURNAMENT // WEEK 12</div>
              <div className="player-slot">
                <span>PLAYER_01 // TOP</span>
                <span className="player-status">CONFIRMED</span>
              </div>
              <div className="player-slot">
                <span>PLAYER_02 // JNG</span>
                <span className="player-status">CONFIRMED</span>
              </div>
              <div className="player-slot">
                <span>PLAYER_03 // MID</span>
                <span className="player-status">CONFIRMED</span>
              </div>
              <div className="player-slot">
                <span>PLAYER_04 // ADC</span>
                <span className="player-status">CONFIRMED</span>
              </div>
              <div className="player-slot">
                <span>PLAYER_05 // SUP</span>
                <span className="player-status">CONFIRMED</span>
              </div>
            </div>
            <div className="schedule-grid">
              <div className="schedule-cell">MON</div>
              <div className="schedule-cell active">TUE</div>
              <div className="schedule-cell">WED</div>
              <div className="schedule-cell active">THU</div>
              <div className="schedule-cell">FRI</div>
              <div className="schedule-cell active">SAT</div>
              <div className="schedule-cell">SUN</div>
              <div className="schedule-cell active">05:00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
