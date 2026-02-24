import React, { useState } from 'react';
import SchemeCard from '../components/SchemeCard';
import '../styles/global.css';

export default function Schemes() {
  const [expandedScheme, setExpandedScheme] = useState(null);

  const schemes = [
    {
      id: 1,
      title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
      description: 'Direct cash transfer scheme for all farmers',
      eligibility: 'All farmer families with cultivated land',
      benefits: '₹6,000 per year in 3 equal installments',
      icon: '💰',
      deadline: '15 March 2026'
    },
    {
      id: 2,
      title: 'Soil Health Card Scheme',
      description: 'Free soil testing and personalized recommendations',
      eligibility: 'All farmers',
      benefits: 'Free soil analysis and nutrient recommendations',
      icon: '🌱',
      deadline: '30 April 2026'
    },
    {
      id: 3,
      title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      description: 'Comprehensive crop insurance scheme',
      eligibility: 'All farmers regardless of land ownership',
      benefits: 'Protection against crop losses due to natural calamities',
      icon: '🌾',
      deadline: '31 May 2026'
    },
    {
      id: 4,
      title: 'Paramparagat Krishi Vikas Yojana',
      description: 'Organic farming promotion scheme',
      eligibility: 'Farmers willing to adopt organic farming',
      benefits: 'Subsidy and income support for 3 years',
      icon: '🥕',
      deadline: '20 June 2026'
    },
    {
      id: 5,
      title: 'Kisan Vikas Patra',
      description: 'Savings and investment scheme for farmers',
      eligibility: 'All farmer individuals',
      benefits: 'High return rate with government guarantee',
      icon: '🏦',
      deadline: 'Ongoing'
    },
    {
      id: 6,
      title: 'Integrated Scheme for Agricultural Development',
      description: 'Developing agricultural infrastructure',
      eligibility: 'Farmers interested in modern infrastructure',
      benefits: 'Grants and subsidies for infrastructure development',
      icon: '🚜',
      deadline: '10 July 2026'
    }
  ];

  return (
    <div className="schemes-page">
      <div className="section-container" style={{ paddingTop: '40px' }}>
        <h1 className="page-title">Government Schemes</h1>
        <p className="page-subtitle">Explore and apply for government support programs designed to help farmers grow and prosper</p>

        <div className="schemes-grid">
          {schemes.map((scheme) => (
            <SchemeCard 
              key={scheme.id} 
              {...scheme}
              isExpanded={expandedScheme === scheme.id}
              onLearnMore={() => setExpandedScheme(expandedScheme === scheme.id ? null : scheme.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
