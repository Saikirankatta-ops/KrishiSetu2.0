import React from 'react';
import '../styles/global.css';

export default function Footer({ setCurrentPage }) {
  const handleFooterNavClick = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-brand">
            <span className="footer-logo" style={{fontSize: '32px'}}>🌾</span>
            KrishiSetu
          </h3>
          <p>Empowering farmers through knowledge and opportunities for sustainable agriculture.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => handleFooterNavClick('home')} style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit'}}>Home</button></li>
            <li><button onClick={() => handleFooterNavClick('schemes')} style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit'}}>Government Schemes</button></li>
            <li><button onClick={() => handleFooterNavClick('resources')} style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit'}}>Resources</button></li>
            <li><button onClick={() => handleFooterNavClick('experts')} style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit'}}>Expert Guidance</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>support@krishisetu.gov.in</li>
            <li>+91-1800-KRISHISETU</li>
            <li>Ministry of Agriculture, India</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 KrishiSetu. Empowering Agriculture. All rights reserved.</p>
      </div>
    </footer>
  );
}
