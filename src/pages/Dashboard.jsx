import React, { useState } from 'react';
import '../styles/global.css';

export default function Dashboard() {
  const [userRole, setUserRole] = useState('farmer');

  const farmerDashboard = (
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <h3>📚 My Resources</h3>
        <p>Total resources viewed: 24</p>
        <button className="btn-tertiary btn-small">View All</button>
      </div>
      <div className="dashboard-card">
        <h3>👨‍🌾 Expert Consultations</h3>
        <p>Upcoming: 2 consultations scheduled</p>
        <button className="btn-tertiary btn-small">Schedule Now</button>
      </div>
      <div className="dashboard-card">
        <h3>🎯 Your Goals</h3>
        <p>Progress: 65% complete</p>
        <button className="btn-tertiary btn-small">Update Goals</button>
      </div>
      <div className="dashboard-card">
        <h3>📋 Active Schemes</h3>
        <p>Enrolled in: 3 government schemes</p>
        <button className="btn-tertiary btn-small">Manage Schemes</button>
      </div>
    </div>
  );

  const adminDashboard = (
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <h3>👥 Total Users</h3>
        <p>Active: 50,250 users</p>
        <button className="btn-tertiary btn-small">Manage Users</button>
      </div>
      <div className="dashboard-card">
        <h3>📝 Content Management</h3>
        <p>Articles: 245 | Resources: 189</p>
        <button className="btn-tertiary btn-small">Edit Content</button>
      </div>
      <div className="dashboard-card">
        <h3>📊 Reports</h3>
        <p>Pending: 12 reports</p>
        <button className="btn-tertiary btn-small">Review Reports</button>
      </div>
      <div className="dashboard-card">
        <h3>📈 Analytics</h3>
        <p>Monthly engagement: +23%</p>
        <button className="btn-tertiary btn-small">View Analytics</button>
      </div>
    </div>
  );

  const expertDashboard = (
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <h3>📄 My Content</h3>
        <p>Articles published: 18</p>
        <button className="btn-tertiary btn-small">Create New</button>
      </div>
      <div className="dashboard-card">
        <h3>💬 Consultations</h3>
        <p>This month: 32 consultations</p>
        <button className="btn-tertiary btn-small">Upcoming Schedule</button>
      </div>
      <div className="dashboard-card">
        <h3>⭐ Rating</h3>
        <p>Average: 4.8/5.0 stars</p>
        <button className="btn-tertiary btn-small">View Feedback</button>
      </div>
      <div className="dashboard-card">
        <h3>🎓 Webinars</h3>
        <p>Upcoming: 2 webinars</p>
        <button className="btn-tertiary btn-small">Manage Events</button>
      </div>
    </div>
  );

  return (
    <div className="dashboard-page">
      <div className="section-container">
        <h1 className="page-title">Dashboard</h1>
        
        <div className="role-selector">
          <label>View Dashboard As: </label>
          <select value={userRole} onChange={(e) => setUserRole(e.target.value)}>
            <option value="farmer">Farmer</option>
            <option value="admin">Administrator</option>
            <option value="expert">Agricultural Expert</option>
          </select>
        </div>

        {userRole === 'farmer' && farmerDashboard}
        {userRole === 'admin' && adminDashboard}
        {userRole === 'expert' && expertDashboard}
      </div>
    </div>
  );
}
