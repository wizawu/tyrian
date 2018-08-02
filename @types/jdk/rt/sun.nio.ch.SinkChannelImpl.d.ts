declare namespace sun {
    namespace nio {
        namespace ch {
            class SinkChannelImpl extends java.nio.channels.Pipe$SinkChannel implements sun.nio.ch.SelChImpl {
                public getFD(): java.io.FileDescriptor
                public getFDVal(): int
                protected implCloseSelectableChannel(): void
                public kill(): void
                protected implConfigureBlocking(arg0: boolean): void
                public translateReadyOps(arg0: int, arg1: int, arg2: sun.nio.ch.SelectionKeyImpl): boolean
                public translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                public translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                public translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
                public write(arg0: java.nio.ByteBuffer): int
                public write(arg0: java.nio.ByteBuffer[]): long
                public write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                public static class: java.lang.Class<any>
            }
        }
    }
}