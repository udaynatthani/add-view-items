import React, { useState } from "react";
import { addItem } from "../api";

const AddItems = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    coverImage: null,
    additionalImages: [],
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "coverImage") {
      setFormData({ ...formData, coverImage: files[0] });
    } else {
      setFormData({ ...formData, additionalImages: Array.from(files) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("type", formData.type);
    payload.append("description", formData.description);
    if (formData.coverImage) payload.append("coverImage", formData.coverImage);
    formData.additionalImages.forEach((file) => {
      payload.append("additionalImages", file);
    });

    try {
      const res = await addItem(payload);
      if (res.status === 201) {
        setMessage("Item successfully added ✅");
        setFormData({
          name: "",
          type: "",
          description: "",
          coverImage: null,
          additionalImages: [],
        });
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Error adding item");
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      {message && <div className="mb-4 text-green-600">{message}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Item Name" className="w-full p-2 border rounded" required />
        <select name="type" value={formData.type} onChange={handleChange} className="w-full p-2 border rounded" required>
          <option value="">Select Type</option>
          <option value="Shirt">Shirt</option>
          <option value="Pant">Pant</option>
          <option value="Shoes">Shoes</option>
          <option value="Sports Gear">Sports Gear</option>
        </select>
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Item Description" className="w-full p-2 border rounded" required />
        <div>
          <label className="block mb-1">Cover Image:</label>
          <input name="coverImage" type="file" onChange={handleFileChange} accept="image/*" required />
        </div>
        <div>
          <label className="block mb-1">Additional Images:</label>
          <input name="additionalImages" type="file" onChange={handleFileChange} accept="image/*" multiple />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Item</button>
      </form>
    </div>
  );
};

export default AddItems;
