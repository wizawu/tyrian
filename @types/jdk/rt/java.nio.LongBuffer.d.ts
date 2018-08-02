declare namespace java {
    namespace nio {
        abstract class LongBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.LongBuffer> {
            public static allocate(arg0: int): java.nio.LongBuffer
            public static wrap(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
            public static wrap(arg0: long[]): java.nio.LongBuffer
            public slice(): java.nio.LongBuffer
            public duplicate(): java.nio.LongBuffer
            public asReadOnlyBuffer(): java.nio.LongBuffer
            public get(): long
            public put(arg0: long): java.nio.LongBuffer
            public get(arg0: int): long
            public put(arg0: int, arg1: long): java.nio.LongBuffer
            public get(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
            public get(arg0: long[]): java.nio.LongBuffer
            public put(arg0: java.nio.LongBuffer): java.nio.LongBuffer
            public put(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
            public put(arg0: long[]): java.nio.LongBuffer
            public hasArray(): boolean
            public array(): long[]
            public arrayOffset(): int
            public compact(): java.nio.LongBuffer
            public isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.LongBuffer): int
            public order(): java.nio.ByteOrder
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}