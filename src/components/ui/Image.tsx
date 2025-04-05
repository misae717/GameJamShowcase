import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type ImageProps = Omit<NextImageProps, 'src'> & {
  src: string;
};

// This component handles paths with basePath for GitHub Pages
export function Image({ src, ...props }: ImageProps) {
  // Update src to handle paths correctly for production
  const basePath = process.env.NODE_ENV === 'production' ? '/GameJamShowcase' : '';
  
  // If src starts with a slash and is not an external URL, prepend the basePath
  const adjustedSrc = src.startsWith('/') && !src.startsWith('//') && !src.startsWith('http')
    ? `${basePath}${src}` 
    : src;

  return <NextImage src={adjustedSrc} {...props} />;
}

export default Image; 