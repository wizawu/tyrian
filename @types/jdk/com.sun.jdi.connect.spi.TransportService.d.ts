declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {
        namespace spi {

          abstract class TransportService {

            public constructor()
            public abstract name(): java.lang.String
            public abstract description(): java.lang.String
            public abstract capabilities(): com.sun.jdi.connect.spi.TransportService$Capabilities
            public abstract attach(arg0: java.lang.String, arg1: long, arg2: long): com.sun.jdi.connect.spi.Connection
            public abstract startListening(arg0: java.lang.String): com.sun.jdi.connect.spi.TransportService$ListenKey
            public abstract startListening(): com.sun.jdi.connect.spi.TransportService$ListenKey
            public abstract stopListening(arg0: com.sun.jdi.connect.spi.TransportService$ListenKey): void
            public abstract accept(arg0: com.sun.jdi.connect.spi.TransportService$ListenKey, arg1: long, arg2: long): com.sun.jdi.connect.spi.Connection
          }

        }
      }
    }
  }
}
