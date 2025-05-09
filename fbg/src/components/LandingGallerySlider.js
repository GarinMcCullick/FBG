import React, { useState, useRef, useEffect } from "react";
import "../App.css"; // Ensure styles are correctly included
import { addMoreImages, getRandomBatch } from "../handlers/LandingHandlers";

const allImages = [
  require("../assets/clan1.jpg"),
  require("../assets/clan2.jpg"),
  require("../assets/clan3.jpg"),
  require("../assets/clan4.jpg"),
  require("../assets/clan5.jpg"),
  require("../assets/clan6.jpg"),
  require("../assets/clan7.jpg"),
  require("../assets/clan8.jpg"),
  require("../assets/clan9.jpg"),
  // Add more image imports here
];

const LandingGallerySlider = () => {
  const [galleryImages, setGalleryImages] = useState(() =>
    getRandomBatch(allImages)
  );
  const [clickCount, setClickCount] = useState(0); // Track the number of clicks
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility
  const [modalImage, setModalImage] = useState(""); // Store the image to display in the modal
  const buttonRef = useRef(null); // Reference to the button

  useEffect(() => {
    if (isModalOpen) {
      // Add class to hide the nav when modal is open
      const nav = document.querySelector(".nav");
      if (nav) {
        nav.classList.add("hidden");
      }
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      // Remove class to show the nav when modal is closed
      const nav = document.querySelector(".nav");
      if (nav) {
        nav.classList.remove("hidden");
      }
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Cleanup function to ensure nav is restored when the component is unmounted
    return () => {
      const nav = document.querySelector(".nav");
      if (nav) {
        nav.classList.remove("hidden");
      }
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  // Open the modal with the clicked image
  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="gallery-wrapper">
      <div className="collage-grid">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className={`collage-tile size-${(i % 5) + 1}`}
            onClick={() => openModal(src)}
          >
            <img src={src} alt={`gallery-${i}`} />
          </div>
        ))}
      </div>
      {clickCount < 4 && (
        <button
          className="collage-button"
          ref={buttonRef} // Reference to the button
          onClick={() =>
            addMoreImages(
              clickCount,
              setClickCount,
              setGalleryImages,
              buttonRef,
              getRandomBatch,
              allImages
            )
          }
        >
          Show More
        </button>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={modalImage}
              alt={`gallery-${modalImage}`}
              className="modal-image"
            />
            <button className="close-modal" onClick={closeModal}>
              &times; {/* This is the "X" button */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingGallerySlider;
