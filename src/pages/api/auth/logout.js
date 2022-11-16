import jwt from "jsonwebtoken";
import cookie from "cookie";
import { mongoDBConnection } from "services/mongoDBConnection";

mongoDBConnection(process.env.MONGODB_URI);

export default function handler(req, res) {
  const { method, cookies } = req;

  const { userAuthToken } = cookies;

  switch (method) {
    case "POST":
      if (!userAuthToken) {
        return res
          .status(401)
          .json({ error: true, error_message: "Invalid token" });
      }

      jwt.verify(userAuthToken, "secret");

      const serializedAuthExpiredToken = cookie.serialize(
        "userAuthToken",
        null,
        {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "production",
          sameSite: "strict",
          maxAge: 0,
          path: "/"
        }
      );

      res.setHeader("Set-Cookie", serializedAuthExpiredToken);

      return res.status(200).json("logout succesfully");

    default:
      return res.status(405).json({
        error: true,
        error_message: "Invalid method on this resource"
      });
  }
}
