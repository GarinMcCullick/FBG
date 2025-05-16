import React, { useEffect, useState, useCallback } from "react";
import "../App.css";

const FloatingEmojiBackground = ({
  imageSrcs = [],
  count = 40,
  minSize = 30,
  maxSize = 50,
}) => {
  const [docHeight, setDocHeight] = useState(0);
  const [floatingImages, setFloatingImages] = useState([]);

  const generateImages = useCallback(
    (height) => {
      return Array.from({ length: count }).map((_, index) => {
        const left = Math.random() * 100;
        const top = height * Math.random();
        const size = minSize + Math.random() * (maxSize - minSize);
        const duration = 5 + Math.random() * 10;
        const delay = Math.random() * 5;
        const src = imageSrcs[Math.floor(Math.random() * imageSrcs.length)];

        return (
          <img
            key={`${index}-${Date.now()}`}
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
    },
    [count, maxSize, minSize, imageSrcs]
  );

  useEffect(() => {
    const updateHeight = () => {
      const newHeight = document.body.scrollHeight;
      if (newHeight !== docHeight) {
        setDocHeight(newHeight);
        setFloatingImages(generateImages(newHeight + 20)); // Add 20px buffer
      }
    };

    updateHeight();
    const interval = setInterval(updateHeight, 500);
    window.addEventListener("resize", updateHeight);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateHeight);
    };
  }, [docHeight, generateImages]);

  return <div className="floating-background">{floatingImages}</div>;
};

export default FloatingEmojiBackground;
