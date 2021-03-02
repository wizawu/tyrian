declare namespace com {
  namespace sun {
    namespace jdi {

      interface IntegerValue extends com.sun.jdi.PrimitiveValue, java.lang.Comparable<com.sun.jdi.IntegerValue> {
        value(): number
        equals(arg0: java.lang.Object | any): boolean
        hashCode(): number
      }

    }
  }
}
