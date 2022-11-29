import { UserModel } from "models/UserModel";
import { Types } from "mongoose";

export async function getOneUserById(id) {
  try {
    const user = await UserModel.findById(id);

    return user || {};
  } catch (error) {
    return error;
  }
}

export async function getOneUserByUserName(username) {
  try {
    const user = await UserModel.findOne({ username });
    return user || {};
  } catch (error) {
    return error;
  }
}

export async function getAllTasksByUserId(userId) {
  try {
    const user = (await UserModel.findById(userId)) ?? {};

    return user.tasks || [];
  } catch (error) {
    return error;
  }
}

export async function getAllUsers() {
  try {
    const users = await UserModel.find();

    return users || [];
  } catch (error) {
    return error;
  }
}

export async function createOneUser(userData) {
  try {
    const newUser = new UserModel(userData);

    await newUser.save();

    return newUser || {};
  } catch (error) {
    console.error({ error });
    return error;
  }
}

export async function createTaskByUserId({ taskData = {}, userId = "" }) {
  try {
    const user = await UserModel.findById(userId);

    user.tasks.push({
      ...taskData,
      _id: new Types.ObjectId()
    });

    const savedUser = await user.save();

    return savedUser || {};
  } catch (error) {
    console.error({ error });
    return error;
  }
}

export async function deleteOneTaskByIds({ userId, taskId }) {
  try {
    const user = await UserModel.findById(userId);

    const filteredTasks = user.tasks.filter(
      task => task._id.toString() !== taskId
    );

    user.set("tasks", filteredTasks);

    await user.save();

    return {
      deleted: filteredTasks.length === user.tasks.length,
      tasks: user.tasks
    };
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getOneTaskByIds({ userId, taskId }) {
  try {
    const user = await UserModel.findById(userId);

    const task = user.tasks.find(task => task._id?.toString() === taskId);

    return task ?? {};
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function updateOneTaskByIds({ userId, taskId, taskData }) {
  try {
    const user = await UserModel.findById(userId);

    const updatedTasks = user.tasks.map(task => {
      return task._id.toString() !== taskId
        ? task
        : { ...taskData, _id: task._id };
    });

    user.set("tasks", updatedTasks);

    await user.save();

    return {
      updated: updatedTasks.length === user.tasks.length
    };
  } catch (error) {
    console.error(error);
    return error;
  }
}
