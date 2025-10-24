import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "chave_secreta_dev";
const EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

export function generateToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}
