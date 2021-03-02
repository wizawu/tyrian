declare namespace com {
  namespace sun {
    namespace jdi {

      interface Field extends com.sun.jdi.TypeComponent, java.lang.Comparable<com.sun.jdi.Field> {
        typeName(): java.lang.String
        type(): com.sun.jdi.Type
        isTransient(): boolean
        isVolatile(): boolean
        isEnumConstant(): boolean
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
      }

    }
  }
}
