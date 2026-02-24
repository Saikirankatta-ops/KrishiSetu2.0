import React, { useState } from 'react';
import ExpertCard from '../components/ExpertCard';
import '../styles/global.css';

export default function Experts() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const experts = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Organic Farming',
      experience: 15,
      image: '👨‍🌾',
      bio: 'Expert in sustainable organic farming practices with focus on soil health'
    },
    {
      name: 'Dr. Priya Singh',
      specialty: 'Crop Management',
      experience: 12,
      image: '👩‍🌾',
      bio: 'Specialist in modern crop management and pest control strategies'
    },
    {
      name: 'Mr. Arun Patel',
      specialty: 'Irrigation',
      experience: 18,
      image: '👨‍🌾',
      bio: 'Expert in water management and advanced irrigation systems'
    },
    {
      name: 'Dr. Neha Gupta',
      specialty: 'Soil Science',
      experience: 14,
      image: '👩‍🌾',
      bio: 'Soil scientist specializing in fertility management and testing'
    },
    {
      name: 'Mr. Vikram Singh',
      specialty: 'Horticulture',
      experience: 16,
      image: '👨‍🌾',
      bio: 'Fruit and vegetable cultivation expert with market knowledge'
    },
    {
      name: 'Dr. Anjali Verma',
      specialty: 'Agricultural Technology',
      experience: 10,
      image: '👩‍🌾',
      bio: 'Tech enthusiast helping farmers adopt digital farming solutions'
    }
  ];

  const specialties = ['all', 'Organic Farming', 'Crop Management', 'Irrigation', 'Soil Science', 'Horticulture', 'Agricultural Technology'];

  const filteredExperts = selectedSpecialty === 'all'
    ? experts
    : experts.filter(e => e.specialty === selectedSpecialty);

  return (
    <div className="experts-page">
      <div className="section-container" style={{ paddingTop: '40px' }}>
        <h1 className="page-title">Agricultural Experts</h1>
        <p className="page-subtitle">Connect with experienced agricultural specialists for personalized guidance and support</p>

        <div className="experts-filter">
          <label>Filter by specialty: </label>
          <div className="filter-buttons">
            {specialties.map(specialty => (
              <button
                key={specialty}
                className={`filter-btn ${selectedSpecialty === specialty ? 'active' : ''}`}
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        <div className="experts-grid">
          {filteredExperts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      </div>
    </div>
  );
}
