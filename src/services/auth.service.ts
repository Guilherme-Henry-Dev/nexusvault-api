import { prisma } from "../utils/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function register(name: string, email: string, password: string) {
    const exists = await prisma.user.findUnique({ where: {email}});
    if (exists) throw new Error("Email já cadastrado");
    const hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({data : {name, email, password: hash}})
    return user;
}

export async function loginUser(email:string, password: string) {
    const user = await prisma.user.findUnique({where: {email}});
    if (!user) throw new Error("Credenciais inválidas");
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) therow new Error("Credenciais inválidas");

    const token = jwt.sign({ sub: user.id }, process.env.JWT_SECRET!, {expiresIN: "7d"});
    return { token, user: { id: user.id, name: user.name, email: user.email}};
}