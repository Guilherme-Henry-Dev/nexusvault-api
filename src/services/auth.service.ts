import bcrypt from "bcrypt";
import prisma from "../utils/prisma.js";       
import { generateToken } from "../utils/jwt.js"; 

export async function registerUser(name: string, email: string, password: string) {
 
  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) throw new Error("Email já cadastrado");

  
  const hash = await bcrypt.hash(password, 10);

  
  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash: hash, 
    },
    select: { id: true, name: true, email: true }, 
  });

  return user;
}

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    
    select: { id: true, email: true, name: true, passwordHash: true },
  });

  if (!user) throw new Error("Usuário não encontrado");
  if (!user.passwordHash) throw new Error("Senha não registrada para este usuário");

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new Error("Senha incorreta");

 
  const token = generateToken({ id: user.id, email: user.email });

  return { token };
}
