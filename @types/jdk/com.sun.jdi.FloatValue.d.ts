declare namespace com {
  namespace sun {
    namespace jdi {

      interface FloatValue extends com.sun.jdi.PrimitiveValue, java.lang.Comparable<com.sun.jdi.FloatValue> {
        value(): number
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }

    }
  }
}
