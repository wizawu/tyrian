declare namespace java {
    namespace nio {
        class ByteBufferAsCharBufferL extends java.nio.CharBuffer {
            protected bb: java.nio.ByteBuffer
            protected offset: int
            public slice(): java.nio.CharBuffer
            public duplicate(): java.nio.CharBuffer
            public asReadOnlyBuffer(): java.nio.CharBuffer
            protected ix(arg0: int): int
            public get(): char
            public get(arg0: int): char
            public put(arg0: char): java.nio.CharBuffer
            public put(arg0: int, arg1: char): java.nio.CharBuffer
            public compact(): java.nio.CharBuffer
            public isDirect(): boolean
            public isReadOnly(): boolean
            public toString(arg0: int, arg1: int): string
            public subSequence(arg0: int, arg1: int): java.nio.CharBuffer
            public order(): java.nio.ByteOrder
            public subSequence(arg0: int, arg1: int): java.lang.CharSequence
            public static class: java.lang.Class<any>
        }
    }
}