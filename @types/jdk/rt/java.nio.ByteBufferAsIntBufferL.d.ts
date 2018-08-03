declare namespace java {
    namespace nio {
        class ByteBufferAsIntBufferL extends java.nio.IntBuffer {
            protected readonly bb: java.nio.ByteBuffer
            protected readonly offset: int
            public slice(): java.nio.IntBuffer
            public duplicate(): java.nio.IntBuffer
            public asReadOnlyBuffer(): java.nio.IntBuffer
            protected ix(arg0: int): int
            public get(): int
            public get(arg0: int): int
            public put(arg0: int): java.nio.IntBuffer
            public put(arg0: int, arg1: int): java.nio.IntBuffer
            public compact(): java.nio.IntBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public order(): java.nio.ByteOrder
            public static class: java.lang.Class<any>
        }
    }
}