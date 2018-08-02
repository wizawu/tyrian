declare namespace java {
    namespace nio {
        namespace channels {
            abstract class SelectionKey {
                public static OP_READ: int
                public static OP_WRITE: int
                public static OP_CONNECT: int
                public static OP_ACCEPT: int
                protected constructor()
                public channel(): java.nio.channels.SelectableChannel
                public selector(): java.nio.channels.Selector
                public isValid(): boolean
                public cancel(): void
                public interestOps(): int
                public interestOps(arg0: int): java.nio.channels.SelectionKey
                public readyOps(): int
                public isReadable(): boolean
                public isWritable(): boolean
                public isConnectable(): boolean
                public isAcceptable(): boolean
                public attach(arg0: java.lang.Object): java.lang.Object
                public attachment(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}