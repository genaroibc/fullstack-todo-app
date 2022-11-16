import { getOneUserByUserName } from "controllers/userController";
import { mongoDBConnection } from "services/mongoDBConnection";
import { serializeToken } from "utils/serializeToken";

mongoDBConnection(process.env.MONGODB_URI);

export default async function handler(req, res) {
  const { body, method } = req;
  const { username, password } = JSON.parse(body);

  if (!username || !password) {
    return res.status(400).json({
      error: true,
      error_message: "Invalid username or password"
    });
  }

  switch (method) {
    case "POST":
      const user = await getOneUserByUserName(username);

      if (!user.username) {
        // search correct status to error creating resource
        return res.status(404).json({
          error: true,
          error_message: "Incorrect username or password"
        });
      }

      const serializedAuthToken = serializeToken({
        data: { username: user.username, password, userId: user._id },
        cookieName: "userAuthToken"
      });

      res.setHeader("Set-Cookie", serializedAuthToken);

      return res.status(200).json({
        username: user.username,
        userId: user._id,
        message: "User logged in successfully"
      });

    default:
      return res.status(400).json({
        error: true,
        error_message: "Invalid method on this endpoint"
      });
  }
}
