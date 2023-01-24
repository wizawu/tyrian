declare namespace java {
  namespace lang {
    namespace annotation {
      class IncompleteAnnotationException extends java.lang.RuntimeException {
        public constructor(arg0: java.lang.Class<java.lang.annotation.Annotation>, arg1: java.lang.String | string)
        public annotationType(): java.lang.Class<java.lang.annotation.Annotation>
        public elementName(): java.lang.String
      }
    }
  }
}
