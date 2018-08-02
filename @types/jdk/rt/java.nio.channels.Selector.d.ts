declare namespace java {
    namespace nio {
        namespace channels {
abstract class Selector implements java.io.Closeable {
    protected constructor()
    public static open(): java.nio.channels.Selector
    public isOpen(): boolean
    public provider(): java.nio.channels.spi.SelectorProvider
    public keys(): java.util.Set<java.nio.channels.SelectionKey>
    public selectedKeys(): java.util.Set<java.nio.channels.SelectionKey>
    public selectNow(): int
    public select(arg0: long): int
    public select(): int
    public wakeup(): java.nio.channels.Selector
    public close(): void
    public static class: java.lang.Class<any>
}

        }
    }
}