import { prisma } from "../db.js";

const saveMetadata = async (metadata, pageTitle) => {
  let resultMessage = "Metadata no se completó";

  try {
    const metadataExist = await prisma.WebPageMetadata.findFirst();

    if (metadataExist) {
      await prisma.WebPageMetadata.update({
        where: {
          id: metadataExist.id,
        },
        data: {
          title: pageTitle,
          description: metadata.description,
          applicationName: metadata.applicationName,
          msApplicationTooltip: metadata.msApplicationTooltip,
          ogImage: metadata.ogImage,
          keywords: metadata.keywords,
        },
      });

      resultMessage = "Metadata actualizada con éxito.";
    } else {
      await prisma.WebPageMetadata.create({
        data: {
          title: pageTitle,
          description: metadata.description,
          applicationName: metadata.applicationName,
          msApplicationTooltip: metadata.msApplicationTooltip,
          ogImage: metadata.ogImage,
          keywords: metadata.keywords,
        },
      });

      resultMessage = "Metadata creada con éxito.";
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }

  return resultMessage;
};
export default saveMetadata;
