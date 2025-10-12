import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import loginRouter from "./src/router/login.js";
import taskRouter from "./src/router/task.js";

dotenv.config(); 
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/register", loginRouter);
app.use("/api/tasks", taskRouter);


// Database connection
mongoose
  .connect("mongodb://localhost:27017/TaskManagement", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
  });

// Server
app.listen(5000, () => {
  console.log("🚀 Server is running on port 5000");
});
