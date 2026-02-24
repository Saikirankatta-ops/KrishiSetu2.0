import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import '../styles/global.css';

export default function StatCard({ icon, number, label, description }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <h3 className="stat-number">
          <AnimatedCounter number={number} suffix="+" />
        </h3>
        <p className="stat-label">{label}</p>
        <p className="stat-description">{description}</p>
      </div>
    </div>
  );
}
