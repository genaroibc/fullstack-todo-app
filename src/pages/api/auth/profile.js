import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const { method, cookies } = req;
  const { userAuthToken } = cookies;

  switch (method) {
    case "GET":
      if (!userAuthToken) {
        return res
          .status(401)
          .json({ error: true, error_message: "Invalid user authentication" });
      }

      try {
        const { username } = jwt.verify(userAuthToken, "secret");

        return res.status(200).json({ username });
      } catch (error) {
        return res.status(401).json({
          error: true,
          error_message: "Invalid username and/or password"
        });
      }

    case "POST":
      return;
    case "PUT":
      return;
    case "DELETE":
      return;
    default:
      return;
  }
}
