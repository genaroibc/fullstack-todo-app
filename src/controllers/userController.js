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

export async function getTasksByUserId(userId) {
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

export async function createTaskByUserId({
  taskData: { title, description } = {},
  userId = ""
}) {
  try {
    const user = await UserModel.findById(userId);

    user.tasks.push({ title, description, _id: new Types.ObjectId() });

    const savedUser = await user.save();

    return savedUser || {};
  } catch (error) {
    console.error({ error });
    return error;
  }
}
