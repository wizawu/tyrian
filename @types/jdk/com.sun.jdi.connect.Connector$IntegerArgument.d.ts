declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        interface Connector$IntegerArgument extends com.sun.jdi.connect.Connector$Argument {
          setValue(arg0: number | java.lang.Integer): void
          isValid(arg0: java.lang.String | string): boolean
          isValid(arg0: number | java.lang.Integer): boolean
          stringValueOf(arg0: number | java.lang.Integer): java.lang.String
          intValue(): number
          max(): number
          min(): number
        }

      }
    }
  }
}
