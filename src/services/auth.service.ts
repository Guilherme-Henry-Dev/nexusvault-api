import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../utils/prisma.js";

export async function registerUser(name: string, email: string, password: string) {
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw new Error("Email já cadastrado");

  // Criptografa a senha antes de salvar
  const hash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash: hash, // ✅ deve coincidir com o campo no schema
    },
  });

  return { id: user.id, name: user.name, email: user.email };
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) throw new Error("Usuário não encontrado");

  // ⚠️ Corrigido: verificar se o campo existe
  if (!user.passwordHash) throw new Error("Senha não registrada para este usuário");

  // ✅ Compara o hash salvo com a senha digitada
  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) throw new Error("Senha incorreta");

  // ✅ Cria o token JWT
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET || "chave_secreta_dev",
    { expiresIn: "1h" }
  );

  return { token };
}
