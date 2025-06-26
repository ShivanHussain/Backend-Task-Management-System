# 📋 Task Management System (Backend)

A backend API for managing tasks using **Node.js**, **Express.js**, and **MongoDB** with support for:
- Task creation
- Status tracking
- Milestones
- Priority & due dates
- Error handling middleware

---

## 📦 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **ES Modules (`"type": "module"`)**
- **dotenv**
- **cors**

---

## 📁 Project Structure

task-management-backend-esm/
├── config/ # MongoDB connection
├── controllers/ # Business logic
├── middlewares/ # Error & 404 handling
├── models/ # Mongoose schema
├── routes/ # Task API routes
├── .env # Environment variables
├── package.json
├── server.js # Entry poin



## 🚀 Setup Instructions

### 1. Clone the Repository
    ```bash
    git clone <your-repo-url>
    cd task-management-backend-esm
    npm install


### 2. Set up .env
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/taskdb


### 3. start server
    npm start
