declare namespace sun {
    namespace nio {
        namespace ch {
            interface SelChImpl extends java.nio.channels.Channel {
                getFD(): java.io.FileDescriptor
                getFDVal(): int
                translateAndUpdateReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                translateAndSetReadyOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): boolean
                translateAndSetInterestOps(arg0: int, arg1: sun.nio.ch.SelectionKeyImpl): void
                validOps(): int
                kill(): void
            }
        }
    }
}