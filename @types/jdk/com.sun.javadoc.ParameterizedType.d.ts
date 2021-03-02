declare namespace com {
  namespace sun {
    namespace javadoc {

      interface ParameterizedType extends com.sun.javadoc.Type {
        asClassDoc(): com.sun.javadoc.ClassDoc
        typeArguments(): com.sun.javadoc.Type[]
        superclassType(): com.sun.javadoc.Type
        interfaceTypes(): com.sun.javadoc.Type[]
        containingType(): com.sun.javadoc.Type
      }

    }
  }
}
