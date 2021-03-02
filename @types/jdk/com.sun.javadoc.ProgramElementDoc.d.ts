declare namespace com {
  namespace sun {
    namespace javadoc {

      interface ProgramElementDoc extends com.sun.javadoc.Doc {
        containingClass(): com.sun.javadoc.ClassDoc
        containingPackage(): com.sun.javadoc.PackageDoc
        qualifiedName(): java.lang.String
        modifierSpecifier(): int
        modifiers(): java.lang.String
        annotations(): com.sun.javadoc.AnnotationDesc[]
        isPublic(): boolean
        isProtected(): boolean
        isPrivate(): boolean
        isPackagePrivate(): boolean
        isStatic(): boolean
        isFinal(): boolean
      }

    }
  }
}
