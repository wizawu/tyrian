declare namespace com {
  namespace sun {
    namespace javadoc {
      interface RootDoc extends com.sun.javadoc.Doc, com.sun.javadoc.DocErrorReporter {
        options(): java.lang.String[][]
        specifiedPackages(): com.sun.javadoc.PackageDoc[]
        specifiedClasses(): com.sun.javadoc.ClassDoc[]
        classes(): com.sun.javadoc.ClassDoc[]
        packageNamed(arg0: java.lang.String | string): com.sun.javadoc.PackageDoc
        classNamed(arg0: java.lang.String | string): com.sun.javadoc.ClassDoc
      }
    }
  }
}
