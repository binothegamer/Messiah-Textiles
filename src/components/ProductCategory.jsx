import React, { useEffect, useState } from 'react'
import './ProductCategory.css'
import { getCategoryImages } from '../utils/productConfig'
import { getProductImagePath } from '../utils/imageLoader'

function ProductCategory({ category, onImageClick }) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!category?.path) return
    loadImages()
  }, [category?.path])

  const loadImages = async () => {
    setLoading(true)

    try {
      const imageFiles = getCategoryImages(category.path)

      if (!imageFiles || imageFiles.length === 0) {
        console.warn(`No images configured for category: ${category.path}`)
        setImages([])
        return
      }

      const imageList = imageFiles.map((imageName, index) => ({
        src: getProductImagePath(category.path, imageName),
        alt: `${category.name} - Product ${index + 1}`,
        index
      }))

      console.log(`Loaded ${imageList.length} images for ${category.name}`)
      console.log('Sample paths:', imageList.slice(0, 3).map(i => i.src))

      setImages(imageList)
    } catch (error) {
      console.error('Error loading images:', error)
      setImages([])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="category-loading">
        <div className="loading-spinner" />
        <p>Loading products...</p>
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="category-empty">
        <p>No products found in this category.</p>
      </div>
    )
  }

  const layoutType =
    images.length <= 4 ? 'featured' :
    images.length <= 12 ? 'grid' :
    'masonry'

  return (
    <div className={`product-category ${layoutType}-layout`}>
      <div className="category-header">
        <h3>{category.name}</h3>
        <p className="category-description">{category.description}</p>
        <span className="product-count">{images.length} products</span>
      </div>

      <div className={`product-gallery ${layoutType}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`product-item ${
              index === 0 && layoutType === 'featured' ? 'featured' : ''
            }`}
            onClick={() => onImageClick(image.src)}
          >
            <div className="product-image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 6 ? 'eager' : 'lazy'}
                className="product-img"
                onLoad={e => e.currentTarget.classList.add('loaded')}
                onError={e => handleImageError(e, image.src)}
              />

              <div className="product-overlay">
                <span className="view-icon">👁️</span>
                <span className="view-text">View</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- Image Fallback Handler ---------- */

const handleImageError = (e, src) => {
  const img = e.currentTarget

  if (src.includes('/Products/')) {
    img.src = src.replace('/Products/', '/products/')
    return
  }

  img.style.display = 'none'

  const wrapper = img.parentElement
  if (wrapper && !wrapper.querySelector('.error-placeholder')) {
    const errorDiv = document.createElement('div')
    errorDiv.className = 'error-placeholder'
    errorDiv.innerHTML = `
      <div style="font-size:2rem">📷</div>
      <div style="font-size:0.85rem">Image not found</div>
    `
    wrapper.appendChild(errorDiv)
  }
}

export default ProductCategory
