declare namespace sun {
    namespace nio {
        namespace ch {
            abstract class SelectorImpl extends java.nio.channels.spi.AbstractSelector {
                protected selectedKeys: java.util.Set<java.nio.channels.SelectionKey>
                protected keys: java.util.HashSet<java.nio.channels.SelectionKey>
                protected constructor(arg0: java.nio.channels.spi.SelectorProvider)
                public keys(): java.util.Set<java.nio.channels.SelectionKey>
                public selectedKeys(): java.util.Set<java.nio.channels.SelectionKey>
                protected abstract doSelect(arg0: long): int
                public select(arg0: long): int
                public select(): int
                public selectNow(): int
                public implCloseSelector(): void
                protected abstract implClose(): void
                public putEventOps(arg0: sun.nio.ch.SelectionKeyImpl, arg1: int): void
                protected register(arg0: java.nio.channels.spi.AbstractSelectableChannel, arg1: int, arg2: java.lang.Object): java.nio.channels.SelectionKey
                protected abstract implRegister(arg0: sun.nio.ch.SelectionKeyImpl): void
                protected abstract implDereg(arg0: sun.nio.ch.SelectionKeyImpl): void
                public abstract wakeup(): java.nio.channels.Selector
                public static class: java.lang.Class<any>
            }
        }
    }
}