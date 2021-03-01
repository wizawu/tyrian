declare namespace com {
  namespace sun {
    namespace jdi {

      interface PrimitiveValue extends com.sun.jdi.Value {

        booleanValue(): boolean
        byteValue(): byte
        charValue(): char
        shortValue(): short
        intValue(): int
        longValue(): long
        floatValue(): float
        doubleValue(): double
      }

    }
  }
}
