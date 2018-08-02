declare namespace java {
    namespace nio {
        class ByteBufferAsFloatBufferL extends java.nio.FloatBuffer {
            protected bb: java.nio.ByteBuffer
            protected offset: int
            public slice(): java.nio.FloatBuffer
            public duplicate(): java.nio.FloatBuffer
            public asReadOnlyBuffer(): java.nio.FloatBuffer
            protected ix(arg0: int): int
            public get(): float
            public get(arg0: int): float
            public put(arg0: float): java.nio.FloatBuffer
            public put(arg0: int, arg1: float): java.nio.FloatBuffer
            public compact(): java.nio.FloatBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public order(): java.nio.ByteOrder
            public static class: java.lang.Class<any>
        }
    }
}