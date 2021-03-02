declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {

        abstract class AbstractSelector extends java.nio.channels.Selector {
          protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
          cancel(arg0: java.nio.channels.SelectionKey): void
          public close(): void
          protected abstract implCloseSelector(): void
          public isOpen(): boolean
          public provider(): java.nio.channels.spi.SelectorProvider
          protected cancelledKeys(): java.util.Set<java.nio.channels.SelectionKey>
          protected abstract register(arg0: java.nio.channels.spi.AbstractSelectableChannel, arg1: number | java.lang.Integer, arg2: java.lang.Object | any): java.nio.channels.SelectionKey
          protected deregister(arg0: java.nio.channels.spi.AbstractSelectionKey): void
          protected begin(): void
          protected end(): void
        }

      }
    }
  }
}
