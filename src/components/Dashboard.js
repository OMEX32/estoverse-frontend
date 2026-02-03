import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/api';

// Import layouts (we'll create these next)
import CoachLayout from '../layouts/CoachLayout';
import PlayerLayout from '../layouts/PlayerLayout';
import NoTeamLayout from '../layouts/NoTeamLayout';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    if (!ApiService.isAuthenticated()) {
      navigate('/login');
      return;
    }

    // Load user data
    loadUser();
  }, [navigate]);

  const loadUser = async () => {
    try {
      // First, try to get user from localStorage (fast)
      const cachedUser = ApiService.getUser();
      if (cachedUser) {
        setUser(cachedUser);
        setLoading(false);
      }

      // Then, fetch fresh data from backend
      const response = await ApiService.getCurrentUser();
      setUser(response.user);
      ApiService.saveUser(response.user);
    } catch (error) {
      console.error('Failed to load user:', error);
      ApiService.logout();
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#1a1a1a',
        color: '#CCFF00',
        fontFamily: 'IBM Plex Mono, monospace',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        letterSpacing: '3px'
      }}>
        <div>
          <div style={{ marginBottom: '1rem' }}>⚡ INITIALIZING...</div>
          <div style={{
            width: '200px',
            height: '4px',
            background: '#2d2d2d',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '50%',
              height: '100%',
              background: '#CCFF00',
              animation: 'loading 1s ease-in-out infinite'
            }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Determine which layout to show
  const renderLayout = () => {
    // COACH or MANAGER → Coach Layout
    if (user.role === 'COACH' || user.role === 'MANAGER') {
      return <CoachLayout user={user} />;
    }

    // PLAYER or ANALYST → Check if they have a team
    // For now, we'll assume they don't have a team
    // Later, we'll fetch team data and check
    const hasTeam = false; // TODO: Check user.teamMembers

    if (hasTeam) {
      return <PlayerLayout user={user} />;
    } else {
      return <NoTeamLayout user={user} />;
    }
  };

  return renderLayout();
};

export default Dashboard;