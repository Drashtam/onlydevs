# OnlyDevs

A web application built with Node.js, Express, and MongoDB.

## Features

- User authentication using JWT
- MongoDB integration via Mongoose
- RESTful API structure
- Environment-based configuration

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Drashtam/onlydevs.git
cd onlydevs

2. Install dependencies
npm install

3.Create a .env file in the root directory and add the following:
PORT=5000
MONGO_URI="mongodb+srv://admin:admin123@cluster0.3dyok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET="fbf83330c6bc84d96b41af2764eb342cadd2563e60749384ae2a8cba01fc529892b2814c0ccf8c801623768702cd704923bab62eb4337c964b5fc1603b376d16"

4. Start the server
 npm start
    or
 npm run dev

5.Project Structure
onlydevs/
├── models/
├── routes/
├── controllers/
├── .env
├── .gitignore
├── package.json
└── server.js

License

MIT

---

You can copy this directly into your `README.md` file.

Need me to generate the actual file for download or commit it directly into your local/project folder?
