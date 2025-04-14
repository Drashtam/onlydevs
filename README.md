# OnlyDevs 👩‍💻👨‍💻
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
A modern full-stack platform built for developers, by developers. OnlyDevs is a developer-centric hub where users can share projects, collaborate on code, and showcase their skills.


🔗 [Live Demo](https://onlydevs.vercel.app)


## 🚀 Features

- 🧑‍💻 Developer profile creation
- 🛠️ Project showcase
- 💬 Community-based collaboration
- 🔒 Secure authentication & user management
- 📦 RESTful API integration

## 📂 Project Structure
<pre>
onlydevs/
├── client/               # Frontend (Next.js with Tailwind & ShadCN)
│   ├── app/              # Pages and route handlers
│   ├── components/       # Reusable UI components
│   ├── public/           # Static assets
│   └── tailwind.config.js
│
├── controllers/          # Express route handlers (API logic)
├── middleware/           # Auth and error middleware
├── models/               # Mongoose schemas for MongoDB
├── routes/               # API routes
├── utils/                # Utility functions/helpers
├── .env                  # Environment variables (should not be committed)
├── .gitignore            # Files/folders to ignore in Git
├── package.json          # Backend dependencies and scripts
├── server.js             # Backend entry point
└── README.md             # Project documentation
</pre>

## 🏗️ Tech Stack

**Frontend**:		
- React / Next.js
- Tailwind CSS
- ShadCN UI
- Axios

**Backend**:
- Node.js / Express
- MongoDB / Mongoose
- JWT Authentication
- Multer (for file/image uploads)


## 🛠️ Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/Drashtam/onlydevs.git
cd onlydevs

# 2. Install server dependencies
npm install

# 3. Go into the client and install frontend dependencies
cd client
npm install

# 4. Start both client and server (use concurrently if set up)
# Option 1: Separate terminals
npm run dev      # inside client/
node server.js   # inside root/

# Option 2: If you've set up concurrently
npm run start:all🌐 Deployment
	•	Frontend: Vercel
	•	Backend: Render or Railway

🧠 Future Enhancements
	•	Real-time chat (Socket.IO)
	•	Notifications
	•	Role-based access control
	•	Dark mode toggle

📸 
Add some cool UI shots here later

🙌 Contributing

PRs are welcome! Open an issue for discussion before making major changes.

⸻

📄 License

This project is licensed under the MIT License.
---
