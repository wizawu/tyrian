declare namespace java {
  namespace nio {
    namespace file {
      namespace spi {

        abstract class FileTypeDetector {
          protected constructor()
          public abstract probeContentType(arg0: java.nio.file.Path): java.lang.String
        }

      }
    }
  }
}
