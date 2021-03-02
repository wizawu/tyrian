declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace tiff {

        class TIFFImageReadParam extends javax.imageio.ImageReadParam {
          public constructor()
          public addAllowedTagSet(arg0: javax.imageio.plugins.tiff.TIFFTagSet): void
          public removeAllowedTagSet(arg0: javax.imageio.plugins.tiff.TIFFTagSet): void
          public getAllowedTagSets(): java.util.List<javax.imageio.plugins.tiff.TIFFTagSet>
          public setReadUnknownTags(arg0: boolean | java.lang.Boolean): void
          public getReadUnknownTags(): boolean
        }

      }
    }
  }
}
