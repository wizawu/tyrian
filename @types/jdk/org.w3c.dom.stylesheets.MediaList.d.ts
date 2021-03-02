declare namespace org {
  namespace w3c {
    namespace dom {
      namespace stylesheets {

        interface MediaList {
          getMediaText(): java.lang.String
          setMediaText(arg0: java.lang.String | string): void
          getLength(): number
          item(arg0: number | java.lang.Integer): java.lang.String
          deleteMedium(arg0: java.lang.String | string): void
          appendMedium(arg0: java.lang.String | string): void
        }

      }
    }
  }
}
