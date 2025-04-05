/**
 * Utility functions for handling image paths
 */

/**
 * Prepends the correct base path to image URLs when in production
 * @param src The image source URL
 * @returns The corrected image URL
 */
export const getImagePath = (src: string): string => {
  // Skip if it's already an absolute URL
  if (src.startsWith('http') || src.startsWith('//')) {
    return src;
  }
  
  // Make sure we have a leading slash
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  // Add the basePath in production
  return process.env.NODE_ENV === 'production' 
    ? `/GameJamShowcase${normalizedSrc}`
    : normalizedSrc;
};

/**
 * A hook to use in img tags for GitHub Pages compatibility
 * 
 * Usage: <img {...imgProps('/path/to/image.jpg')} />
 */
export const imgProps = (src: string, alt: string = '') => {
  return {
    src: getImagePath(src),
    alt
  };
}; 