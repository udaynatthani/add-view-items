# 🛍️ Item Listing App

A fullstack application where users can **add items** with images, view all items, and send enquiries. Built using **React**, **Node.js/Express**, and **MongoDB**.

---

## 🚀 Features

- 📄 Add new items with:
  - Name
  - Type (Shirt, Shoes, etc.)
  - Description
  - Cover image
  - Additional images
- 🖼️ View all items with thumbnails
- 🔍 Click an item to view details in a modal
- 📸 Image carousel inside modal
- 📩 Send enquiry email for any item
- 🔐 File uploads stored locally (via Express)
- 🌐 CORS & secure backend communication
- ✅ MongoDB-based persistent storage

---

## 🧱 Tech Stack

| Layer       | Tech                        |
|-------------|-----------------------------|
| Frontend    | React + Tailwind (Vite)     |
| Backend     | Node.js + Express           |
| Database    | MongoDB Atlas               |
| Email       | Nodemailer (Gmail SMTP)     |
| File Upload | Multer + Local `uploads/`   |

---

## 📦 Project Structure

.
├── backend/
│ ├── server.js
│ ├── routes/
│ │ ├── item.js
│ │ └── email.js
│ ├── models/
│ │ └── Item.js
│ ├── uploads/ # Stores image files
│ └── .env # Mongo URI, Mail credentials
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ItemCard.jsx
│ │ │ ├── ItemModal.jsx
│ │ │ └── Carousel.jsx
│ │ ├── pages/
│ │ │ ├── ViewItems.jsx
│ │ │ └── AddItem.jsx
│ │ ├── App.jsx
│ │ └── api.js
│ ├── .env # VITE_API_URL
│ └── vite.config.js


---

## 🛠️ Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/item-listing-app.git
cd item-listing-app

2. Backend Setup

cd backend
npm install

Create a .env file:

MONGO_URI=your_mongo_connection_string
MAIL_USER=yourgmail@gmail.com
MAIL_PASS=your_16char_gmail_app_password

Start the backend:

node server.js

3. Frontend Setup

cd ../frontend
npm install

Create a .env file:

VITE_API_URL=http://localhost:5000

Run the frontend:

npm run dev

🌍 Deployment Guide
Deploy Backend (Render)

    Deploy backend/ as a Web Service

    Add env variables: MONGO_URI, MAIL_USER, MAIL_PASS

    Ensure uploads/ is handled properly or migrate to Cloudinary

Deploy Frontend (Netlify or Vercel)

    Build:

    npm run build

    Upload dist/ to Netlify or Vercel

    Update VITE_API_URL in .env to your live backend URL

📧 Enquiry Email

    Uses Nodemailer with Gmail SMTP

    Make sure App Password is used (not your Gmail password)

    Email format:

    Subject: Enquiry for <Item Name>
    Body: A user has enquired about this item.

📸 Image Uploads

    Images uploaded using Multer and stored in /uploads folder

    Served via static route: http://localhost:5000/uploads/<filename>

    Consider using Cloudinary for persistent cloud storage