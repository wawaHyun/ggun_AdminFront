/*
  Warnings:

  - You are about to drop the column `password` on the `boards` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "boards" DROP COLUMN "password";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "token" TEXT;
