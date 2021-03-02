declare namespace com {
  namespace sun {
    namespace jdi {

      interface ShortValue extends com.sun.jdi.PrimitiveValue, java.lang.Comparable<com.sun.jdi.ShortValue> {
        value(): short
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
      }

    }
  }
}
