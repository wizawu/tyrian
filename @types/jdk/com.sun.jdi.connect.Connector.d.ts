declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        interface Connector {

          name(): java.lang.String
          description(): java.lang.String
          transport(): com.sun.jdi.connect.Transport
          defaultArguments(): java.util.Map<java.lang.String,com.sun.jdi.connect.Connector$Argument>
        }

      }
    }
  }
}
