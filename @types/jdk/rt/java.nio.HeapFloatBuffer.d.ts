declare namespace java {
    namespace nio {
        class HeapFloatBuffer extends java.nio.FloatBuffer {
            protected constructor(arg0: float[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
            public slice(): java.nio.FloatBuffer
            public duplicate(): java.nio.FloatBuffer
            public asReadOnlyBuffer(): java.nio.FloatBuffer
            protected ix(arg0: int): int
            public get(): float
            public get(arg0: int): float
            public get(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public put(arg0: float): java.nio.FloatBuffer
            public put(arg0: int, arg1: float): java.nio.FloatBuffer
            public put(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
            public put(arg0: java.nio.FloatBuffer): java.nio.FloatBuffer
            public compact(): java.nio.FloatBuffer
            public order(): java.nio.ByteOrder
            public static class: java.lang.Class<any>
        }
    }
}