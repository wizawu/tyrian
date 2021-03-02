declare namespace com {
  namespace sun {
    namespace javadoc {

      interface SerialFieldTag extends com.sun.javadoc.Tag, java.lang.Comparable<java.lang.Object> {
        fieldName(): java.lang.String
        fieldType(): java.lang.String
        fieldTypeDoc(): com.sun.javadoc.ClassDoc
        description(): java.lang.String
        compareTo(arg0: java.lang.Object): int
      }

    }
  }
}
