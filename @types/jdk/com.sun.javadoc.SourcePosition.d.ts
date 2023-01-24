declare namespace com {
  namespace sun {
    namespace javadoc {
      interface SourcePosition {
        file(): java.io.File
        line(): number
        column(): number
        toString(): java.lang.String
      }
    }
  }
}
