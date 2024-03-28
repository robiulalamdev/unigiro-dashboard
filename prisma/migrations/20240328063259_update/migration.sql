/*
  Warnings:

  - You are about to drop the `Asset` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CashFlow` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FinancialOverview` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Stock` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Asset" DROP CONSTRAINT "Asset_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CashFlow" DROP CONSTRAINT "CashFlow_companyId_fkey";

-- DropForeignKey
ALTER TABLE "FinancialOverview" DROP CONSTRAINT "FinancialOverview_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_companyId_fkey";

-- DropTable
DROP TABLE "Asset";

-- DropTable
DROP TABLE "CashFlow";

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "FinancialOverview";

-- DropTable
DROP TABLE "Stock";

-- CreateTable
CREATE TABLE "financial" (
    "id" SERIAL NOT NULL,
    "exchange" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "stocksPrices" JSONB NOT NULL,
    "financialOverview" JSONB NOT NULL,
    "assetsLiabilities" JSONB NOT NULL,
    "cashFlowStatement" JSONB NOT NULL,

    CONSTRAINT "financial_pkey" PRIMARY KEY ("id")
);
