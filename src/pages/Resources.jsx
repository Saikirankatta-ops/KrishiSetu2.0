import React, { useState } from 'react';
import '../styles/global.css';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Modern Farming Techniques',
      category: 'guides',
      author: 'Dr. Rajesh Kumar',
      description: 'A comprehensive guide on advanced farming methods including precision agriculture and organic farming.',
      type: '📖 Guide',
      duration: '15 min read'
    },
    {
      id: 2,
      title: 'Crop Disease Management',
      category: 'videos',
      author: 'Agricultural Institute',
      description: 'Learn how to identify and manage common crop diseases effectively.',
      type: '🎥 Video',
      duration: '8 min'
    },
    {
      id: 3,
      title: 'Seasonal Crop Calendar',
      category: 'tools',
      author: 'Ministry of Agriculture',
      description: 'Interactive tool to plan your crop calendar based on your region and seasons.',
      type: '🛠️ Tool',
      duration: 'Interactive'
    },
    {
      id: 4,
      title: 'Water Conservation in Farming',
      category: 'guides',
      author: 'Environmental Expert',
      description: 'Best practices for efficient water management and irrigation techniques.',
      type: '📖 Guide',
      duration: '20 min read'
    },
    {
      id: 5,
      title: 'Soil Preparation Masterclass',
      category: 'videos',
      author: 'Dr. Priya Singh',
      description: 'Step-by-step video tutorial on proper soil preparation for maximum yield.',
      type: '🎥 Video',
      duration: '12 min'
    },
    {
      id: 6,
      title: 'Pesticide Safety Guide',
      category: 'guides',
      author: 'Health & Safety Division',
      description: 'Essential information on safe pesticide handling and storage.',
      type: '📖 Guide',
      duration: '10 min read'
    }
  ];

  const categories = ['all', 'guides', 'videos', 'tools'];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="resources-page">
      <div className="section-container" style={{ paddingTop: '40px' }}>
        <h1 className="page-title">Learning Resources</h1>
        <p className="page-subtitle">Access comprehensive guides, videos, tools, and more to enhance your farming knowledge</p>

        <div className="resources-filter">
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="resources-grid">
          {filteredResources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-header">
                <span className="resource-type">{resource.type}</span>
                <span className="resource-duration">{resource.duration}</span>
              </div>
              <h3>{resource.title}</h3>
              <p className="resource-author">By {resource.author}</p>
              <p className="resource-description">{resource.description}</p>
              <button className="btn-tertiary">Access Resource</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
