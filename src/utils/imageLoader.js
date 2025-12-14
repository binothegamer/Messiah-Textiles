// Utility to help load product images with proper path handling

/**
 * Get the correct image path for a product image
 * Handles spaces in folder names and ensures proper URL encoding
 */
export const getProductImagePath = (categoryPath, imageName) => {
  // Vite serves files from public folder at root
  // The folder is "Products" (capital P) not "products"
  // Handle spaces in folder names by encoding them
  const encodedPath = categoryPath.split('/').map(part => {
    // Encode spaces in folder names
    return part.replace(/ /g, '%20')
  }).join('/')
  
  // Use capital P for Products folder to match actual structure
  const basePath = `/Products/${encodedPath}/${imageName}`
  
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
  
  // Try with capital P (correct)
  const encodedPath = categoryPath.split('/').map(part => part.replace(/ /g, '%20')).join('/')
  alternatives.push(`/Products/${encodedPath}/${imageName}`)
  
  // Try with lowercase p (fallback)
  alternatives.push(`/products/${encodedPath}/${imageName}`)
  
  // Try without encoding spaces
  alternatives.push(`/Products/${categoryPath}/${imageName}`)
  
  return alternatives
}

