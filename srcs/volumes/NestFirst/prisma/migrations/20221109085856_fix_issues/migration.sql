/*
  Warnings:

  - You are about to drop the column `description` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `bookmarks` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `bookmarks` table. All the data in the column will be lost.
  - Added the required column `name` to the `bookmarks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_userId_fkey";

-- AlterTable
ALTER TABLE "bookmarks" DROP COLUMN "description",
DROP COLUMN "link",
DROP COLUMN "title",
DROP COLUMN "userId",
ADD COLUMN     "admins" INTEGER[],
ADD COLUMN     "hashPwd" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "state" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "blockedUsers" INTEGER[];
