declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace tiff {

        class TIFFTagSet {
          public constructor(arg0: java.util.List<javax.imageio.plugins.tiff.TIFFTag>)
          public getTag(arg0: int): javax.imageio.plugins.tiff.TIFFTag
          public getTag(arg0: java.lang.String): javax.imageio.plugins.tiff.TIFFTag
          public getTagNumbers(): java.util.SortedSet<java.lang.Integer>
          public getTagNames(): java.util.SortedSet<java.lang.String>
        }

      }
    }
  }
}
