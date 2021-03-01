declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        interface Connector$BooleanArgument extends com.sun.jdi.connect.Connector$Argument {

          setValue(arg0: boolean): void
          isValid(arg0: java.lang.String): boolean
          stringValueOf(arg0: boolean): java.lang.String
          booleanValue(): boolean
        }

      }
    }
  }
}
