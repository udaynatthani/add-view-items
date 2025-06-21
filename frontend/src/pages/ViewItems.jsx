import React, { useEffect, useState } from "react";
import { fetchItems } from "../api";
import ItemCard from "../components/ItemCard";
import ItemModal from "../components/ItemModal";

const ViewItems = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const loadItems = async () => {
      try {
        const res = await fetchItems();
        setItems(res.data);
      } catch (err) {
        console.error("Failed to fetch items", err);
      }
    };
    loadItems();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(item => (
          <ItemCard key={item._id} item={item} onClick={() => setSelectedItem(item)} />
        ))}
      </div>
      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default ViewItems;

