import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <svg className="logo-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="60" height="40" rx="4" fill="#3498db" opacity="0.9"/>
            <rect x="25" y="35" width="50" height="30" rx="2" fill="#2c3e50"/>
            <line x1="30" y1="45" x2="70" y2="45" stroke="#3498db" strokeWidth="2"/>
            <line x1="30" y1="55" x2="70" y2="55" stroke="#3498db" strokeWidth="2"/>
            <circle cx="50" cy="15" r="8" fill="#3498db"/>
          </svg>
          <h1>Messiah Textiles</h1>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

