declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {

        abstract class AbstractSelector extends java.nio.channels.Selector {

          protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
          cancel(arg0: java.nio.channels.SelectionKey): void
          public readonly close(): void
          protected abstract implCloseSelector(): void
          public readonly isOpen(): boolean
          public readonly provider(): java.nio.channels.spi.SelectorProvider
          protected readonly cancelledKeys(): java.util.Set<java.nio.channels.SelectionKey>
          protected abstract register(arg0: java.nio.channels.spi.AbstractSelectableChannel, arg1: int, arg2: java.lang.Object): java.nio.channels.SelectionKey
          protected readonly deregister(arg0: java.nio.channels.spi.AbstractSelectionKey): void
          protected readonly begin(): void
          protected readonly end(): void
        }

      }
    }
  }
}
