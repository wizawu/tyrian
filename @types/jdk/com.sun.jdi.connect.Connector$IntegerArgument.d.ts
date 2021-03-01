declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        interface Connector$IntegerArgument extends com.sun.jdi.connect.Connector$Argument {

          setValue(arg0: int): void
          isValid(arg0: java.lang.String): boolean
          isValid(arg0: int): boolean
          stringValueOf(arg0: int): java.lang.String
          intValue(): int
          max(): int
          min(): int
        }

      }
    }
  }
}
