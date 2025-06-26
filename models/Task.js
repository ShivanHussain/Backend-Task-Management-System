import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: 
  { 
    type: String 
  },
  user: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending"
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium"
  },
  milestone: { type: String },
  dueDate: { type: Date },
  date: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;