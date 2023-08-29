/*
  Warnings:

  - You are about to drop the column `name` on the `CountryData` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `CountryData` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `title` to the `CountryData` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CountryData_name_key";

-- AlterTable
ALTER TABLE "CountryData" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CountryData_title_key" ON "CountryData"("title");
