declare namespace com {
  namespace sun {
    namespace javadoc {

      interface WildcardType extends com.sun.javadoc.Type {
        extendsBounds(): com.sun.javadoc.Type[]
        superBounds(): com.sun.javadoc.Type[]
      }

    }
  }
}
