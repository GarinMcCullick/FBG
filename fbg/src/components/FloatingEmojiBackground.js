import React, { useEffect, useState } from "react";
import "../App.css";

const FloatingEmojiBackground = ({
  imageSrcs = [], // Accept an array of image URLs
  count = 20,
  minSize = 20,
  maxSize = 50,
}) => {
  const [docHeight, setDocHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setDocHeight(document.body.scrollHeight);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const getRandomImage = () => {
    const index = Math.floor(Math.random() * imageSrcs.length);
    return imageSrcs[index];
  };

  const floatingImages = Array.from({ length: count }).map((_, index) => {
    const left = Math.random() * 100;
    const top = Math.random() * docHeight;
    const size = minSize + Math.random() * (maxSize - minSize);
    const duration = 5 + Math.random() * 10;
    const delay = Math.random() * 5;
    const src = getRandomImage();

    return (
      <img
        key={index}
        src={src}
        className="floating-png"
        alt="floating"
        style={{
          left: `${left}%`,
          top: `${top}px`,
          width: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <div
      className="floating-background"
      style={{ width: "100%", height: "100%", position: "absolute" }}
    >
      {floatingImages}
    </div>
  );
};

export default FloatingEmojiBackground;
