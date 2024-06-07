-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "age" TEXT,
    "asset" TEXT,
    "email" TEXT,
    "investment_propensity" TEXT,
    "mbti" TEXT,
    "mod_date" TEXT,
    "reg_date" TEXT
);

-- CreateTable
CREATE TABLE "boards" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "password" TEXT,
    "description" TEXT,
    "mod_date" TEXT,
    "reg_date" TEXT
);

-- CreateTable
CREATE TABLE "articles" (
    "id" TEXT NOT NULL,
    "title" TEXT,
    "content" TEXT,
    "mod_date" TEXT,
    "reg_date" TEXT,
    "board_id" TEXT,
    "writer_id" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "boards_id_key" ON "boards"("id");

-- CreateIndex
CREATE UNIQUE INDEX "articles_id_key" ON "articles"("id");
