declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace tiff {

        class GeoTIFFTagSet extends javax.imageio.plugins.tiff.TIFFTagSet {
          public static readonly TAG_MODEL_PIXEL_SCALE: int
          public static readonly TAG_MODEL_TRANSFORMATION: int
          public static readonly TAG_MODEL_TIE_POINT: int
          public static readonly TAG_GEO_KEY_DIRECTORY: int
          public static readonly TAG_GEO_DOUBLE_PARAMS: int
          public static readonly TAG_GEO_ASCII_PARAMS: int
          public static getInstance(): javax.imageio.plugins.tiff.GeoTIFFTagSet
        }

      }
    }
  }
}
