import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css';

// Landing Page Component
const LandingPage = () => (
  <div className="content-wrapper">
    <Navigation />
    <Hero />
    <ProblemSection />
    <FeaturesSection />
    <CTASection />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
