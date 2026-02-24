import React from 'react';
import '../styles/global.css';

export default function ExpertCard({ name, specialty, experience, image, bio }) {
  return (
    <div className="expert-card">
      <div className="expert-image">
        {image && typeof image === 'string' && image.indexOf('/') === -1 ? (
          <div className="expert-avatar" style={{fontSize: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{image}</div>
        ) : image ? (
          <img src={image} alt={name} className="expert-avatar" />
        ) : (
          <div className="expert-avatar" style={{fontSize: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>👨‍🌾</div>
        )}
      </div>
      <div className="expert-content">
        <h3 className="expert-name">{name}</h3>
        <p className="expert-specialty">{specialty}</p>
        <p className="expert-experience">Experience: {experience} years</p>
        <p className="expert-bio">{bio}</p>
        <button className="btn-tertiary btn-small">Connect</button>
      </div>
    </div>
  );
}
