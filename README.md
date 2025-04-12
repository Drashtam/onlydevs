# 📦 Inventory Management System

A full-stack inventory management system built with **React**, **Node.js (Express)**, and **MongoDB**. This application allows users to manage inventory items, track stock levels, compute total cost, and receive low stock alerts.

---

## 🚀 Features

- 🔐 User authentication (JWT-based)
- 📋 CRUD operations for inventory items
- 📷 Image upload functionality
- 📊 Total inventory cost and stock summary
- ⚠️ Low stock alerts for items under threshold
- 🌐 Responsive dashboard with sidebar navigation

---

## 🛠 Tech Stack

**Frontend:**
- React
- Tailwind CSS
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose

**Other:**
- Multer (for image upload)
- JWT for authentication
- dotenv for environment configs

---

---

## 📁 Project Structure
inventory-management-system/
│
├── client/                # Frontend (React)
│   ├── components/
│   └── app/
│
├── server/                # Backend (Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/Drashtam/onlydevs.git
cd inventory-management-system

2. Set up the backend
  node server.js

3. Setup the frontend
 npm run dev
    or
 npm start/ yarn build



2. Set up the backend
Method     Route                       Description
GET        /api/inventory              Get all inventory items
POST       /api/inventory              Add new inventory item
PUT        /api/inventory/:id          Update inventory item
DELETE     /api/inventory/:id          Delete inventory item
GET         /api/inventory/total-cost  Get total cost of inventory

🙋‍♂️ Author
OnlyDevs Team

📄 License

This project is licensed under the MIT License.

📝 To-Do
	•	Add pagination & filtering
	•	Implement user roles (admin/user)
	•	Export inventory reports as PDF/CSV

---

Let me know if you'd like to include:
- Deployment instructions (e.g., for Vercel/Render)
- Screenshot images
- Contribution guidelines

I can customize this more for your exact structure if needed.
