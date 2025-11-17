import React, { useState } from 'react'
import './Tabs.css'

function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: 'Cotton',
      content: {
        title: 'Premium Cotton Collection',
        description: 'Our cotton fabrics are sourced from the finest cotton fields, ensuring softness, durability, and breathability. Perfect for clothing, home textiles, and more.',
        features: [
          '100% Organic Cotton',
          'Multiple Weights Available',
          'Various Colors and Patterns',
          'Eco-Friendly Production'
        ]
      }
    },
    {
      label: 'Silk',
      content: {
        title: 'Luxury Silk Textiles',
        description: 'Experience the elegance of our premium silk collection. Handpicked for their luster and quality, these silks are perfect for high-end fashion and luxury home decor.',
        features: [
          'Mulberry Silk',
          'Natural Dyes',
          'Multiple Grades',
          'Custom Weaving Available'
        ]
      }
    },
    {
      label: 'Wool',
      content: {
        title: 'Fine Wool Fabrics',
        description: 'Our wool collection features premium quality fibers that provide exceptional warmth and comfort. Ideal for winter clothing and cozy home textiles.',
        features: [
          'Merino Wool Available',
          'Natural Insulation',
          'Moisture Wicking',
          'Sustainable Sourcing'
        ]
      }
    },
    {
      label: 'Linen',
      content: {
        title: 'Natural Linen Collection',
        description: 'Discover our range of natural linen fabrics, known for their strength, coolness, and timeless elegance. Perfect for summer clothing and home furnishings.',
        features: [
          '100% Flax Linen',
          'Natural Texture',
          'Breathable Material',
          'Eco-Conscious Choice'
        ]
      }
    }
  ]

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <div className="tab-panel">
          <h3>{tabs[activeTab].content.title}</h3>
          <p>{tabs[activeTab].content.description}</p>
          <ul className="features-list">
            {tabs[activeTab].content.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Tabs

