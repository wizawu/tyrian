declare namespace java {
    namespace nio {
        class ByteBufferAsLongBufferRB extends java.nio.ByteBufferAsLongBufferB {
            public slice(): java.nio.LongBuffer
            public duplicate(): java.nio.LongBuffer
            public asReadOnlyBuffer(): java.nio.LongBuffer
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