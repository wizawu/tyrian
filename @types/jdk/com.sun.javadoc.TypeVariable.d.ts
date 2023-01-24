declare namespace com {
  namespace sun {
    namespace javadoc {
      interface TypeVariable extends com.sun.javadoc.Type {
        bounds(): com.sun.javadoc.Type[]
        owner(): com.sun.javadoc.ProgramElementDoc
        annotations(): com.sun.javadoc.AnnotationDesc[]
      }
    }
  }
}
