import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="nav-id" style={{ textDecoration: 'none' }}>ESTOVERSE</Link>
        <ul className="nav-links">
          <li><a href="#features">FEATURES</a></li>
          <li><a href="#intel">INTEL</a></li>
          <li><a href="#deploy">DEPLOY</a></li>
          <li><a href="#support">SUPPORT</a></li>
        </ul>
        <div className="nav-action">
          <Link to="/login">
            <button>INITIALIZE</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
