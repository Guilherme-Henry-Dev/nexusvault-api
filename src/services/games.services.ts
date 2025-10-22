import { prisma } from "../utils/prisma";

export async function createGame(data: {
  title: string; coverUrl?: string; genre?: string; platform?: string; finishedAt?: string; tags?: string[];
}, userId: number) {
  const tagsConnectOrCreate = (data.tags ?? []).map(name => ({
    where: { name }, create: { name }
  }));

  const game = await prisma.game.create({
    data: {
      title: data.title,
      coverUrl: data.coverUrl,
      genre: data.genre,
      platform: data.platform,
      finishedAt: data.finishedAt ? new Date(data.finishedAt) : undefined,
      createdById: userId,
      tags: { connectOrCreate: tagsConnectOrCreate }
    },
    include: { tags: true }
  });
  return game;
}

export async function listGames(filters: { q?: string; genre?: string; ratingMin?: number }, userId: number) {
  return prisma.game.findMany({
    where: {
      createdById: userId,
      AND: [
        filters.q ? { title: { contains: filters.q, mode: 'insensitive' } } : {},
        filters.genre ? { genre: { equals: filters.genre, mode: 'insensitive' } } : {}
      ]
    },
    include: { tags: true }
  });
}