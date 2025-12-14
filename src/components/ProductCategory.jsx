import React, { useState, useEffect } from 'react'
import './ProductCategory.css'
import { getCategoryImages } from '../utils/productConfig'
import { getProductImagePath } from '../utils/imageLoader'

function ProductCategory({ category, onImageClick }) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadImages()
  }, [category.path, category.name])

  const loadImages = async () => {
    setLoading(true)
    try {
      // Get image file names from config
      const imageFiles = getCategoryImages(category.path)
      
      if (!imageFiles || imageFiles.length === 0) {
        console.warn(`No images configured for category: ${category.path}`)
        setImages([])
        setLoading(false)
        return
      }
      
      const imageList = []
      
      // Vite serves public folder files directly
      // Paths should match the folder structure exactly
      // For spaces in folder names, we'll try both encoded and non-encoded
      const pathParts = category.path.split('/')
      const normalizedPath = pathParts.join('/') // Keep original path structure
      
      imageFiles.forEach((imageName, index) => {
        // Use utility function to get proper image path
        const imageSrc = getProductImagePath(normalizedPath, imageName)
        
        imageList.push({
          src: imageSrc,
          alt: `${category.name} - Product ${index + 1}`,
          index: index
        })
      })
      
      // Log first few image paths for debugging
      if (imageList.length > 0) {
        console.log(`Loaded ${imageList.length} images for ${category.name}`)
        console.log('Sample paths:', imageList.slice(0, 3).map(img => img.src))
      }
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
        <div className="loading-spinner"></div>
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

  // Choose layout based on number of images
  const getLayoutType = () => {
    if (images.length <= 4) return 'featured'
    if (images.length <= 12) return 'grid'
    return 'masonry'
  }

  const layoutType = getLayoutType()

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
            className={`product-item ${index === 0 && layoutType === 'featured' ? 'featured' : ''}`}
            onClick={() => onImageClick(image.src)}
          >
            <div className="product-image-wrapper">
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 6 ? 'eager' : 'lazy'}
                onError={(e) => {
                  console.error('Failed to load image:', image.src)
                  const img = e.target
                  
                  // Try alternative path - switch between Products and products
                  if (image.src.includes('/Products/')) {
                    const altSrc = image.src.replace('/Products/', '/products/')
                    console.log('Trying lowercase path:', altSrc)
                    img.src = altSrc
                  } else if (image.src.includes('/products/')) {
                    const altSrc = image.src.replace('/products/', '/Products/')
                    console.log('Trying uppercase path:', altSrc)
                    img.src = altSrc
                  } else {
                    // Show error placeholder if all attempts fail
                    const wrapper = img.parentElement
                    if (wrapper && !wrapper.querySelector('.error-placeholder')) {
                      const errorDiv = document.createElement('div')
                      errorDiv.className = 'error-placeholder'
                      errorDiv.style.cssText = 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: #9ca3af; z-index: 1;'
                      errorDiv.innerHTML = '<div style="font-size: 2rem; margin-bottom: 0.5rem;">📷</div><div style="font-size: 0.875rem;">Image not found</div>'
                      wrapper.appendChild(errorDiv)
                    }
                    img.style.display = 'none'
                  }
                }}
                onLoad={(e) => {
                  e.target.classList.add('loaded')
                  e.target.style.opacity = '1'
                }}
                className="product-img"
                style={{ opacity: 1 }}
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

export default ProductCategory

