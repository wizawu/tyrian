declare namespace java {
    namespace nio {
        class DirectDoubleBufferRU extends java.nio.DirectDoubleBufferU implements sun.nio.ch.DirectBuffer {
            public slice(): java.nio.DoubleBuffer
            public duplicate(): java.nio.DoubleBuffer
            public asReadOnlyBuffer(): java.nio.DoubleBuffer
            public put(arg0: double): java.nio.DoubleBuffer
            public put(arg0: int, arg1: double): java.nio.DoubleBuffer
            public put(arg0: java.nio.DoubleBuffer): java.nio.DoubleBuffer
            public put(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
            public compact(): java.nio.DoubleBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public order(): java.nio.ByteOrder
            public static class: java.lang.Class<any>
        }
    }
}