export const getProductImagePath = (categoryPath, imageName) => {
  const encodedPath = categoryPath
    .split('/')
    .map(part => part.replace(/ /g, '%20'))
    .join('/')

  return `/Products/${encodedPath}/${imageName}`
}

export const checkImageExists = (src) => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

export const getAlternativePaths = (categoryPath, imageName) => {
  const encodedPath = categoryPath
    .split('/')
    .map(part => part.replace(/ /g, '%20'))
    .join('/')

  return [
    `/Products/${encodedPath}/${imageName}`,
    `/products/${encodedPath}/${imageName}`,
    `/Products/${categoryPath}/${imageName}`
  ]
}
