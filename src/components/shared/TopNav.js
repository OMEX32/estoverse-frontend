import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../services/api';

const TopNav = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    ApiService.logout();
    navigate('/login');
  };

  return (
    <nav style={{
      background: '#2d2d2d',
      borderBottom: '4px solid #CCFF00',
      padding: '1.5rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Logo */}
      <div style={{
        fontSize: '2rem',
        fontWeight: 700,
        color: '#CCFF00',
        fontFamily: 'Teko, sans-serif',
        letterSpacing: '3px',
        textTransform: 'uppercase'
      }}>
        ESTOVERSE
      </div>

      {/* Nav Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
      }}>
        <a href="#dashboard" style={{
          color: '#e8e8e8',
          textDecoration: 'none',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'color 0.3s'
        }}>
          Dashboard
        </a>
        <a href="#calendar" style={{
          color: '#e8e8e8',
          textDecoration: 'none',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Calendar
        </a>
        <a href="#profile" style={{
          color: '#e8e8e8',
          textDecoration: 'none',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.85rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Profile
        </a>
      </div>

      {/* User Info + Logout */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        {/* User Badge */}
        <div style={{
          background: '#1a1a1a',
          padding: '0.5rem 1rem',
          border: '2px solid #CCFF00',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          <div style={{ color: '#6b6b6b' }}>USER_ID</div>
          <div style={{ color: '#CCFF00' }}>{user.username}</div>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} style={{
          background: 'transparent',
          border: '2px solid #FF4500',
          color: '#FF4500',
          padding: '0.8rem 1.5rem',
          fontFamily: 'IBM Plex Mono, monospace',
          fontSize: '0.85rem',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'all 0.3s'
        }}
        onMouseOver={(e) => {
          e.target.style.background = '#FF4500';
          e.target.style.color = '#1a1a1a';
        }}
        onMouseOut={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#FF4500';
        }}>
          LOGOUT
        </button>
      </div>
    </nav>
  );
};

export default TopNav;