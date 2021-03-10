declare namespace com {
  namespace sun {
    namespace jdi {
      namespace connect {
        namespace spi {

          abstract class Connection {
            public constructor()
            public abstract readPacket(): number[]
            public abstract writePacket(arg0: number[] | java.lang.Byte[]): void
            public abstract close(): void
            public abstract isOpen(): boolean
          }

        }
      }
    }
  }
}
