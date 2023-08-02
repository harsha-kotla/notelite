/*
  Warnings:

  - You are about to alter the column `uemail` on the `Notebook` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- DropIndex
DROP INDEX "Notebook_uemail_key";

-- AlterTable
ALTER TABLE "Notebook" ALTER COLUMN "uemail" SET DATA TYPE VARCHAR(255);
