declare namespace com {
  namespace sun {
    namespace javadoc {

      interface MethodDoc extends com.sun.javadoc.ExecutableMemberDoc {
        isAbstract(): boolean
        isDefault(): boolean
        returnType(): com.sun.javadoc.Type
        overriddenClass(): com.sun.javadoc.ClassDoc
        overriddenType(): com.sun.javadoc.Type
        overriddenMethod(): com.sun.javadoc.MethodDoc
        overrides(arg0: com.sun.javadoc.MethodDoc): boolean
      }

    }
  }
}
