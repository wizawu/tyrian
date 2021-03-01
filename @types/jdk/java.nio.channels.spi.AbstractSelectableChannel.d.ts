declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {

        abstract class AbstractSelectableChannel extends java.nio.channels.SelectableChannel {

          static readonly $assertionsDisabled: boolean
          protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
          public readonly provider(): java.nio.channels.spi.SelectorProvider
          removeKey(arg0: java.nio.channels.SelectionKey): void
          public readonly isRegistered(): boolean
          public readonly keyFor(arg0: java.nio.channels.Selector): java.nio.channels.SelectionKey
          public readonly register(arg0: java.nio.channels.Selector, arg1: int, arg2: java.lang.Object): java.nio.channels.SelectionKey
          protected readonly implCloseChannel(): void
          protected abstract implCloseSelectableChannel(): void
          public readonly isBlocking(): boolean
          public readonly blockingLock(): java.lang.Object
          public readonly configureBlocking(arg0: boolean): java.nio.channels.SelectableChannel
          protected abstract implConfigureBlocking(arg0: boolean): void
        }

      }
    }
  }
}
