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
            public abstract attach(arg0: java.lang.String | string, arg1: number | java.lang.Long, arg2: number | java.lang.Long): com.sun.jdi.connect.spi.Connection
            public abstract startListening(arg0: java.lang.String | string): com.sun.jdi.connect.spi.TransportService$ListenKey
            public abstract startListening(): com.sun.jdi.connect.spi.TransportService$ListenKey
            public abstract stopListening(arg0: com.sun.jdi.connect.spi.TransportService$ListenKey): void
            public abstract accept(arg0: com.sun.jdi.connect.spi.TransportService$ListenKey, arg1: number | java.lang.Long, arg2: number | java.lang.Long): com.sun.jdi.connect.spi.Connection
          }

        }
      }
    }
  }
}
