import React, { useState } from 'react';
import TopNav from '../components/shared/TopNav';
import Sidebar from '../components/shared/Sidebar';

const NoTeamLayout = ({ user }) => {
  const [activeSection, setActiveSection] = useState('noteam');

  // Sidebar items for players WITHOUT team
  const sidebarItems = [
    { id: 'noteam', label: 'NO TEAM', icon: '⚠️' },
    { id: 'profile', label: 'MY PROFILE', icon: '👤' },
    { id: 'calendar', label: 'PERSONAL CALENDAR', icon: '📅' },
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
          color: '#e8e8e8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Empty State */}
          <div style={{
            maxWidth: '600px',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '6rem',
              marginBottom: '2rem',
              opacity: 0.3
            }}>
              ⚠️
            </div>

            <h1 style={{
              fontSize: '3rem',
              fontFamily: 'Teko, sans-serif',
              color: '#CCFF00',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              lineHeight: 1,
              marginBottom: '1rem'
            }}>
              NO TEAM<br />ASSIGNED
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#6b6b6b',
              marginBottom: '3rem',
              lineHeight: 1.6
            }}>
              You are not currently assigned to any team, {user.firstName}. 
              Wait for a team invitation or create your own team.
            </p>

            {/* Options */}
            <div style={{
              background: '#2d2d2d',
              border: '2px solid #404040',
              padding: '2rem',
              marginBottom: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{
                color: '#CCFF00',
                fontSize: '1.2rem',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                fontFamily: 'Teko, sans-serif'
              }}>
                YOUR OPTIONS
              </h3>

              <div style={{
                marginBottom: '1.5rem',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid #404040'
              }}>
                <div style={{
                  fontSize: '1rem',
                  color: '#e8e8e8',
                  marginBottom: '0.5rem',
                  fontWeight: 700
                }}>
                  ▶ WAIT FOR INVITATION
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#6b6b6b',
                  lineHeight: 1.5
                }}>
                  Team coaches can generate invitation links. Ask your coach to send you one via Discord or email.
                </div>
              </div>

              <div>
                <div style={{
                  fontSize: '1rem',
                  color: '#e8e8e8',
                  marginBottom: '0.5rem',
                  fontWeight: 700
                }}>
                  ▶ CREATE YOUR OWN TEAM
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#6b6b6b',
                  lineHeight: 1.5,
                  marginBottom: '1rem'
                }}>
                  Become a team coach and start building your roster. You'll get access to full team management features.
                </div>

                <button style={{
                  background: '#CCFF00',
                  color: '#1a1a1a',
                  border: 'none',
                  padding: '1rem 2rem',
                  fontSize: '0.9rem',
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  width: '100%'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = '#FF4500';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#CCFF00';
                }}>
                  CREATE TEAM
                </button>
              </div>
            </div>

            {/* Available Features */}
            <div style={{
              background: '#2d2d2d',
              border: '2px solid #404040',
              padding: '2rem',
              textAlign: 'left'
            }}>
              <h3 style={{
                color: '#CCFF00',
                fontSize: '1.2rem',
                marginBottom: '1.5rem',
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
                  ✓ Profile settings and customization
                </li>
                <li style={{ marginBottom: '0.8rem', color: '#6b6b6b' }}>
                  ✓ Personal calendar management
                </li>
                <li style={{ marginBottom: '0.8rem', color: '#6b6b6b' }}>
                  ✓ Account preferences
                </li>
                <li style={{ marginBottom: '0.8rem', color: '#6b6b6b' }}>
                  ✓ Notification settings
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoTeamLayout;