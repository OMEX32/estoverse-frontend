import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/api';
import '../styles/Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    game: '',
    teamName: '',
    region: '',
    terms: false,
    communications: false,
    age: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError(''); // Clear error when user types

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    if (password.length === 0) {
      setPasswordStrength(0);
      return;
    }

    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength++;
    if (password.match(/\d/)) strength++;
    if (password.match(/[^a-zA-Z\d]/)) strength++;

    setPasswordStrength(strength);
  };

  const updateProgress = () => {
    const requiredFields = [
      'firstName', 'lastName', 'username', 'email', 
      'password', 'confirmPassword', 'role', 'game', 'region'
    ];
    const requiredCheckboxes = ['terms', 'age'];

    let filled = 0;
    let total = requiredFields.length + requiredCheckboxes.length;

    requiredFields.forEach(field => {
      if (formData[field].trim() !== '') filled++;
    });

    requiredCheckboxes.forEach(field => {
      if (formData[field]) filled++;
    });

    setProgress((filled / total) * 100);
  };

  useEffect(() => {
    updateProgress();
  }, [formData]);

  const isFormValid = () => {
    const requiredFields = [
      'firstName', 'lastName', 'username', 'email', 
      'password', 'confirmPassword', 'role', 'game', 'region'
    ];
    
    const allFieldsFilled = requiredFields.every(field => formData[field].trim() !== '');
    const checkboxesChecked = formData.terms && formData.age;
    
    return allFieldsFilled && checkboxesChecked;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('SECURITY KEYS DO NOT MATCH');
      return;
    }

    setIsLoading(true);

    try {
      // Prepare data for your backend
      const registrationData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };

      // Call your backend API
      const response = await ApiService.register(registrationData);

      // Save token and user data if returned
      if (response.token) {
        ApiService.saveToken(response.token);
      }
      if (response.user) {
        ApiService.saveUser(response.user);
      }

      // Success - redirect to login or dashboard
      console.log('Registration successful', response);
      
      // Redirect to login page
      navigate('/login');
      
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialRegistration = (provider) => {
    console.log(`Social registration with ${provider}`);
    // Handle social registration
  };

  const getStrengthClass = () => {
    if (passwordStrength <= 1) return 'weak';
    if (passwordStrength <= 2) return 'medium';
    return 'strong';
  };

  return (
    <div className="registration-container">
      {/* LEFT SIDE - CLEARANCE REQUEST BANNER */}
      <div className="clearance-banner">
        <div className="banner-header">
          <div className="logo">ESTOVERSE</div>
          <div className="registration-level">NEW CLEARANCE REQUEST</div>
        </div>

        <div className="requirements-section">
          <h3 className="requirements-title">REQUIREMENTS</h3>
          
          <div className="requirement-item">
            <div className="requirement-icon">▶</div>
            <div className="requirement-text">VALID EMAIL ADDRESS FOR COMMAND CENTER ACCESS</div>
          </div>

          <div className="requirement-item">
            <div className="requirement-icon">▶</div>
            <div className="requirement-text">SECURE PASSWORD WITH MINIMUM 8 CHARACTERS</div>
          </div>

          <div className="requirement-item">
            <div className="requirement-icon">▶</div>
            <div className="requirement-text">TEAM DESIGNATION AND PRIMARY ROLE SELECTION</div>
          </div>

          <div className="requirement-item">
            <div className="requirement-icon">▶</div>
            <div className="requirement-text">AGREEMENT TO ESTOVERSE TERMS OF SERVICE</div>
          </div>

          <div className="requirement-item">
            <div className="requirement-icon">▶</div>
            <div className="requirement-text">DISCORD INTEGRATION FOR TACTICAL COMMUNICATIONS</div>
          </div>
        </div>

        <div className="banner-footer">
          <div className="progress-info">
            <div className="progress-label">REGISTRATION PROGRESS</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="system-status">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <div className="status-text">System Online</div>
            </div>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <div className="status-text">Registration Open</div>
            </div>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <div className="status-text">Database Ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - REGISTRATION TERMINAL */}
      <div className="registration-terminal">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-title">CLEARANCE REQUEST TERMINAL</div>
            <div className="terminal-controls">
              <div className="control-dot"></div>
              <div className="control-dot"></div>
              <div className="control-dot"></div>
            </div>
          </div>

          <div className="terminal-content">
            <h1 className="clearance-prompt">REQUEST<br />CLEARANCE</h1>
            <p className="clearance-subtitle">Complete all fields to initialize your command account</p>

            {error && (
              <div style={{
                background: 'rgba(255, 204, 0, 0.1)',
                border: '2px solid var(--warning-yellow)',
                padding: '1rem',
                marginBottom: '2rem',
                color: 'var(--warning-yellow)',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                ⚠ {error}
              </div>
            )}

            <form className="registration-form" onSubmit={handleSubmit}>
              {/* STEP 1: PERSONAL INFO */}
              <div className="form-step">
                <div className="step-header">
                  <div className="step-number">01</div>
                  <div className="step-title">Personal Info</div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      name="firstName"
                      className="form-input" 
                      placeholder="JOHN"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      name="lastName"
                      className="form-input" 
                      placeholder="DOE"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="username">Username / Callsign</label>
                  <input 
                    type="text" 
                    id="username"
                    name="username"
                    className="form-input" 
                    placeholder="COMMANDER_01"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
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
              </div>

              {/* STEP 2: SECURITY */}
              <div className="form-step">
                <div className="step-header">
                  <div className="step-number">02</div>
                  <div className="step-title">Security</div>
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
                  <div className="password-strength">
                    {[1, 2, 3, 4].map(num => (
                      <div 
                        key={num}
                        className={`strength-bar ${num <= passwordStrength ? `active ${getStrengthClass()}` : ''}`}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="confirmPassword">Confirm Security Key</label>
                  <input 
                    type="password" 
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-input" 
                    placeholder="****************"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* STEP 3: TEAM INFO */}
              <div className="form-step">
                <div className="step-header">
                  <div className="step-number">03</div>
                  <div className="step-title">Team Details</div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="role">Primary Role</label>
                  <select 
                    id="role"
                    name="role"
                    className="form-select"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">SELECT ROLE</option>
                    <option value="coach">COACH / TEAM LEADER</option>
                    <option value="player">PLAYER</option>
                    <option value="analyst">ANALYST</option>
                    <option value="manager">MANAGER</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="game">Primary Game</label>
                  <select 
                    id="game"
                    name="game"
                    className="form-select"
                    value={formData.game}
                    onChange={handleChange}
                    required
                  >
                    <option value="">SELECT GAME</option>
                    <option value="valorant">VALORANT</option>
                    <option value="lol">LEAGUE OF LEGENDS</option>
                    <option value="csgo">CS:GO / CS2</option>
                    <option value="r6">RAINBOW SIX SIEGE</option>
                    <option value="rocket-league">ROCKET LEAGUE</option>
                    <option value="dota2">DOTA 2</option>
                    <option value="other">OTHER</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="teamName">Team Name (Optional)</label>
                    <input 
                      type="text" 
                      id="teamName"
                      name="teamName"
                      className="form-input" 
                      placeholder="ALPHA SQUAD"
                      value={formData.teamName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="region">Region</label>
                    <select 
                      id="region"
                      name="region"
                      className="form-select"
                      value={formData.region}
                      onChange={handleChange}
                      required
                    >
                      <option value="">SELECT REGION</option>
                      <option value="na">NORTH AMERICA</option>
                      <option value="eu">EUROPE</option>
                      <option value="asia">ASIA</option>
                      <option value="oce">OCEANIA</option>
                      <option value="sa">SOUTH AMERICA</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* AGREEMENTS */}
              <div className="checkbox-group">
                <div className="form-checkbox">
                  <input 
                    type="checkbox" 
                    id="terms"
                    name="terms"
                    className="checkbox-input"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="terms" className="checkbox-label">
                    I ACKNOWLEDGE AND AGREE TO THE <a href="#">ESTOVERSE TERMS OF SERVICE</a> AND <a href="#">PRIVACY POLICY</a>
                  </label>
                </div>

                <div className="form-checkbox">
                  <input 
                    type="checkbox" 
                    id="communications"
                    name="communications"
                    className="checkbox-input"
                    checked={formData.communications}
                    onChange={handleChange}
                  />
                  <label htmlFor="communications" className="checkbox-label">
                    I CONSENT TO RECEIVE TACTICAL UPDATES AND COMMUNICATIONS VIA EMAIL
                  </label>
                </div>

                <div className="form-checkbox">
                  <input 
                    type="checkbox" 
                    id="age"
                    name="age"
                    className="checkbox-input"
                    checked={formData.age}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="age" className="checkbox-label">
                    I CONFIRM THAT I AM AT LEAST 13 YEARS OF AGE
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={!isFormValid()}
              >
                <span>
                  {isLoading ? 'PROCESSING REQUEST...' : 'REQUEST CLEARANCE'}
                </span>
              </button>

              <div className="social-divider">
                <span>OR REGISTER VIA</span>
              </div>

              <div className="social-buttons">
                <button type="button" className="social-btn" onClick={() => handleSocialRegistration('discord')}>Discord</button>
                <button type="button" className="social-btn" onClick={() => handleSocialRegistration('google')}>Google</button>
              </div>

              <div className="form-footer">
                <a href="/login" className="form-link">Already Have Clearance? Access System →</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
