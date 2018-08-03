declare namespace java {
    namespace nio {
        namespace channels {
            abstract class FileLock implements java.lang.AutoCloseable {
                protected constructor(arg0: java.nio.channels.FileChannel, arg1: long, arg2: long, arg3: boolean)
                protected constructor(arg0: java.nio.channels.AsynchronousFileChannel, arg1: long, arg2: long, arg3: boolean)
                public channel(): java.nio.channels.FileChannel
                public acquiredBy(): java.nio.channels.Channel
                public position(): long
                public size(): long
                public isShared(): boolean
                public overlaps(arg0: long, arg1: long): boolean
                public isValid(): boolean
                public release(): void
                public close(): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}