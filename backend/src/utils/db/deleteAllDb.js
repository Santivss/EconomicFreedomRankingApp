import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    // Eliminar todos los registros en cada tabla
    await prisma.WebPageMetadata.deleteMany();
    await prisma.CountryData.deleteMany();

    console.log("Base de datos limpiada.");
  } catch (error) {
    console.error("Error al limpiar la base de datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase();
