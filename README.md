# Full Stack Todo App (Auth + API + Frontend)

A production-ready **full-stack Todo application** featuring secure authentication, a RESTful API, and a modern React frontend. The project demonstrates real-world patterns used in professional web development.

---

## 🚀 Live Demo

* **Frontend (Vercel):** [webpage in vercel](https://fullstack-todo-bice.vercel.app/)
* **Backend API (Render):** [fullstack-todo.onrender.com](https://fullstack-todo-2.onrender.com)

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* React Router
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* bcryptjs

### Deployment

* Frontend: **Vercel**
* Backend: **Render**
* Database: **MongoDB Atlas**

---

## ✨ Features

* User registration & login (JWT-based authentication)
* Protected routes (frontend & backend)
* Create, read, update, delete todos
* Toggle todo completion
* Persistent login (localStorage)
* Loading & error states
* Clean, responsive UI
* Deployed and publicly accessible

---

## 📁 Project Structure

```
fullstack-todo/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── api/
    │   ├── auth/
    │   ├── pages/
    │   ├── components/
    │   └── App.jsx
    └── index.html
```

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Backend validates credentials
3. JWT token is generated and returned
4. Token stored in `localStorage`
5. Token attached to API requests via Axios interceptor
6. Protected routes verify token on each request

---

## 🔄 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Todos (Protected)

* `GET /api/todos`
* `POST /api/todos`
* `PUT /api/todos/:id`
* `DELETE /api/todos/:id`

---

## 🧪 Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

Create `.env`:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🧠 What This Project Demonstrates

* Full-stack architecture
* Secure authentication & authorization
* Clean separation of concerns
* State management with React hooks
* API integration and error handling
* Deployment and environment configuration

---

## 📌 Portfolio Use

This project is designed to be **portfolio-ready** and suitable for:

* Junior / Mid Full Stack Developer roles
* Technical interviews
* Live demos

---

## 👤 Author

**Manuel Francisco**
Full Stack Web Developer
JavaScript | React | Node.js | Express | MongoDB

---

## 📄 License

MIT License
