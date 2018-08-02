declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
abstract class AbstractSelectableChannel extends java.nio.channels.SelectableChannel {
    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
    public provider(): java.nio.channels.spi.SelectorProvider
    public isRegistered(): boolean
    public keyFor(arg0: java.nio.channels.Selector): java.nio.channels.SelectionKey
    public register(arg0: java.nio.channels.Selector, arg1: int, arg2: java.lang.Object): java.nio.channels.SelectionKey
    protected implCloseChannel(): void
    protected implCloseSelectableChannel(): void
    public isBlocking(): boolean
    public blockingLock(): java.lang.Object
    public configureBlocking(arg0: boolean): java.nio.channels.SelectableChannel
    protected implConfigureBlocking(arg0: boolean): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}