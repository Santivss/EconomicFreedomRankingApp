/*
  Warnings:

  - You are about to drop the column `imageAltText` on the `WebPageMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `WebPageMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `metaKeywords` on the `WebPageMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `metaRobots` on the `WebPageMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `ogDescription` on the `WebPageMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `sitemapUrl` on the `WebPageMetadata` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `WebPageMetadata` table. All the data in the column will be lost.
  - Added the required column `applicationName` to the `WebPageMetadata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keywords` to the `WebPageMetadata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `msApplicationTooltip` to the `WebPageMetadata` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "WebPageMetadata_url_key";

-- AlterTable
ALTER TABLE "WebPageMetadata" DROP COLUMN "imageAltText",
DROP COLUMN "imageUrl",
DROP COLUMN "metaKeywords",
DROP COLUMN "metaRobots",
DROP COLUMN "ogDescription",
DROP COLUMN "sitemapUrl",
DROP COLUMN "url",
ADD COLUMN     "applicationName" TEXT NOT NULL,
ADD COLUMN     "keywords" TEXT NOT NULL,
ADD COLUMN     "msApplicationTooltip" TEXT NOT NULL;
