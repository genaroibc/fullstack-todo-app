import { createOneTask, getAllTasks } from "controllers/taskController";

import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection(process.env.MONGODB_URI);

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      const tasks = await getAllTasks();
      return res.status(200).json(tasks);

    case "POST":
      const createdTask = await createOneTask(body);
      return res.status(201).json(createdTask);

    default:
      return res.status(400).json({
        error_code: 400,
        error_mesage: "Invalid request: this method is not supported",
      });
  }
}
