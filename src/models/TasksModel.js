import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
});

export const TaskModel = models.Task || model("Task", taskSchema);
