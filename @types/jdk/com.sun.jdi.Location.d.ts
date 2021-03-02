declare namespace com {
  namespace sun {
    namespace jdi {

      interface Location extends com.sun.jdi.Mirror, java.lang.Comparable<com.sun.jdi.Location> {
        declaringType(): com.sun.jdi.ReferenceType
        method(): com.sun.jdi.Method
        codeIndex(): long
        sourceName(): java.lang.String
        sourceName(arg0: java.lang.String): java.lang.String
        sourcePath(): java.lang.String
        sourcePath(arg0: java.lang.String): java.lang.String
        lineNumber(): int
        lineNumber(arg0: java.lang.String): int
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
      }

    }
  }
}
