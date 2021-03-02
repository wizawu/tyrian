declare namespace com {
  namespace sun {
    namespace jdi {

      interface CharValue extends com.sun.jdi.PrimitiveValue, java.lang.Comparable<com.sun.jdi.CharValue> {
        value(): char
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
      }

    }
  }
}
