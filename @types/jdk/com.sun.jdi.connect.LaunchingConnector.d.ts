declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        interface LaunchingConnector extends com.sun.jdi.connect.Connector {
          launch(arg0: java.util.Map<java.lang.String,com.sun.jdi.connect.Connector$Argument>): com.sun.jdi.VirtualMachine
        }

      }
    }
  }
}
