// Product categories configuration
// To add a new category:
// 1. Add folder structure in public/Products/
// 2. Add category object to productCategories array
// 3. Add image files array to categoryImages map

export const productCategories = [
  {
    id: 'mens-shirts',
    name: "Men's Shirts",
    path: 'Mens/Shirts',
    description: 'Premium cotton and linen shirts for the modern gentleman'
  },
  {
    id: 'mens-lounge',
    name: "Men's Lounge Wear",
    path: 'Mens/Lounge wear',
    description: 'Comfortable and stylish lounge wear for relaxation'
  },
  {
    id: 'women',
    name: "Women's Collection",
    path: 'Women',
    description: 'Elegant and comfortable clothing for women'
  },
  {
    id: 'children',
    name: "Children's Wear",
    path: 'Children',
    description: 'Soft and safe clothing for little ones'
  },
  {
    id: 'bags',
    name: 'Bags',
    path: 'Bags',
    description: 'Eco-friendly tote bags and shopping bags'
  },
  {
    id: 'work-wear',
    name: 'Work Wear',
    path: 'Work Wear',
    description: 'Durable and professional work wear solutions'
  }
]

// Map category paths to their image file names
// Update this when adding new product images
export const categoryImages = {
  'Mens/Shirts': [
    'Picture6.png', 'Picture7.png', 'Picture8.png', 'Picture9.png', 'Picture10.png',
    'Picture11.png', 'Picture12.png', 'Picture13.png', 'Picture14.png', 'Picture15.png',
    'Picture16.png', 'Picture17.png', 'Picture18.png', 'Picture19.png', 'Picture20.png',
    'Picture21.png', 'Picture22.png', 'Picture23.png', 'Picture24.png', 'Picture25.png',
    'Picture26.png', 'Picture27.png', 'Picture28.png', 'Picture29.png'
  ],
  'Mens/Lounge wear': [
    'Picture32.png', 'Picture33.png', 'Picture34.png', 'Picture35.png',
    'Picture36.png', 'Picture37.png', 'Picture38.png', 'Picture39.png'
  ],
  'Women': [
    'Picture40.png', 'Picture41.png', 'Picture42.png',
    'Picture43.png', 'Picture44.png', 'Picture45.png'
  ],
  'Children': [
    'Picture46.png', 'Picture47.png', 'Picture48.png', 'Picture49.png',
    'Picture50.png', 'Picture51.png', 'Picture52.png'
  ],
  'Bags': [
    'Picture56.png', 'Picture57.png', 'Picture58.png',
    'Picture59.png', 'Picture60.png'
  ],
  'Work Wear': [
    'Picture53.png', 'Picture54.png', 'Picture55.png'
  ]
}

// Helper function to get images for a category path
export const getCategoryImages = (categoryPath) => {
  return categoryImages[categoryPath] || []
}

