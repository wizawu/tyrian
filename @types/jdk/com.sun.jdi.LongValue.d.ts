declare namespace com {
  namespace sun {
    namespace jdi {

      interface LongValue extends com.sun.jdi.PrimitiveValue, java.lang.Comparable<com.sun.jdi.LongValue> {
        value(): long
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
      }

    }
  }
}
