import { z } from "zod";

export const createGameSchema = z.object({
    title: z.string().min(1),
    coverUrl: z.string().url().optional(),
    genre: z.string().optional(),
    platform: z.string().optional(),
    finishedAt: z.string().optional().nullable(),
    tags: z.array(z.string()).optional()
});

export const updateGameSchema = z.object({
    q: z.string().optional(),
    genre: z.string().optional(),
    ratingMin: z.string().optional(),
});