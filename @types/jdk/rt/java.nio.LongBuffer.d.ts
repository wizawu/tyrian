declare namespace java {
    namespace nio {
        abstract class LongBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.LongBuffer> {
            public static allocate(arg0: int): java.nio.LongBuffer
            public static wrap(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
            public static wrap(arg0: long[]): java.nio.LongBuffer
            public abstract slice(): java.nio.LongBuffer
            public abstract duplicate(): java.nio.LongBuffer
            public abstract asReadOnlyBuffer(): java.nio.LongBuffer
            public abstract get(): long
            public abstract put(arg0: long): java.nio.LongBuffer
            public abstract get(arg0: int): long
            public abstract put(arg0: int, arg1: long): java.nio.LongBuffer
            public get(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
            public get(arg0: long[]): java.nio.LongBuffer
            public put(arg0: java.nio.LongBuffer): java.nio.LongBuffer
            public put(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
            public put(arg0: long[]): java.nio.LongBuffer
            public hasArray(): boolean
            public array(): long[]
            public arrayOffset(): int
            public abstract compact(): java.nio.LongBuffer
            public abstract isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.LongBuffer): int
            public abstract order(): java.nio.ByteOrder
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}