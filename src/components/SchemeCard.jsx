import React from 'react';
import '../styles/global.css';

export default function SchemeCard({ title, description, eligibility, benefits, icon, deadline, isExpanded, onLearnMore }) {
  return (
    <div className="scheme-card">
      <div className="scheme-header">
        <span className="scheme-icon">
          {icon && typeof icon === 'string' && icon.indexOf('/') !== -1 ? (
            <img src={icon} alt="Scheme Icon" className="scheme-icon-img" />
          ) : (
            icon
          )}
        </span>
        <h3>{title}</h3>
      </div>
      <p className="scheme-description">{description}</p>
      
      <div className="scheme-details">
        <div className="detail-group">
          <h4>Eligibility</h4>
          <p>{eligibility}</p>
        </div>
        <div className="detail-group">
          <h4>Key Benefits</h4>
          <p>{benefits}</p>
        </div>
        {deadline && (
          <div className="detail-group">
            <h4>Application Deadline</h4>
            <p style={{ color: '#FBC02D', fontWeight: '600' }}>{deadline}</p>
          </div>
        )}
      </div>

      <button className="btn-tertiary" onClick={onLearnMore}>
        {isExpanded ? 'Hide Details' : 'Learn More'}
      </button>
    </div>
  );
}
