import React from 'react'
import './ImageGallery.css'

function ImageGallery() {
  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=600&fit=crop',
      alt: 'Premium Cotton Fabric',
      title: 'Premium Cotton'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=600&fit=crop',
      alt: 'Silk Textiles',
      title: 'Luxury Silk'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Wool Fabric',
      title: 'Fine Wool'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop',
      alt: 'Linen Textiles',
      title: 'Natural Linen'
    }
  ]

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <div key={image.id} className="gallery-item">
          <div className="image-wrapper">
            <img src={image.src} alt={image.alt} />
            <div className="image-overlay">
              <h3>{image.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageGallery

