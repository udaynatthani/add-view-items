import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddItems from "./pages/AddItems";
import ViewItems from "./pages/ViewItems";

export default function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="flex gap-4 mb-4 border-b pb-2">
          <Link to="/add" className="font-semibold text-blue-600">Add Item</Link>
          <Link to="/view" className="font-semibold text-blue-600">View Items</Link>
        </nav>
        <Routes>
          <Route path="/add" element={<AddItems />} />
          <Route path="/view" element={<ViewItems />} />
          <Route path="*" element={<ViewItems />} />
        </Routes>
      </div>
    </Router>
  );
}