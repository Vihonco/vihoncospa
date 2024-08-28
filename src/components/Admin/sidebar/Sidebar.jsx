import React, { useState } from 'react';
import './sider.css'; 

export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="menu">
        <h1>Menú</h1>
        <div className="banner">
          <h2 onClick={toggleDropdown} className="dropdown-title">Banner</h2>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="#crear">Crear</a></li>
              <li><a href="#crear">Ver</a></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
