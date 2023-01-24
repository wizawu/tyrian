declare namespace java {
  namespace nio {
    namespace channels {
      namespace spi {
        abstract class AbstractSelectableChannel extends java.nio.channels.SelectableChannel {
          static readonly $assertionsDisabled: boolean
          protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
          public provider(): java.nio.channels.spi.SelectorProvider
          removeKey(arg0: java.nio.channels.SelectionKey): void
          public isRegistered(): boolean
          public keyFor(arg0: java.nio.channels.Selector): java.nio.channels.SelectionKey
          public register(
            arg0: java.nio.channels.Selector,
            arg1: number | java.lang.Integer,
            arg2: java.lang.Object | any
          ): java.nio.channels.SelectionKey
          protected implCloseChannel(): void
          protected abstract implCloseSelectableChannel(): void
          public isBlocking(): boolean
          public blockingLock(): java.lang.Object
          public configureBlocking(arg0: boolean | java.lang.Boolean): java.nio.channels.SelectableChannel
          protected abstract implConfigureBlocking(arg0: boolean | java.lang.Boolean): void
        }
      }
    }
  }
}
