-- CreateTable
CREATE TABLE "Notebook" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uemail" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER,

    CONSTRAINT "Notebook_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" VARCHAR(255) NOT NULL,
    "content" TEXT NOT NULL,
    "nbId" INTEGER,
    "authorId" INTEGER,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Notebook_uemail_key" ON "Notebook"("uemail");

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_nbId_fkey" FOREIGN KEY ("nbId") REFERENCES "Notebook"("id") ON DELETE SET NULL ON UPDATE CASCADE;
