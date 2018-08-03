declare namespace sun {
    namespace nio {
        namespace ch {
            class SelectionKeyImpl extends java.nio.channels.spi.AbstractSelectionKey {
                public readonly selector: sun.nio.ch.SelectorImpl
                public channel(): java.nio.channels.SelectableChannel
                public selector(): java.nio.channels.Selector
                public interestOps(): int
                public interestOps(arg0: int): java.nio.channels.SelectionKey
                public readyOps(): int
                public nioReadyOps(arg0: int): void
                public nioReadyOps(): int
                public nioInterestOps(arg0: int): java.nio.channels.SelectionKey
                public nioInterestOps(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}