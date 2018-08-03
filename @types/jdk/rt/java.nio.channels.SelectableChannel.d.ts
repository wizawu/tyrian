declare namespace java {
    namespace nio {
        namespace channels {
            abstract class SelectableChannel extends java.nio.channels.spi.AbstractInterruptibleChannel implements java.nio.channels.Channel {
                protected constructor()
                public abstract provider(): java.nio.channels.spi.SelectorProvider
                public abstract validOps(): int
                public abstract isRegistered(): boolean
                public abstract keyFor(arg0: java.nio.channels.Selector): java.nio.channels.SelectionKey
                public abstract register(arg0: java.nio.channels.Selector, arg1: int, arg2: java.lang.Object): java.nio.channels.SelectionKey
                public register(arg0: java.nio.channels.Selector, arg1: int): java.nio.channels.SelectionKey
                public abstract configureBlocking(arg0: boolean): java.nio.channels.SelectableChannel
                public abstract isBlocking(): boolean
                public abstract blockingLock(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}