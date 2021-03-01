declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {

        abstract class AbstractInterruptibleChannel implements java.nio.channels.Channel, java.nio.channels.InterruptibleChannel {

          protected constructor()
          public readonly close(): void
          protected abstract implCloseChannel(): void
          public readonly isOpen(): boolean
          protected readonly begin(): void
          protected readonly end(arg0: boolean): void
          static blockedOn(arg0: sun.nio.ch.Interruptible): void
        }

      }
    }
  }
}
