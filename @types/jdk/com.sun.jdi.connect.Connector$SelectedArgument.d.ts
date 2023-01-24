declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {
        interface Connector$SelectedArgument extends com.sun.jdi.connect.Connector$Argument {
          choices(): java.util.List<java.lang.String>
          isValid(arg0: java.lang.String | string): boolean
        }
      }
    }
  }
}
