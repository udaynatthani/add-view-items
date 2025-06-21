import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("📸 Carousel images loaded:", images);
  }, [images]);

  const prev = () => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="relative w-full h-64 bg-gray-100 overflow-hidden rounded">
     <img
  src={`http://localhost:5000/uploads/${images[index]}`}
  alt={`Slide ${index}`}
  className="w-full h-full object-contain"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
  }}
/>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
          >
            ▶
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
