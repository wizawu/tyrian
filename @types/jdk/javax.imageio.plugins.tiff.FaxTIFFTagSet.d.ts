declare namespace javax {
  namespace imageio {
    namespace plugins {
      namespace tiff {
        class FaxTIFFTagSet extends javax.imageio.plugins.tiff.TIFFTagSet {
          public static readonly TAG_BAD_FAX_LINES: int
          public static readonly TAG_CLEAN_FAX_DATA: int
          public static readonly CLEAN_FAX_DATA_NO_ERRORS: int
          public static readonly CLEAN_FAX_DATA_ERRORS_CORRECTED: int
          public static readonly CLEAN_FAX_DATA_ERRORS_UNCORRECTED: int
          public static readonly TAG_CONSECUTIVE_BAD_LINES: int
          public static getInstance(): javax.imageio.plugins.tiff.FaxTIFFTagSet
        }
      }
    }
  }
}
