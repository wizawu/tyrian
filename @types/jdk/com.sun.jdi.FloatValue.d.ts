declare namespace com {
  namespace sun {
    namespace jdi {

      interface FloatValue extends com.sun.jdi.PrimitiveValue, java.lang.Comparable<com.sun.jdi.FloatValue> {
        value(): float
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
      }

    }
  }
}
