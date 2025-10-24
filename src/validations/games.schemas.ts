import { z } from "zod";

export const createGameSchema = z.object({
    title: z.string().min(1),
    coverUrl: z.string().url().optional().nullable(),
    genre: z.string().min(1),
    releaseYear: z.number().int().min(1900).max(new Date().getFullYear() + 5),
    platform: z.string().optional().nullable(),
    finishedAt: z.string().optional().nullable(),
    tags: z.array(z.string()).optional()
});

export const updateGameSchema = z.object({
    q: z.string().optional(),
    genre: z.string().optional(),
    ratingMin: z.string().optional(),
});

export const gameSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  genre: z.string().min(1, "Gênero é obrigatório"),
  releaseYear: z.number().min(1950, "Ano inválido"),
});

export const gameUpdateSchema = gameSchema.partial();