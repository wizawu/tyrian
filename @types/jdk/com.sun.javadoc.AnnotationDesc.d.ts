declare namespace com {
  namespace sun {
    namespace javadoc {

      interface AnnotationDesc {

        annotationType(): com.sun.javadoc.AnnotationTypeDoc
        elementValues(): com.sun.javadoc.AnnotationDesc$ElementValuePair[]
        isSynthesized(): boolean
      }

    }
  }
}
