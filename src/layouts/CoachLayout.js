import React, { useState } from 'react';
import TopNav from '../components/shared/TopNav';
import Sidebar from '../components/shared/Sidebar';

const CoachLayout = ({ user }) => {
  const [activeSection, setActiveSection] = useState('overview');

  // Sidebar items for coaches
  const sidebarItems = [
    { id: 'overview', label: 'TEAM OVERVIEW', icon: '📊' },
    { id: 'roster', label: 'ROSTER', icon: '👥', badge: '5/10' },
    { id: 'events', label: 'EVENTS', icon: '📅' },
    { id: 'invites', label: 'INVITE LINKS', icon: '🔗' },
    { id: 'analytics', label: 'ANALYTICS', icon: '📈' },
    { id: 'settings', label: 'SETTINGS', icon: '⚙️' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a1a',
      fontFamily: 'IBM Plex Mono, monospace'
    }}>
      {/* Top Navigation */}
      <TopNav user={user} />

      {/* Main Content Area */}
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar items={sidebarItems} activeItem={activeSection} />

        {/* Main Content */}
        <div style={{
          flex: 1,
          padding: '3rem',
          color: '#e8e8e8'
        }}>
          {/* Welcome Header */}
          <div style={{
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '2px solid #404040'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                background: '#00ff41',
                borderRadius: '50%',
                boxShadow: '0 0 10px #00ff41'
              }}></div>
              <span style={{
                fontSize: '0.75rem',
                color: '#6b6b6b',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                SYSTEM // ONLINE
              </span>
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontFamily: 'Teko, sans-serif',
              color: '#CCFF00',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              lineHeight: 1,
              margin: '0 0 1rem 0'
            }}>
              COACH COMMAND<br />CENTER
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#6b6b6b',
              maxWidth: '600px'
            }}>
              Welcome back, <span style={{ color: '#CCFF00' }}>{user.firstName}</span>. 
              Your team coordination infrastructure is operational.
            </p>
          </div>

          {/* Content Area - Placeholder for now */}
          <div style={{
            background: '#2d2d2d',
            border: '4px solid #CCFF00',
            padding: '3rem',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '4rem',
              marginBottom: '2rem'
            }}>🏆</div>

            <h2 style={{
              fontSize: '2rem',
              fontFamily: 'Teko, sans-serif',
              color: '#CCFF00',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              CREATE YOUR FIRST TEAM
            </h2>

            <p style={{
              fontSize: '1rem',
              color: '#6b6b6b',
              marginBottom: '2rem',
              maxWidth: '500px',
              margin: '0 auto 2rem'
            }}>
              Initialize your command structure. Deploy your roster. Begin coordination operations.
            </p>

            <button style={{
              background: '#CCFF00',
              color: '#1a1a1a',
              border: 'none',
              padding: '1.5rem 3rem',
              fontSize: '1rem',
              fontFamily: 'IBM Plex Mono, monospace',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#FF4500';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#CCFF00';
            }}>
              DEPLOY TEAM
            </button>

            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              background: '#1a1a1a',
              border: '2px solid #404040',
              textAlign: 'left'
            }}>
              <h3 style={{
                color: '#CCFF00',
                fontSize: '1.2rem',
                marginBottom: '1rem',
                textTransform: 'uppercase',
                fontFamily: 'Teko, sans-serif'
              }}>
                AVAILABLE FEATURES
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{ marginBottom: '0.8rem', color: '#6b6b6b' }}>
                  ▶ Roster management & player tracking
                </li>
                <li style={{ marginBottom: '0.8rem', color: '#6b6b6b' }}>
                  ▶ Event scheduling & tournament coordination
                </li>
                <li style={{ marginBottom: '0.8rem', color: '#6b6b6b' }}>
                  ▶ Instant Discord integration & notifications
                </li>
                <li style={{ marginBottom: '0.8rem', color: '#6b6b6b' }}>
                  ▶ Player availability tracking system
                </li>
                <li style={{ marginBottom: '0.8rem', color: '#6b6b6b' }}>
                  ▶ Generate unlimited invitation links
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachLayout;