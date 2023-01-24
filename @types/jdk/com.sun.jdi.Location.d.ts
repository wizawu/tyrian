declare namespace com {
  namespace sun {
    namespace jdi {
      interface Location extends com.sun.jdi.Mirror, java.lang.Comparable<com.sun.jdi.Location> {
        declaringType(): com.sun.jdi.ReferenceType
        method(): com.sun.jdi.Method
        codeIndex(): number
        sourceName(): java.lang.String
        sourceName(arg0: java.lang.String | string): java.lang.String
        sourcePath(): java.lang.String
        sourcePath(arg0: java.lang.String | string): java.lang.String
        lineNumber(): number
        lineNumber(arg0: java.lang.String | string): number
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }
    }
  }
}
