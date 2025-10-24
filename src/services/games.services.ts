import prisma from "../utils/prisma.js";

interface GameData {
  title: string;
  genre: string;
  releaseYear: number;
  createdById: number;
  coverUrl?: string | null;
  platform?: string | null;
  finishedAt?: string | null;
  tags?: string[];
}

export async function createGame(data: GameData) {
  const { tags, ...gameData } = data;
  return await prisma.game.create({
    data: {
      ...gameData,
      finishedAt: gameData.finishedAt ? new Date(gameData.finishedAt) : null,
    },
  });
}

export async function getAllGames() {
  return await prisma.game.findMany();
}

export async function getGameById(id: number) {
  return await prisma.game.findUnique({ where: { id } });
}

export async function updateGame(id: number, data: GameData) {
  return await prisma.game.update({
    where: { id },
    data,
  });
}

export async function deleteGame(id: number) {
  return await prisma.game.delete({ where: { id } });
}