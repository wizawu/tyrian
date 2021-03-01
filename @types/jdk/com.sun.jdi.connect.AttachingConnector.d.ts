declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        interface AttachingConnector extends com.sun.jdi.connect.Connector {

          attach(arg0: java.util.Map<java.lang.String,com.sun.jdi.connect.Connector$Argument>): com.sun.jdi.VirtualMachine
        }

      }
    }
  }
}
