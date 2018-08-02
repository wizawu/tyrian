declare namespace java {
    namespace nio {
        class HeapShortBuffer extends java.nio.ShortBuffer {
            protected constructor(arg0: short[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
            public slice(): java.nio.ShortBuffer
            public duplicate(): java.nio.ShortBuffer
            public asReadOnlyBuffer(): java.nio.ShortBuffer
            protected ix(arg0: int): int
            public get(): short
            public get(arg0: int): short
            public get(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public put(arg0: short): java.nio.ShortBuffer
            public put(arg0: int, arg1: short): java.nio.ShortBuffer
            public put(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
            public put(arg0: java.nio.ShortBuffer): java.nio.ShortBuffer
            public compact(): java.nio.ShortBuffer
            public order(): java.nio.ByteOrder
            public static class: java.lang.Class<any>
        }
    }
}