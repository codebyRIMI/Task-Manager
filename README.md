# Task-Manager 📝

A full-stack **Task & Project Management web application** built using **React, Node.js, Express, and MongoDB**.  
The app helps users organize tasks and projects with a structured dashboard and modern UI.

---

## 🚀 Features

- User authentication (JWT-based)
- Task management (create, view, update, delete)
- Project management
- Dashboard & analytics view
- Profile & settings pages
- RESTful API architecture
- Responsive frontend using React & SCSS

---

## 🛠 Tech Stack

### Frontend (Client)
- React (React Router v7)
- Axios
- SCSS (Sass)
- Lucide Icons & React Icons

### Backend (Server)
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (password hashing)
- dotenv & CORS

---

## 🔐 API Routes

|  Method  |    Endpoint     |       Description         |
|----------|-----------------|---------------------------|
| POST     | `/register`     | User registration / login |
| GET/POST | `/api/tasks`    | Task operations           |
| GET/POST | `/api/projects` | Project operations        |

---

## 💻 How to Run Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/codebyRIMI/Task-Manager.git
cd Task-Manager
```
###2️⃣ Backend Setup
```
cd server
npm install
npm start
```
Server runs on http://localhost:5000

###3️⃣ Frontend setup
```
cd client
npm install
npm start
```
App runs on http://localhost:3000


## 🔮 Future Improvements

1) Role-based authentication
2) Task deadlines & reminders
3) Drag-and-drop task board
4) Analytics charts
5) Deployment (Vercel + Render)
6) and this is currently being updated too.

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.


## 📜 License
This project is licensed under the MIT License.


## 👤 Author

- Rimi Halder
- GitHub: https://github.com/codebyRIMI

