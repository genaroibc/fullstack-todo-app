import { createOneUser } from "controllers/userController";
import { mongoDBConnection } from "services/mongoDBConnection";
import { serializeToken } from "utils/serializeToken";

mongoDBConnection(process.env.MONGODB_URI);

export default async function handler(req, res) {
  const { method, body } = req;
  const { username, password } = JSON.parse(body);

  if (!username || !password) {
    return res.status(400).json({
      error: true,
      error_message: "Invalid username or password"
    });
  }

  switch (method) {
    case "POST":
      try {
        const createdUser = await createOneUser({ username });

        if (!createdUser.username) {
          return res.status(500).json({
            error: true,
            error_message: "Error creating user"
          });
        }

        const serializedToken = serializeToken({
          data: {
            username,
            password,
            userId: createdUser._id
          },
          cookieName: "userAuthToken"
        });

        res.setHeader("Set-Cookie", serializedToken);

        return res.status(201).json({
          username: createdUser.username,
          message: "User created successfully"
        });
      } catch (error) {
        console.error(error);
        return res.status(201).json(error);
      }

    default:
      return res.status(405).json({
        error: true,
        error_message: "Invalid method on this endpoint"
      });
  }
}
