import React from 'react'
import './ImageGallery.css'

function ImageGallery() {
  const images = [
    {
      id: 1,
      src: '/Products/Mens/Shirts/Picture28.png',
      alt: 'Premium Cotton Fabric',
      title: 'Premium Cotton'
    },
    {
      id: 2,
      src: '/Products/Mens/Shirts/Picture15.png',
      alt: 'Silk Textiles',
      title: 'Luxury Silk'
    },
    {
      id: 3,
      src: '/Products/Mens/Lounge wear/Picture33.png',
      alt: 'Wool Fabric',
      title: 'Fine Wool'
    },
    {
      id: 4,
      src: '/Products/Mens/Shirts/Picture10.png',
      alt: 'Linen Textiles',
      title: 'Natural Linen'
    },
    {
      id: 5,
      src: '/Products/Women/Picture42.png',
      alt: 'Linen Textiles',
      title: 'Natural Linen'
    },
    {
      id: 6,
      src: '/Products/Mens/Lounge wear/Picture35.png',
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

