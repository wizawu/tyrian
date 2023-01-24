declare namespace com {
  namespace sun {
    namespace javadoc {
      interface Parameter {
        type(): com.sun.javadoc.Type
        name(): java.lang.String
        typeName(): java.lang.String
        toString(): java.lang.String
        annotations(): com.sun.javadoc.AnnotationDesc[]
      }
    }
  }
}
