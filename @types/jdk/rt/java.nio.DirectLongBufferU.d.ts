declare namespace java {
    namespace nio {
        class DirectLongBufferU extends java.nio.LongBuffer implements sun.nio.ch.DirectBuffer {
            protected static readonly unsafe: sun.misc.Unsafe
            protected static readonly unaligned: boolean
            public attachment(): java.lang.Object
            public cleaner(): sun.misc.Cleaner
            public slice(): java.nio.LongBuffer
            public duplicate(): java.nio.LongBuffer
            public asReadOnlyBuffer(): java.nio.LongBuffer
            public address(): long
            public get(): long
            public get(arg0: int): long
            public get(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
            public put(arg0: long): java.nio.LongBuffer
            public put(arg0: int, arg1: long): java.nio.LongBuffer
            public put(arg0: java.nio.LongBuffer): java.nio.LongBuffer
            public put(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
            public compact(): java.nio.LongBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public order(): java.nio.ByteOrder
            public static class: java.lang.Class<any>
        }
    }
}