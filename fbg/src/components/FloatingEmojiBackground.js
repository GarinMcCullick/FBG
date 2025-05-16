import React, { useEffect, useState } from "react";
import "../App.css";

const FloatingEmojiBackground = ({
  imageSrcs = [],
  count = 40,
  minSize = 30,
  maxSize = 50,
}) => {
  const [docHeight, setDocHeight] = useState(0);
  const [floatingImages, setFloatingImages] = useState([]);

  const getRandomImage = () => {
    const index = Math.floor(Math.random() * imageSrcs.length);
    return imageSrcs[index];
  };

  const generateImages = (height) => {
    return Array.from({ length: count }).map((_, index) => {
      const left = Math.random() * 100;
      const top = height * Math.random(); // Start below visible area
      const size = minSize + Math.random() * (maxSize - minSize);
      const duration = 5 + Math.random() * 10;
      const delay = Math.random() * 5;
      const src = getRandomImage();

      return (
        <img
          key={index + "-" + Date.now()} // Ensure uniqueness on regen
          src={src}
          className="floating-png"
          alt="floating"
          style={{
            position: "absolute",
            left: `${left}%`,
            top: `${top}px`,
            width: `${size}px`,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    });
  };

  useEffect(() => {
    const updateHeight = () => {
      const newHeight = document.body.scrollHeight;
      if (newHeight !== docHeight) {
        setDocHeight(newHeight);
        setFloatingImages(generateImages(newHeight));
      }
    };

    updateHeight(); // initial
    const interval = setInterval(updateHeight, 500); // check every 0.5s

    window.addEventListener("resize", updateHeight);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateHeight);
    };
  }, [docHeight]);

  return <div className="floating-background">{floatingImages}</div>;
};

export default FloatingEmojiBackground;
