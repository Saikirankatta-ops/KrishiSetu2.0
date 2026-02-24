import React from 'react';
import '../styles/global.css';

export default function StatCard({ icon, number, label, description }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <h3 className="stat-number">{number}</h3>
        <p className="stat-label">{label}</p>
        <p className="stat-description">{description}</p>
      </div>
    </div>
  );
}
