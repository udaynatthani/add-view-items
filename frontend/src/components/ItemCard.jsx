import React from "react";

const ItemCard = ({ item, onClick }) => {
  return (
    <div
      className="border rounded shadow hover:shadow-lg cursor-pointer overflow-hidden"
      onClick={onClick}
    >
     <img
  src={`https://add-view-items-1.onrender.com/uploads/${item.coverImage}`}
  alt={item.name}
/>

      <div className="p-2">
        <h3 className="font-semibold text-lg">{item.name}</h3>
      </div>
    </div>
  );
};

export default ItemCard;