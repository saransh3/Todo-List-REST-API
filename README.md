# Todo List API

A RESTful API for managing a todo list, built with **Node.js**, **Express.js**, **Mongoose**, **MongoDB**, and **JWT**. The API allows users to perform CRUD operations on their todos, implements user authentication, and includes a CRON job to automatically mark expired todos as completed.

---

## Features

- **User Authentication**: Sign up and login with email and password using **JWT**.
- **Todo Management**: Create, read, update, and delete todos.
- **CRON Job**: Automatically marks expired todos as completed every minute.

---

## Technologies Used

- **Node.js** (Runtime)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (MongoDB ORM)
- **JWT** (Authentication)
- **Bcrypt.js** (Password hashing)
- **node-cron** (CRON jobs)

### Automatic Todo Expiration (CRON Job)

The application includes a CRON job to automatically mark expired todos (with a `dueDate` in the past) as completed.

#### CRON Schedule
The CRON job is scheduled to run **every minute** for testing purposes. In production, this can be changed to a more suitable interval (e.g., daily at midnight).

---> How It Works
- The CRON job checks all todos in the database where:
  - `dueDate` is earlier than the current date.
  - `completed` is `false`.
- These todos are automatically updated with `completed: true`.

---> To Modify the Schedule
The CRON schedule can be updated in the **`jobs/cron.js`** file by changing the CRON expression in the following line:
```javascript
cron.schedule('* * * * *', async () => {
  // Your code here
});


--------------------------------

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/todo-list-api.git
cd todo-list-api

### 2. Install Dependencies

npm install

### 3. Set Up Environment Variables

Create a .env file in the root directory and add the following:
env
MONGO_URI=mongodb://localhost:27017/todo-app
JWT_SECRET=your_jwt_secret
PORT=3000

### 4. Start MongoDB (If Not Using Docker)

docker run -d -p 27017:27017 --name mongodb mongo

### 5. Run the Application

node index.js

**Docker Setup**
1. Build the containers:
docker-compose build

2. Start the containers:
docker-compose up

Access the app at http://localhost:3000

--------------------------------------------------------------------------------------------

*API Endpoints to Test on postman*
(Authentication)

1. Sign Up
MWthod-POST, URL-/api/auth/signup
Example: http://localhost:3000/api/auth/signup

Body:
json
{
  "email": "1@example.com",
  "password": "123"
}

2.Log In
Method-POST, URL-/api/auth/login

Body:
json
{
  "email": "1@example.com",
  "password": "123"
}


**Todos**
1. Create Todo
POST /api/todos

Authorization: Bearer token
Body:
json
{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread",
  "dueDate": "2025-01-30"
}

2. Get Todos
GET /api/todos

Authorization: Bearer token

3. Update Todo
PUT /api/todos/:id

Authorization: Bearer token
Body:
json
{
  "title": "Updated title",
  "completed": true
}

4. Delete Todo
DELETE /api/todos/:id

Authorization: Bearer token

