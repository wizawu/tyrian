declare namespace com {
  namespace sun {
    namespace javadoc {

      interface PackageDoc extends com.sun.javadoc.Doc {
        allClasses(arg0: boolean | java.lang.Boolean): com.sun.javadoc.ClassDoc[]
        allClasses(): com.sun.javadoc.ClassDoc[]
        ordinaryClasses(): com.sun.javadoc.ClassDoc[]
        exceptions(): com.sun.javadoc.ClassDoc[]
        errors(): com.sun.javadoc.ClassDoc[]
        enums(): com.sun.javadoc.ClassDoc[]
        interfaces(): com.sun.javadoc.ClassDoc[]
        annotationTypes(): com.sun.javadoc.AnnotationTypeDoc[]
        annotations(): com.sun.javadoc.AnnotationDesc[]
        findClass(arg0: java.lang.String | string): com.sun.javadoc.ClassDoc
      }

    }
  }
}
