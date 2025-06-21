import React, { useEffect } from "react";
import Carousel from "./Carousel";
import { sendEnquiry } from "../api";

const ItemModal = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleEnquire = async () => {
    try {
      await sendEnquiry({ itemName: item.name });
      alert("Enquiry sent successfully!");
    } catch (err) {
      console.error("Error sending enquiry", err);
      alert("Failed to send enquiry");
    }
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex justify-center items-center z-50">
      <div className="bg-white max-w-2xl w-full rounded p-4 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-sm text-gray-500 mb-1">Type: {item.type}</p>
        <p className="mb-4">{item.description}</p>
        <Carousel images={[item.coverImage, ...item.additionalImages]} />
        <button
          onClick={handleEnquire}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Enquire
        </button>
      </div>
    </div>
  );
};

export default ItemModal;
