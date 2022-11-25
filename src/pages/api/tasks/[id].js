import {
  deleteOneTaskByIds,
  getOneTaskByIds,
  updateOneTaskByIds
} from "controllers/userController";
import jwt from "jsonwebtoken";
import { isEmpty } from "utils/isEmpty";

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
      const task = await getOneTaskByIds({ userId, taskId: query.id });

      if (isEmpty(task)) {
        return res.status(404).json({
          error: true,
          error_mesage: `Task with id ${query.id} not found.`
        });
      }

      return res.status(200).json(task);

    case "PUT":
      const { updated } = await updateOneTaskByIds({
        userId,
        taskId: query.id,
        taskData: body
      });
      console.log({ updated });
      if (!updated) {
        return res.status(500).json({
          error: true,
          error_message: `Task with id ${query.id} was not updated.`
        });
      }

      return res
        .status(201)
        .json({ ok: true, message: "Task updated successfully" });

    case "DELETE":
      const { deleted, tasks } = await deleteOneTaskByIds({
        taskId: query.id,
        userId
      });

      if (!deleted) {
        return res.status(500).json({
          error: true,
          error_message: "There was an error deleting the task"
        });
      }

      return res.status(200).json({
        ok: true,
        message: "Task deleted successfully",
        tasks
      });

    default:
      return res.status(400).json({
        error_code: 400,
        error_mesage: "Invalid request: this method is not supported"
      });
  }
}
