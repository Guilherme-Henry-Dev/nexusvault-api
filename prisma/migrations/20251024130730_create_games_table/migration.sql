/*
  Warnings:

  - Added the required column `releaseYear` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Made the column `genre` on table `Game` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "releaseYear" INTEGER NOT NULL,
ALTER COLUMN "genre" SET NOT NULL;
