declare namespace org {
  namespace w3c {
    namespace dom {
      namespace stylesheets {

        interface MediaList {

          getMediaText(): java.lang.String
          setMediaText(arg0: java.lang.String): void
          getLength(): int
          item(arg0: int): java.lang.String
          deleteMedium(arg0: java.lang.String): void
          appendMedium(arg0: java.lang.String): void
        }

      }
    }
  }
}
