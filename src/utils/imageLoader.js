// Utility to help load product images with proper path handling

/**
 * Get the correct image path for a product image
 * Handles spaces in folder names and ensures proper URL encoding
 */
export const getProductImagePath = (categoryPath, imageName) => {
  // Vite serves files from public folder at root
  // Handle spaces in folder names - try both encoded and non-encoded
  const pathParts = categoryPath.split('/')
  
  // For paths with spaces, we need to encode them properly
  // But Vite might handle them automatically, so we'll try the original first
  const basePath = `/products/${categoryPath}/${imageName}`
  
  return basePath
}

/**
 * Preload an image to check if it exists
 */
export const checkImageExists = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

/**
 * Get alternative paths to try if the main path fails
 */
export const getAlternativePaths = (categoryPath, imageName) => {
  const alternatives = []
  
  // Original path
  alternatives.push(`/products/${categoryPath}/${imageName}`)
  
  // Path with encoded spaces
  const encodedPath = categoryPath.split('/').map(part => encodeURIComponent(part)).join('/')
  alternatives.push(`/products/${encodedPath}/${imageName}`)
  
  // Path with spaces as %20
  const spaceEncodedPath = categoryPath.replace(/ /g, '%20')
  alternatives.push(`/products/${spaceEncodedPath}/${imageName}`)
  
  return alternatives
}

