declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {

        interface ListeningConnector extends com.sun.jdi.connect.Connector {

          supportsMultipleConnections(): boolean
          startListening(arg0: java.util.Map<java.lang.String,com.sun.jdi.connect.Connector$Argument>): java.lang.String
          stopListening(arg0: java.util.Map<java.lang.String,com.sun.jdi.connect.Connector$Argument>): void
          accept(arg0: java.util.Map<java.lang.String,com.sun.jdi.connect.Connector$Argument>): com.sun.jdi.VirtualMachine
        }

      }
    }
  }
}
