import {
  deleteOneTaskById,
  getOneTaskById,
  updateOneTaskById,
} from "controllers/taskController";

export default async function handler(req, res) {
  const { method, body, query } = req;

  switch (method) {
    case "GET":
      const task = await getOneTaskById(query.id);

      return res.status(200).json(task);
    case "PUT":
      const updatedTask = await updateOneTaskById(query.id, body);

      res.status(200).json(updatedTask);
      break;

    case "DELETE":
      const deletedTask = await deleteOneTaskById(query.id);

      res.status(204).json(deletedTask);
      break;

    default:
      return res.status(400).json({
        error_code: 400,
        error_mesage: "Invalid request: this method is not supported",
      });
  }
}
