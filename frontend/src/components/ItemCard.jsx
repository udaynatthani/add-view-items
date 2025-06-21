import React from "react";

const ItemCard = ({ item, onClick }) => {
  return (
    <div
      className="border rounded shadow hover:shadow-lg cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <img
  src={`http://localhost:5000/uploads/${item.coverImage}`}
  alt={item.name}
  className="w-full h-48 object-cover"
/>
      <div className="p-2">
        <h3 className="font-semibold text-lg">{item.name}</h3>
      </div>
    </div>
  );
};

export default ItemCard;