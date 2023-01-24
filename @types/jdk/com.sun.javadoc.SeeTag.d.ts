declare namespace com {
  namespace sun {
    namespace javadoc {
      interface SeeTag extends com.sun.javadoc.Tag {
        label(): java.lang.String
        referencedPackage(): com.sun.javadoc.PackageDoc
        referencedClassName(): java.lang.String
        referencedClass(): com.sun.javadoc.ClassDoc
        referencedMemberName(): java.lang.String
        referencedMember(): com.sun.javadoc.MemberDoc
      }
    }
  }
}
