declare namespace java {
    namespace nio {
        class ByteBufferAsDoubleBufferRL extends java.nio.ByteBufferAsDoubleBufferL {
            public slice(): java.nio.DoubleBuffer
            public duplicate(): java.nio.DoubleBuffer
            public asReadOnlyBuffer(): java.nio.DoubleBuffer
            public put(arg0: double): java.nio.DoubleBuffer
            public put(arg0: int, arg1: double): java.nio.DoubleBuffer
            public compact(): java.nio.DoubleBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public order(): java.nio.ByteOrder
            public static class: java.lang.Class<any>
        }
    }
}