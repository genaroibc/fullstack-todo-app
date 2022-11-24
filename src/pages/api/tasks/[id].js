import {
  deleteOneTaskById,
  getOneTaskById,
  updateOneTaskById
} from "controllers/taskController";
import { deleteOneTaskByIds } from "controllers/userController";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { method, body, query, cookies } = req;

  const { userAuthToken } = cookies;

  if (!userAuthToken) {
    return res
      .status(403)
      .json({ error: true, error_message: "Invalid token" });
  }

  const { userId } = jwt.verify(userAuthToken, "secret");

  switch (method) {
    case "GET":
      const task = await getOneTaskById(query.id);

      return res.status(200).json(task);

    case "PUT":
      const updatedTask = await updateOneTaskById(query.id, body);

      return res.status(200).json(updatedTask);

    case "DELETE":
      const { deleted } = await deleteOneTaskByIds({
        taskId: query.id,
        userId
      });

      if (!deleted) {
        return res.status(500).json({
          error: true,
          error_message: "There was an error deleting the task"
        });
      }

      return res
        .status(204)
        .json({ ok: true, message: "Task deleted successfully" });

    default:
      return res.status(400).json({
        error_code: 400,
        error_mesage: "Invalid request: this method is not supported"
      });
  }
}
