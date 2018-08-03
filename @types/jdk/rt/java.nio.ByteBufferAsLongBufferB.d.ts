declare namespace java {
    namespace nio {
        class ByteBufferAsLongBufferB extends java.nio.LongBuffer {
            protected readonly bb: java.nio.ByteBuffer
            protected readonly offset: int
            public slice(): java.nio.LongBuffer
            public duplicate(): java.nio.LongBuffer
            public asReadOnlyBuffer(): java.nio.LongBuffer
            protected ix(arg0: int): int
            public get(): long
            public get(arg0: int): long
            public put(arg0: long): java.nio.LongBuffer
            public put(arg0: int, arg1: long): java.nio.LongBuffer
            public compact(): java.nio.LongBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public order(): java.nio.ByteOrder
            public static class: java.lang.Class<any>
        }
    }
}