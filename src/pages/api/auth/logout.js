import jwt from "jsonwebtoken";
import cookie from "cookie";

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

      const serializedExpiredToken = cookie.serialize("userAuthToken", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "production",
        sameSite: "strict",
        maxAge: 0,
        path: "/"
      });

      res.setHeader("Set-Cookie", serializedExpiredToken);

      return res.status(200).json("logout succesfully");

    default:
      return res
        .status(200)
        .json({ error: true, error_message: "Invalid method" });
  }
}
