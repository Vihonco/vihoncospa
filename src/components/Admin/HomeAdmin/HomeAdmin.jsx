import React from 'react';
import Banner from '../Banner/Banner';
import Nabvar from '../navbar/Nabvar';
import Sidebar from '../sidebar/Sidebar';
import './homeAdmin.css';

export default function HomeAdmin() {
  return (
    <div className="home-admin-container">
      <Nabvar className="navbar" />
      <div className="main-content">
        
        <Sidebar className="sidebar" />
      </div>
    </div>
  );
}
