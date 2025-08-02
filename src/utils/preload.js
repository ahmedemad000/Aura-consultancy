export const preloadImages = () => {
  const images = [
    '/src/assets/Hero1.jpeg',
    '/src/assets/aboutu1.jpg',
    '/src/assets/servicebg.jpeg'
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export const preloadFonts = () => {
  if ('fonts' in document) {
    document.fonts.load('1rem "Poppins"');
  }
};