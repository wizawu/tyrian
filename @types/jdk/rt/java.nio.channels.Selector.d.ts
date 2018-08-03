declare namespace java {
    namespace nio {
        namespace channels {
            abstract class Selector implements java.io.Closeable {
                protected constructor()
                public static open(): java.nio.channels.Selector
                public abstract isOpen(): boolean
                public abstract provider(): java.nio.channels.spi.SelectorProvider
                public abstract keys(): java.util.Set<java.nio.channels.SelectionKey>
                public abstract selectedKeys(): java.util.Set<java.nio.channels.SelectionKey>
                public abstract selectNow(): int
                public abstract select(arg0: long): int
                public abstract select(): int
                public abstract wakeup(): java.nio.channels.Selector
                public abstract close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}