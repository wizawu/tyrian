declare namespace com {
  namespace sun {
    namespace jdi {

      interface ByteValue extends com.sun.jdi.PrimitiveValue, java.lang.Comparable<com.sun.jdi.ByteValue> {
        value(): byte
        equals(arg0: java.lang.Object): boolean
        hashCode(): int
      }

    }
  }
}
