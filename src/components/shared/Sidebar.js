import React from 'react';

const Sidebar = ({ items, activeItem }) => {
  return (
    <div style={{
      width: '280px',
      background: '#2d2d2d',
      borderRight: '2px solid #404040',
      padding: '2rem 0',
      height: 'calc(100vh - 80px)', // Subtract TopNav height
      position: 'sticky',
      top: '80px',
      overflowY: 'auto'
    }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            padding: '1.2rem 2rem',
            borderLeft: activeItem === item.id ? '4px solid #CCFF00' : '4px solid transparent',
            background: activeItem === item.id ? 'rgba(204, 255, 0, 0.05)' : 'transparent',
            cursor: 'pointer',
            transition: 'all 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
          onMouseOver={(e) => {
            if (activeItem !== item.id) {
              e.currentTarget.style.background = 'rgba(204, 255, 0, 0.02)';
            }
          }}
          onMouseOut={(e) => {
            if (activeItem !== item.id) {
              e.currentTarget.style.background = 'transparent';
            }
          }}
        >
          {/* Icon */}
          <span style={{
            fontSize: '1.2rem',
            color: activeItem === item.id ? '#CCFF00' : '#6b6b6b'
          }}>
            {item.icon}
          </span>

          {/* Label */}
          <div>
            <div style={{
              fontFamily: 'IBM Plex Mono, monospace',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              color: activeItem === item.id ? '#CCFF00' : '#e8e8e8',
              fontWeight: activeItem === item.id ? 700 : 400
            }}>
              {item.label}
            </div>
            {item.badge && (
              <div style={{
                fontSize: '0.7rem',
                color: '#6b6b6b',
                marginTop: '0.2rem'
              }}>
                {item.badge}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;