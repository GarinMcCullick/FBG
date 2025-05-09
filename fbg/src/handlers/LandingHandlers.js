// Get a random batch of images from a list
export const getRandomBatch = (images, count = 6) => {
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Add more images to the gallery
export const addMoreImages = (
  clickCount,
  setClickCount,
  setGalleryImages,
  buttonRef,
  getRandomBatchFn,
  allImages
) => {
  if (clickCount < 4) {
    const newImages = getRandomBatchFn(allImages);
    setGalleryImages((prev) => [...prev, ...newImages]);
    setClickCount((prev) => prev + 1);

    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }
};
