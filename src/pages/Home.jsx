import React from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/global.css';

export default function Home({ setCurrentPage }) {
  const stats = [
    {
      icon: '👨‍🌾',
      number: '1M+',
      label: 'Farmers',
      description: 'Connected in India'
    },
    {
      icon: '📊',
      number: '50+',
      label: 'Schemes',
      description: 'Government Support'
    },
    {
      icon: '👥',
      number: '200+',
      label: 'Experts',
      description: 'Agricultural Specialists'
    },
    {
      icon: '📚',
      number: '100+',
      label: 'Resources',
      description: 'Learning Materials'
    }
  ];

  const whyFarming = [
    {
      icon: '🌾',
      title: 'Food Security',
      description: 'Agriculture is the backbone of food security, feeding billions worldwide'
    },
    {
      icon: '👨‍🌾',
      title: 'Employment',
      description: 'Provides livelihood to millions of farmers and agricultural workers'
    },
    {
      icon: '💰',
      title: 'Economic Growth',
      description: 'Major contributor to GDP and economic development of nations'
    }
  ];

  return (
    <div className="home-page">
      <HeroSection setCurrentPage={setCurrentPage} />

      {/* Why Farming Matters */}
      <section className="section" style={{ backgroundColor: '#F1F8E9' }}>
        <div className="section-container">
          <h2 style={{ marginBottom: '40px' }}>Why Farming Matters</h2>
          <div className="why-farming-grid">
            {whyFarming.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{fontSize: '48px'}}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="section-container">
          <h2 style={{ marginBottom: '40px' }}>Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon" style={{fontSize: '48px'}}>
                  {stat.icon}
                </div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
                <p className="stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-container">
          <h2 style={{ marginBottom: '40px' }}>What We Offer</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{fontSize: '48px'}}>📚</div>
              <h3>Educational Resources</h3>
              <p>Access comprehensive guides, tutorials, and best practices in modern farming techniques and sustainable agriculture</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{fontSize: '48px'}}>📋</div>
              <h3>Government Schemes</h3>
              <p>Discover and easily apply for various government support programs and subsidies designed for farmers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{fontSize: '48px'}}>👨‍🌾</div>
              <h3>Expert Guidance</h3>
              <p>Connect directly with experienced agricultural experts for personalized advice and consultation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{fontSize: '48px'}}>🛒</div>
              <h3>Market Connection</h3>
              <p>Access market opportunities and connect with buyers for your produce at competitive prices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{fontSize: '48px'}}>👥</div>
              <h3>Community Forum</h3>
              <p>Engage with fellow farmers, share experiences, and learn from success stories in agriculture</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{fontSize: '48px'}}>📊</div>
              <h3>Analytics & Tools</h3>
              <p>Track farm productivity and get actionable insights to improve your crop yields and profits</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
