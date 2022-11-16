import jwt from "jsonwebtoken";
import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection(process.env.MONGODB_URI);

export default function handler(req, res) {
  const { method, cookies } = req;
  const { userAuthToken } = cookies;

  if (!userAuthToken) {
    return res
      .status(401)
      .json({ error: true, error_message: "Invalid authentication token" });
  }

  switch (method) {
    case "GET":
      try {
        const { username } = jwt.verify(userAuthToken, "secret");

        return res.status(200).json({ username });
      } catch (error) {
        return res.status(401).json({
          error: true,
          error_message: "Invalid username and/or password"
        });
      }
    default:
      return res.status(405).json({
        error: true,
        error_message: "Invalid method on this resource"
      });
  }
}
