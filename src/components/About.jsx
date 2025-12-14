import React from 'react'
import './About.css'

function About() {
  const whyChooseUs = [
    {
      title: 'Creative Competence',
      icon: '🎨',
      description: 'Innovative designs and creative solutions for your textile needs'
    },
    {
      title: 'Personalized Service',
      icon: '👥',
      description: 'Dedicated support tailored to your specific requirements'
    },
    {
      title: 'Speed to Market',
      icon: '⚡',
      description: 'Efficient processes ensuring timely delivery'
    },
    {
      title: 'Execution Excellence',
      icon: '✨',
      description: 'Meticulous attention to detail in every project'
    },
    {
      title: 'Price & Quality',
      icon: '💰',
      description: 'Best value proposition without compromising on quality'
    },
    {
      title: 'Global Sourcing',
      icon: '🌍',
      description: 'Access to diversified supplier portfolio worldwide'
    }
  ]

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2>About Messiah Textiles</h2>
          <p>Your trusted partner in premium textile manufacturing and export</p>
        </div>
      </section>

      <section className="content-section about-section">
        <div className="container">
          <div className="about-intro">
            <div className="intro-content">
              <div className="established-badge">
                <span className="badge-year">2024</span>
                <span className="badge-text">Established</span>
              </div>
              <h2 className="section-title">Who We Are</h2>
              <p className="intro-text">
                Messiah Textiles is a leading apparel design, development, compliant manufacturer and exporter. 
                We are driven by a <strong>customer-centric passion</strong>, supported by a diversified global 
                supplier portfolio, optimizing cross-channel services to deliver exceptional value.
              </p>
            </div>
            <div className="intro-image">
              <img 
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop" 
                alt="Textile manufacturing" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="card-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                "To make cutting-edge technical fabrics accessible to customers worldwide at revolutionary 
                prices, democratizing premium quality."
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                "Customer-oriented at our core, we prioritize our customers' best interests in every decision. 
                Delivering exceptional value through innovation, quality, and affordability."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section why-choose-section">
        <div className="container">
          <h2 className="section-title">Why Choose Messiah Textiles?</h2>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section capacity-section">
        <div className="container">
          <h2 className="section-title">Capacity & Core Strengths</h2>
          
          <div className="capacity-grid">
            <div className="capacity-card production-card">
              <div className="capacity-header">
                <h3>Production, Lead Time & Payment</h3>
              </div>
              <div className="capacity-content">
                <div className="capacity-item">
                  <span className="capacity-label">Production Capacity:</span>
                  <span className="capacity-value">80,000 pcs/month</span>
                </div>
                <div className="capacity-item">
                  <span className="capacity-label">Payment Terms:</span>
                  <span className="capacity-value">30% Advance balance LC at sight/ Documents thru Bank</span>
                </div>
                <div className="capacity-item">
                  <span className="capacity-label">Lead Time:</span>
                  <span className="capacity-value">90-110 days from order confirmation</span>
                </div>
              </div>
            </div>

            <div className="capacity-card fabrics-card">
              <div className="capacity-header">
                <h3>Fabrics Used</h3>
              </div>
              <div className="fabrics-list">
                <div className="fabric-tag">100% Cotton</div>
                <div className="fabric-tag">Linen</div>
                <div className="fabric-tag">Blends in Wovens</div>
                <div className="fabric-tag">Bamboo Elastane in Jersey</div>
                <div className="fabric-tag">Bamboo Cotton in Woven Satin</div>
                <div className="fabric-tag">Oxford Twills</div>
              </div>
            </div>
          </div>

          <div className="strengths-grid">
            <div className="strength-card">
              <img 
                src="https://images.unsplash.com/photo-1596755094514-1a7b8c0e8b0a?w=600&h=400&fit=crop" 
                alt="Core strengths"
              />
              <div className="strength-content">
                <h3>Core Strengths</h3>
                <ul className="strength-list">
                  <li>Shirts</li>
                  <li>Nightwear</li>
                  <li>Pajamas</li>
                  <li>Ladies' and Children's Leisurewear</li>
                  <li>Shopping Bags</li>
                </ul>
              </div>
            </div>

            <div className="strength-card">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
                alt="Product categories"
              />
              <div className="strength-content">
                <h3>Product Categories</h3>
                <ul className="strength-list">
                  <li>Cotton and Linen Shirts</li>
                  <li>Bamboo Leisurewear and Sleeping Bags</li>
                  <li>Recycled Cotton Tote Bags</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

