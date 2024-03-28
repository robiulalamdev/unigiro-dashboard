/*
  Warnings:

  - You are about to drop the column `assetsLiabilities` on the `financial` table. All the data in the column will be lost.
  - You are about to drop the column `cashFlowStatement` on the `financial` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "financial" DROP COLUMN "assetsLiabilities",
DROP COLUMN "cashFlowStatement";
