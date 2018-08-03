declare namespace java {
    namespace nio {
        abstract class CharBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.CharBuffer> , java.lang.Appendable , java.lang.CharSequence , java.lang.Readable {
            public static allocate(arg0: int): java.nio.CharBuffer
            public static wrap(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
            public static wrap(arg0: char[]): java.nio.CharBuffer
            public read(arg0: java.nio.CharBuffer): int
            public static wrap(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.nio.CharBuffer
            public static wrap(arg0: java.lang.CharSequence): java.nio.CharBuffer
            public abstract slice(): java.nio.CharBuffer
            public abstract duplicate(): java.nio.CharBuffer
            public abstract asReadOnlyBuffer(): java.nio.CharBuffer
            public abstract get(): char
            public abstract put(arg0: char): java.nio.CharBuffer
            public abstract get(arg0: int): char
            public abstract put(arg0: int, arg1: char): java.nio.CharBuffer
            public get(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
            public get(arg0: char[]): java.nio.CharBuffer
            public put(arg0: java.nio.CharBuffer): java.nio.CharBuffer
            public put(arg0: char[], arg1: int, arg2: int): java.nio.CharBuffer
            public put(arg0: char[]): java.nio.CharBuffer
            public put(arg0: java.lang.String | string, arg1: int, arg2: int): java.nio.CharBuffer
            public put(arg0: java.lang.String | string): java.nio.CharBuffer
            public hasArray(): boolean
            public array(): char[]
            public arrayOffset(): int
            public abstract compact(): java.nio.CharBuffer
            public abstract isDirect(): boolean
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.CharBuffer): int
            public toString(): string
            public length(): int
            public charAt(arg0: int): char
            public abstract subSequence(arg0: int, arg1: int): java.nio.CharBuffer
            public append(arg0: java.lang.CharSequence): java.nio.CharBuffer
            public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.nio.CharBuffer
            public append(arg0: char): java.nio.CharBuffer
            public abstract order(): java.nio.ByteOrder
            public chars(): java.util.stream.IntStream
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public append(arg0: char): java.lang.Appendable
            public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
            public append(arg0: java.lang.CharSequence): java.lang.Appendable
            public subSequence(arg0: int, arg1: int): java.lang.CharSequence
            public static class: java.lang.Class<any>
        }
    }
}