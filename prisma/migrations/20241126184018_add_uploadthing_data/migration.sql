-- CreateTable
CREATE TABLE "UploadThingData" (
    "id" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL,
    "chapterId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UploadThingData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UploadThingData_chapterId_key" ON "UploadThingData"("chapterId");

-- AddForeignKey
ALTER TABLE "UploadThingData" ADD CONSTRAINT "UploadThingData_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
