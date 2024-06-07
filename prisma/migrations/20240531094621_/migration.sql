-- CreateTable
CREATE TABLE "npsStat" (
    "id" SERIAL NOT NULL,
    "stock" TEXT,
    "valuation" TEXT,
    "perAsset" TEXT,
    "perAll" TEXT,

    CONSTRAINT "npsStat_pkey" PRIMARY KEY ("id")
);
