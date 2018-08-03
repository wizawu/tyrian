declare namespace java {
    namespace nio {
        abstract class ShortBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.ShortBuffer> {
            public static allocate(arg0: int): java.nio.ShortBuffer
            public static wrap(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
            public static wrap(arg0: short[]): java.nio.ShortBuffer
            public abstract slice(): java.nio.ShortBuffer
            public abstract duplicate(): java.nio.ShortBuffer
            public abstract asReadOnlyBuffer(): java.nio.ShortBuffer
            public abstract get(): short
            public abstract put(arg0: short): java.nio.ShortBuffer
            public abstract get(arg0: int): short
            public abstract put(arg0: int, arg1: short): java.nio.ShortBuffer
            public get(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
            public get(arg0: short[]): java.nio.ShortBuffer
            public put(arg0: java.nio.ShortBuffer): java.nio.ShortBuffer
            public put(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
            public put(arg0: short[]): java.nio.ShortBuffer
            public hasArray(): boolean
            public array(): short[]
            public arrayOffset(): int
            public abstract compact(): java.nio.ShortBuffer
            public abstract isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.ShortBuffer): int
            public abstract order(): java.nio.ByteOrder
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}