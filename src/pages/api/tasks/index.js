import { mongoDBConnection } from "services/mongoDBConnection";
import jwt from "jsonwebtoken";
import {
  createTaskByUserId,
  getTasksByUserId
} from "controllers/userController";

mongoDBConnection(process.env.MONGODB_URI);

export default async function handler(req, res) {
  const { method, body, cookies } = req;

  const { userAuthToken } = cookies;

  if (!userAuthToken) {
    return res
      .status(403)
      .json({ error: true, error_message: "Invalid token" });
  }

  const { userId } = jwt.verify(userAuthToken, "secret");

  switch (method) {
    case "GET":
      const tasks = await getTasksByUserId(userId);

      return res.status(200).json(tasks);

    case "POST":
      const createdTask = await createTaskByUserId({ taskData: body, userId });

      return res.status(201).json(createdTask);

    default:
      return res.status(405).json({
        error_code: 405,
        error_mesage: "Invalid request: method not supported on this resource."
      });
  }
}
