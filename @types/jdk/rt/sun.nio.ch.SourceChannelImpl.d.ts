declare namespace sun {
    namespace nio {
        namespace ch {
            class SourceChannelImpl extends java.nio.channels.Pipe$SourceChannel implements sun.nio.ch.SelChImpl {
                public getFD(): java.io.FileDescriptor
                public getFDVal(): int
                protected implCloseSelectableChannel(): void
                public kill(): void
                protected implConfigureBlocking(arg0: boolean): void
                public translateReadyOps(arg0: int, arg1: int, arg2: sun.nio.ch.SelectionKeyImpl): boolean
                public translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                public translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                public translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
                public read(arg0: java.nio.ByteBuffer): int
                public read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public read(arg0: java.nio.ByteBuffer[]): long
                public static class: java.lang.Class<any>
            }
        }
    }
}