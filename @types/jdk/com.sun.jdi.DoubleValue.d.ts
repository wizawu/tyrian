declare namespace com {
  namespace sun {
    namespace jdi {

      interface DoubleValue extends com.sun.jdi.PrimitiveValue, java.lang.Comparable<com.sun.jdi.DoubleValue> {
        value(): number
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }

    }
  }
}
