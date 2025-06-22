import axios from 'axios';
const API = axios.create({ baseURL: "https://add-view-items-1.onrender.com"});

export const fetchItems = () => API.get('/items');
export const fetchItem = (id) => API.get(`/items/${id}`);
export const addItem = (formData) =>
  API.post('/items', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const sendEnquiry = (data) => API.post('/enquire', data);
