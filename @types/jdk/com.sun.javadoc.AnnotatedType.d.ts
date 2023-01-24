declare namespace com {
  namespace sun {
    namespace javadoc {
      interface AnnotatedType extends com.sun.javadoc.Type {
        annotations(): com.sun.javadoc.AnnotationDesc[]
        underlyingType(): com.sun.javadoc.Type
      }
    }
  }
}
