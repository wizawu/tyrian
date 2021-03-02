declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {
        namespace spi {

          abstract class TransportService$Capabilities {
            public constructor()
            public abstract supportsMultipleConnections(): boolean
            public abstract supportsAttachTimeout(): boolean
            public abstract supportsAcceptTimeout(): boolean
            public abstract supportsHandshakeTimeout(): boolean
          }

        }
      }
    }
  }
}
