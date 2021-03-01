declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace tiff {

        class TIFFDirectory implements java.lang.Cloneable {

          public static createFromMetadata(arg0: javax.imageio.metadata.IIOMetadata): javax.imageio.plugins.tiff.TIFFDirectory
          public constructor(arg0: javax.imageio.plugins.tiff.TIFFTagSet[], arg1: javax.imageio.plugins.tiff.TIFFTag)
          public getTagSets(): javax.imageio.plugins.tiff.TIFFTagSet[]
          public addTagSet(arg0: javax.imageio.plugins.tiff.TIFFTagSet): void
          public removeTagSet(arg0: javax.imageio.plugins.tiff.TIFFTagSet): void
          public getParentTag(): javax.imageio.plugins.tiff.TIFFTag
          public getTag(arg0: int): javax.imageio.plugins.tiff.TIFFTag
          public getNumTIFFFields(): int
          public containsTIFFField(arg0: int): boolean
          public addTIFFField(arg0: javax.imageio.plugins.tiff.TIFFField): void
          public getTIFFField(arg0: int): javax.imageio.plugins.tiff.TIFFField
          public removeTIFFField(arg0: int): void
          public getTIFFFields(): javax.imageio.plugins.tiff.TIFFField[]
          public removeTIFFFields(): void
          public getAsMetadata(): javax.imageio.metadata.IIOMetadata
          public clone(): javax.imageio.plugins.tiff.TIFFDirectory
          public clone(): java.lang.Object
        }

      }
    }
  }
}
