/*
  Warnings:

  - The `id` column on the `articles` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `id` column on the `boards` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "articles_id_key";

-- DropIndex
DROP INDEX "boards_id_key";

-- DropIndex
DROP INDEX "users_id_key";

-- AlterTable
ALTER TABLE "articles" DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "articles_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "boards" DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "boards_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
