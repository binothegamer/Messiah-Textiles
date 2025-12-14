import React, { useState } from 'react'
import './Products.css'
import ProductCategory from './ProductCategory'
import { productCategories } from '../utils/productConfig'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0].id)
  const [lightboxImage, setLightboxImage] = useState(null)

  const handleImageClick = (imageSrc) => {
    setLightboxImage(imageSrc)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Our Products</h2>
          <p>Discover our diverse range of premium textile products</p>
        </div>
      </section>

      <section className="content-section products-section">
        <div className="container">
          <div className="products-intro">
            <h2 className="section-title">Product Categories</h2>
            <p className="products-description">
              Explore our comprehensive collection of high-quality textiles, from premium shirts 
              to comfortable lounge wear, elegant women's clothing, and eco-friendly accessories.
            </p>
          </div>

          <div className="category-tabs">
            {productCategories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {productCategories.map((category) => (
            <div
              key={category.id}
              className={`category-content ${selectedCategory === category.id ? 'active' : ''}`}
            >
              <ProductCategory
                category={category}
                onImageClick={handleImageClick}
              />
            </div>
          ))}
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={lightboxImage} alt="Product" />
          </div>
        </div>
      )}
    </>
  )
}

export default Products

