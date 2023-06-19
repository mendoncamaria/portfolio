import React from 'react';

function Image({ item }) {
  const { alt, src, height, width } = item;

  const handleImageError = (event) => {
    event.target.src = '../assets/fallback-image.png';
  };

  return (
    <img
      key={alt}
      alt={alt}
      src={src}
      height={height}
      width={width}
      onError={handleImageError}
    />
  );
}

export default Image;
