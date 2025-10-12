import express from "express";
import Task from "../models/task.js";
import { validateToken } from "../middleWares/AuthMiddleWares.js";
const router = express.Router();

// ✅ Create a new task
router.post("/create", validateToken, async (req, res) => {
  try {
    const task = new Task({ ...req.body, user: req.user.id });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get all tasks for the logged-in user
router.get("/AllTasks", validateToken, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update a task
router.put("/update/:id", validateToken, async (req, res) => {
  try {
    // Find task that belongs to the logged-in user
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id }, // ensure user owns it
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ error: "Task not found or not authorized" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ Delete a task
router.delete("/delete/:id", validateToken, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
