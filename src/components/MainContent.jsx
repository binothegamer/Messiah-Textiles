import React, { useState } from 'react'
import Tabs from './Tabs'
import Accordion from './Accordion'
import ImageGallery from './ImageGallery'
import './MainContent.css'

function MainContent() {
  return (
    <main className="main-content">
      <section className="hero-section">
        <div className="hero-content">
          <h2>Premium Quality Textiles</h2>
          <p>Discover our exquisite collection of fabrics and textiles</p>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <ImageGallery />
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Product Categories</h2>
          <Tabs />
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <Accordion />
        </div>
      </section>
    </main>
  )
}

export default MainContent

