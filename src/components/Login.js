import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/api';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Call your backend API
      const response = await ApiService.login({
        email: formData.email,
        password: formData.password,
      });

      // Save token and user data
      if (response.token) {
        ApiService.saveToken(response.token);
      }
      if (response.user) {
        ApiService.saveUser(response.user);
      }

      // Success - redirect to dashboard
      console.log('Login successful', response);
      
      // Redirect to dashboard (you'll need to create this route)
      // navigate('/dashboard');
      
      // For now, redirect to home
      navigate('/');
      
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
    // Handle social login
  };

  // Mouse move effect for terminal glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      const terminal = document.querySelector('.terminal-window');
      if (terminal) {
        const rect = terminal.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          terminal.style.boxShadow = `
            ${(x - rect.width/2) / 10}px 
            ${(y - rect.height/2) / 10}px 
            80px rgba(204, 255, 0, 0.15)
          `;
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="login-container">
      {/* LEFT SIDE - SECURITY CLEARANCE BANNER */}
      <div className="security-banner">
        <div className="banner-header">
          <div className="logo">ESTOVERSE</div>
          <div className="security-level">RESTRICTED ACCESS</div>
        </div>

        <div className="clearance-info">
          <div className="clearance-title">SECURITY CLEARANCE</div>
        </div>

        <div className="banner-footer">
          <div className="access-code">ACCESS CODE</div>
          <div className="access-number">EST-2026-ALPHA</div>

          <div className="security-status">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <div className="status-text">System Online</div>
            </div>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <div className="status-text">Database Connected</div>
            </div>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <div className="status-text">Authentication Ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - LOGIN TERMINAL */}
      <div className="login-terminal">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-title">AUTHENTICATION TERMINAL</div>
            <div className="terminal-controls">
              <div className="control-dot"></div>
              <div className="control-dot"></div>
              <div className="control-dot"></div>
            </div>
          </div>

          <div className="terminal-content">
            <h1 className="access-prompt">ACCESS<br />REQUIRED</h1>
            <p className="access-subtitle">Enter credentials to proceed</p>

            {error && (
              <div style={{
                background: 'rgba(255, 0, 51, 0.1)',
                border: '2px solid #ff0033',
                padding: '1rem',
                marginBottom: '2rem',
                color: '#ff0033',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                ⚠ {error}
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">User ID</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="form-input" 
                  placeholder="COMMANDER@ESTOVERSE.COM"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">Security Key</label>
                <input 
                  type="password" 
                  id="password"
                  name="password"
                  className="form-input" 
                  placeholder="****************"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-checkbox">
                <input 
                  type="checkbox" 
                  id="remember"
                  name="remember"
                  className="checkbox-input"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <label htmlFor="remember" className="checkbox-label">Maintain Session</label>
              </div>

              <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`}>
                <span>{isLoading ? 'VERIFYING...' : 'AUTHENTICATE'}</span>
              </button>
            </form>

            <div className="social-divider">
              <span>OR CONNECT VIA</span>
            </div>

            <div className="social-buttons">
              <button className="social-btn" onClick={() => handleSocialLogin('discord')}>Discord</button>
              <button className="social-btn" onClick={() => handleSocialLogin('google')}>Google</button>
            </div>

            <div className="form-links">
              <a href="#" className="form-link">Forgot Credentials?</a>
              <a href="/register" className="form-link">Request Access</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
