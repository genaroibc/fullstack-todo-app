import jwt from "jsonwebtoken";
import cookie from "cookie";

export function serializeToken({ data = {}, cookieName = "" }) {
  if (!cookieName) {
    throw new Error('"cookieName" argument is required');
  }

  const token = jwt.sign(
    {
      ...data,
      exp: (Date.now() / 1000) * 60 * 60 * 24 * 30
    },
    "secret"
  );

  const serializedToken = cookie.serialize(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "production",
    sameSite: "strict",
    maxAge: (Date.now() / 1000) * 60 * 60 * 24 * 30,
    path: "/"
  });

  return serializedToken;
}
