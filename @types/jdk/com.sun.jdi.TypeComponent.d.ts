declare namespace com {
  namespace sun {
    namespace jdi {
      interface TypeComponent extends com.sun.jdi.Mirror, com.sun.jdi.Accessible {
        name(): java.lang.String
        signature(): java.lang.String
        genericSignature(): java.lang.String
        declaringType(): com.sun.jdi.ReferenceType
        isStatic(): boolean
        isFinal(): boolean
        isSynthetic(): boolean
      }
    }
  }
}
