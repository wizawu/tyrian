declare namespace com {
  namespace sun {
    namespace jdi {

      interface PrimitiveValue extends com.sun.jdi.Value {
        booleanValue(): boolean
        byteValue(): number
        charValue(): string
        shortValue(): number
        intValue(): number
        longValue(): number
        floatValue(): number
        doubleValue(): number
      }

    }
  }
}
