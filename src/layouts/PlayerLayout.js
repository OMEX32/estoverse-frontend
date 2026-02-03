import React, { useState } from 'react';
import TopNav from '../components/shared/TopNav';
import Sidebar from '../components/shared/Sidebar';

const PlayerLayout = ({ user }) => {
  const [activeSection, setActiveSection] = useState('team');

  // Sidebar items for players WITH team
  const sidebarItems = [
    { id: 'team', label: 'MY TEAM', icon: '🏠' },
    { id: 'matches', label: 'NEXT MATCHES', icon: '📅' },
    { id: 'schedule', label: 'MY SCHEDULE', icon: '✅' },
    { id: 'stats', label: 'MY STATS', icon: '📊' },
    { id: 'profile', label: 'PROFILE', icon: '👤' },
    { id: 'settings', label: 'SETTINGS', icon: '⚙️' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: '#1a1a1a',
      fontFamily: 'IBM Plex Mono, monospace'
    }}>
      <TopNav user={user} />

      <div style={{ display: 'flex' }}>
        <Sidebar items={sidebarItems} activeItem={activeSection} />

        <div style={{
          flex: 1,
          padding: '3rem',
          color: '#e8e8e8'
        }}>
          {/* Header */}
          <div style={{
            marginBottom: '3rem',
            paddingBottom: '2rem',
            borderBottom: '2px solid #404040'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontFamily: 'Teko, sans-serif',
              color: '#CCFF00',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              lineHeight: 1,
              margin: '0 0 1rem 0'
            }}>
              PLAYER<br />DASHBOARD
            </h1>

            <p style={{
              fontSize: '1rem',
              color: '#6b6b6b'
            }}>
              Welcome, <span style={{ color: '#CCFF00' }}>{user.firstName}</span>. 
              Your team coordination status.
            </p>
          </div>

          {/* Team Info */}
          <div style={{
            background: '#2d2d2d',
            border: '4px solid #CCFF00',
            padding: '2rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              fontSize: '0.75rem',
              color: '#6b6b6b',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '1rem'
            }}>
              // CURRENT ASSIGNMENT
            </div>

            <h2 style={{
              fontSize: '2.5rem',
              fontFamily: 'Teko, sans-serif',
              color: '#CCFF00',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              TEAM ALPHA SQUAD
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{
                background: '#1a1a1a',
                padding: '1rem',
                border: '2px solid #404040'
              }}>
                <div style={{ fontSize: '0.7rem', color: '#6b6b6b', marginBottom: '0.5rem' }}>
                  YOUR ROLE
                </div>
                <div style={{ fontSize: '1.2rem', color: '#CCFF00' }}>
                  ADC
                </div>
              </div>

              <div style={{
                background: '#1a1a1a',
                padding: '1rem',
                border: '2px solid #404040'
              }}>
                <div style={{ fontSize: '0.7rem', color: '#6b6b6b', marginBottom: '0.5rem' }}>
                  TEAM SIZE
                </div>
                <div style={{ fontSize: '1.2rem', color: '#CCFF00' }}>
                  5/10
                </div>
              </div>

              <div style={{
                background: '#1a1a1a',
                padding: '1rem',
                border: '2px solid #404040'
              }}>
                <div style={{ fontSize: '0.7rem', color: '#6b6b6b', marginBottom: '0.5rem' }}>
                  NEXT EVENT
                </div>
                <div style={{ fontSize: '1.2rem', color: '#CCFF00' }}>
                  2 DAYS
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div style={{
            background: '#2d2d2d',
            border: '2px solid #404040',
            padding: '2rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontFamily: 'Teko, sans-serif',
              color: '#CCFF00',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}>
              UPCOMING EVENTS
            </h3>

            {/* Event Card Example */}
            <div style={{
              background: '#1a1a1a',
              border: '2px solid #CCFF00',
              padding: '1.5rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <div>
                  <div style={{
                    color: '#CCFF00',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}>
                    🏆 TOURNAMENT - WEEK 12
                  </div>
                  <div style={{ color: '#6b6b6b', fontSize: '0.85rem' }}>
                    Feb 5, 2026 • 7:00 PM • Map: Haven
                  </div>
                </div>

                <div style={{
                  background: '#00ff41',
                  color: '#1a1a1a',
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}>
                  CONFIRMED
                </div>
              </div>

              <div style={{
                padding: '1rem',
                background: '#2d2d2d',
                border: '1px solid #404040'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#6b6b6b', marginBottom: '0.5rem' }}>
                  TEAM STATUS
                </div>
                <div style={{ color: '#CCFF00' }}>
                  5/5 Players Confirmed
                </div>
              </div>
            </div>

            {/* Another Event - Not Confirmed */}
            <div style={{
              background: '#1a1a1a',
              border: '2px solid #404040',
              padding: '1.5rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <div>
                  <div style={{
                    color: '#e8e8e8',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}>
                    🎮 SCRIM - VS BETA SQUAD
                  </div>
                  <div style={{ color: '#6b6b6b', fontSize: '0.85rem' }}>
                    Feb 7, 2026 • 8:00 PM
                  </div>
                </div>

                <button style={{
                  background: 'transparent',
                  border: '2px solid #CCFF00',
                  color: '#CCFF00',
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}>
                  MARK AVAILABLE
                </button>
              </div>

              <div style={{
                padding: '1rem',
                background: '#2d2d2d',
                border: '1px solid #404040'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#6b6b6b', marginBottom: '0.5rem' }}>
                  TEAM STATUS
                </div>
                <div style={{ color: '#FF4500' }}>
                  3/5 Players Confirmed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerLayout;