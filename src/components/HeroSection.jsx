import React from 'react';
import '../styles/global.css';

export default function HeroSection({ setCurrentPage }) {
  const handleDashboardClick = () => {
    setCurrentPage('dashboard');
    window.scrollTo(0, 0);
  };

  const handleSchemesClick = () => {
    setCurrentPage('schemes');
    window.scrollTo(0, 0);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Empowering Farmers, Nourishing the Nation</h1>
        <p className="hero-subtitle">
          Connecting agriculture with opportunity and innovation. Access government schemes, expert guidance, and resources to transform your farming journey.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary btn-large" onClick={handleDashboardClick}>Explore Dashboard</button>
          <button className="btn-secondary btn-large" onClick={handleSchemesClick}>View Schemes</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="placeholder-image">
          <div className="hero-logo" style={{fontSize: '120px'}}>🌾</div>
        </div>
      </div>
    </section>
  );
}
