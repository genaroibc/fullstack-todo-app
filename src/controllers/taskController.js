import { TaskModel } from "models/TasksModel";

export async function getAllTasks({ userId }) {
  try {
    const tasks = await TaskModel.findById({ userId });
    return tasks || [];
  } catch (error) {
    return error;
  }
}

export async function getOneTaskById(task_id) {
  try {
    const task = await TaskModel.findById(task_id);
    return task || {};
  } catch (error) {
    return error;
  }
}

export async function updateOneTaskById(task_id, body) {
  try {
    const updatedTask = await TaskModel.findByIdAndUpdate(task_id, body, {
      new: true,
    });
    return updatedTask || {};
  } catch (error) {
    return error;
  }
}

export async function deleteOneTaskById(task_id) {
  try {
    const deletedTask = await TaskModel.findByIdAndDelete(task_id);
    return deletedTask || {};
  } catch (error) {
    return error;
  }
}

export async function createOneTask(data) {
  try {
    const newTask = new TaskModel(data);

    await newTask.save();

    return newTask || {};
  } catch (error) {
    return error;
  }
}
