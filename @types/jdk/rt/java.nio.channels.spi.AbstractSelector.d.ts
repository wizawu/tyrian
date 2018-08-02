declare namespace java {
    namespace nio {
        namespace channels {
            namespace spi {
abstract class AbstractSelector extends java.nio.channels.Selector {
    protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
    public close(): void
    protected implCloseSelector(): void
    public isOpen(): boolean
    public provider(): java.nio.channels.spi.SelectorProvider
    protected cancelledKeys(): java.util.Set<java.nio.channels.SelectionKey>
    protected register(arg0: java.nio.channels.spi.AbstractSelectableChannel, arg1: int, arg2: java.lang.Object): java.nio.channels.SelectionKey
    protected deregister(arg0: java.nio.channels.spi.AbstractSelectionKey): void
    protected begin(): void
    protected end(): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}