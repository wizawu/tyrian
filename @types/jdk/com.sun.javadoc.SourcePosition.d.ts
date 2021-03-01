declare namespace com {
  namespace sun {
    namespace javadoc {

      interface SourcePosition {

        file(): java.io.File
        line(): int
        column(): int
        toString(): java.lang.String
      }

    }
  }
}
