import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Messiah Textiles</h3>
          <p>Your trusted source for premium quality fabrics and textiles. We bring you the finest materials from around the world.</p>
        </div>
        
        <div className="footer-section">
          <h4>Contact Information</h4>
          <div className="contact-info">
            <p>
              <strong>Address:</strong><br />
              123 Textile Street<br />
              Fabric City, FC 12345<br />
              United States
            </p>
            <p>
              <strong>Phone:</strong><br />
              +1 (555) 123-4567
            </p>
            <p>
              <strong>Email:</strong><br />
              info@messiahtextiles.com
            </p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Business Hours</h4>
          <div className="business-hours">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Messiah Textiles. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

