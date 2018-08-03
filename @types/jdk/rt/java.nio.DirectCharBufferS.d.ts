declare namespace java {
    namespace nio {
        class DirectCharBufferS extends java.nio.CharBuffer implements sun.nio.ch.DirectBuffer {
            protected static readonly unsafe: sun.misc.Unsafe
            protected static readonly unaligned: boolean
            public attachment(): java.lang.Object
            public cleaner(): sun.misc.Cleaner
            public slice(): java.nio.CharBuffer
            public duplicate(): java.nio.CharBuffer
            public asReadOnlyBuffer(): java.nio.CharBuffer
            public address(): long
            public get(): char
            public get(arg0: int): char
            public get(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
            public put(arg0: char): java.nio.CharBuffer
            public put(arg0: int, arg1: char): java.nio.CharBuffer
            public put(arg0: java.nio.CharBuffer): java.nio.CharBuffer
            public put(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
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