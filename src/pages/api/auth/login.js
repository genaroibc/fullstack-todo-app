import jwt from "jsonwebtoken";
import cookie from "cookie";

export default function handler(req, res) {
  const { body, method } = req;
  const { username, password } = JSON.parse(body);

  switch (method) {
    case "POST":
      if (username !== "admin@admin" || password !== "admin123") {
        return res.status(403).json({
          error: true,
          error_message: "Invalid username or password"
        });
      }

      const token = jwt.sign(
        {
          username,
          password,
          exp: (Date.now() / 1000) * 60 * 60 * 24 * 30
        },
        "secret"
      );

      const serializedToken = cookie.serialize("userAuthToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "production",
        sameSite: "strict",
        maxAge: (Date.now() / 1000) * 60 * 60 * 24 * 30,
        path: "/"
      });

      res.setHeader("Set-Cookie", serializedToken);

      return res.json({ username });

    default:
      return res.status(400).json({
        error: true,
        error_message: "Invalid method"
      });
  }
}
