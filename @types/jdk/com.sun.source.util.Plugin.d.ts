declare namespace com {
  namespace sun {
    namespace source {
      namespace util {
        interface Plugin {
          getName(): java.lang.String
          init(arg0: com.sun.source.util.JavacTask, ...vargs: (java.lang.String | string)[]): void
        }
      }
    }
  }
}
