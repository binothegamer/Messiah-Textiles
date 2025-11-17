import React, { useState } from 'react'
import './Accordion.css'

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const items = [
    {
      question: 'What types of fabrics do you offer?',
      answer: 'We offer a wide range of premium fabrics including cotton, silk, wool, and linen. Each category has multiple varieties, weights, and colors to choose from. Our collection is constantly updated with new arrivals.'
    },
    {
      question: 'Do you offer custom orders?',
      answer: 'Yes, we do offer custom orders for bulk purchases. Please contact us with your specific requirements, and our team will work with you to fulfill your needs. Custom orders typically require 2-4 weeks for processing.'
    },
    {
      question: 'What is your return policy?',
      answer: 'We accept returns within 30 days of purchase for unused fabrics in their original condition. Custom orders and cut fabrics are non-returnable. Please contact our customer service team to initiate a return.'
    },
    {
      question: 'How do I care for the fabrics?',
      answer: 'Care instructions vary by fabric type. Generally, cotton can be machine washed, silk requires gentle hand washing or dry cleaning, wool should be hand washed in cold water, and linen can be machine washed on gentle cycle. Specific care instructions are provided with each purchase.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping page or contact us for specific information about shipping to your country.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, bank transfers, and other secure payment methods. For bulk orders, we also offer payment plans and trade credit options for qualified businesses.'
    }
  ]

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <span>{item.question}</span>
            <span className="accordion-icon">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion

