import React, { useState } from 'react'
import './Tabs.css'

function Tabs() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      label: 'Cotton Shirts',
      content: {
        title: 'Cotton Shirts',
        description:
          'Everyday comfort, elevated. Our cotton shirts are woven from premium, long-staple cotton for a soft handfeel that gets better with every wash. Breathable, durable, and easy to care for, they’re designed for all-day comfort in the office, on the road, or at home.',
        features: [
          'Premium long-staple cotton',
          'Soft, breathable, and durable',
          'Ideal for work, travel, and daily wear',
          'Easy-care, everyday essential'
        ]
      }
    },
    {
      label: 'Linen Shirts',
      content: {
        title: 'Linen Shirts',
        description:
          'Lightweight luxury for warm days. Crafted from pure linen, these shirts offer exceptional breathability and a naturally relaxed drape. Perfect for tropical climates and summer evenings, they keep you cool while adding an effortless, refined look.',
        features: [
          '100% linen construction',
          'Naturally cool and breathable',
          'Relaxed, timeless drape',
          'Ideal for warm climates and summers'
        ]
      }
    },
    {
      label: 'Bamboo Leisurewear',
      content: {
        title: 'Bamboo Leisurewear',
        description:
          'Soft on skin, light on the planet. Our bamboo leisurewear is made from ultra-soft, naturally antibacterial bamboo fibers that regulate temperature and wick away moisture. Ideal for lounging, travel, and everyday wear, it delivers cloud-like comfort with a sustainable footprint.',
        features: [
          'Ultra-soft bamboo fibers',
          'Naturally antibacterial and breathable',
          'Moisture-wicking and temperature-regulating',
          'Perfect for lounging, travel, and daily wear'
        ]
      }
    },
    {
      label: 'Sleeping Bags',
      content: {
        title: 'Sleeping Bags',
        description:
          'Restfully warm, wherever you are. Engineered for comfort and protection, our sleeping bags combine insulating fillings with breathable linings for a restful night’s sleep. From family camping trips to overnight treks, they’re built to keep you warm, secure, and refreshed by morning.',
        features: [
          'Warm, insulating construction',
          'Breathable inner linings',
          'Suitable for camping and trekking',
          'Designed for secure, restful sleep outdoors'
        ]
      }
    },
    {
      label: 'Recycled Cotton Tote Bags',
      content: {
        title: 'Recycled Cotton Tote Bags',
        description:
          'Carry more, waste less. Made from recycled cotton yarns, these totes turn textile waste into durable, everyday essentials. Strong enough for groceries, books, and daily errands, they’re a stylish reminder that practical design and sustainability can go hand in hand.',
        features: [
          'Crafted from recycled cotton',
          'Durable for daily use and errands',
          'Reduces textile waste',
          'Functional and sustainability-focused design'
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

