declare namespace com {
  namespace sun {
    namespace javadoc {
      interface ThrowsTag extends com.sun.javadoc.Tag {
        exceptionName(): java.lang.String
        exceptionComment(): java.lang.String
        exception(): com.sun.javadoc.ClassDoc
        exceptionType(): com.sun.javadoc.Type
      }
    }
  }
}
