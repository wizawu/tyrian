declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {
        interface Connector$BooleanArgument extends com.sun.jdi.connect.Connector$Argument {
          setValue(arg0: boolean | java.lang.Boolean): void
          isValid(arg0: java.lang.String | string): boolean
          stringValueOf(arg0: boolean | java.lang.Boolean): java.lang.String
          booleanValue(): boolean
        }
      }
    }
  }
}
