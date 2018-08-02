declare namespace java {
    namespace nio {
        abstract class DoubleBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.DoubleBuffer> {
            public static allocate(arg0: int): java.nio.DoubleBuffer
            public static wrap(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
            public static wrap(arg0: double[]): java.nio.DoubleBuffer
            public slice(): java.nio.DoubleBuffer
            public duplicate(): java.nio.DoubleBuffer
            public asReadOnlyBuffer(): java.nio.DoubleBuffer
            public get(): double
            public put(arg0: double): java.nio.DoubleBuffer
            public get(arg0: int): double
            public put(arg0: int, arg1: double): java.nio.DoubleBuffer
            public get(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
            public get(arg0: double[]): java.nio.DoubleBuffer
            public put(arg0: java.nio.DoubleBuffer): java.nio.DoubleBuffer
            public put(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
            public put(arg0: double[]): java.nio.DoubleBuffer
            public hasArray(): boolean
            public array(): double[]
            public arrayOffset(): int
            public compact(): java.nio.DoubleBuffer
            public isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.DoubleBuffer): int
            public order(): java.nio.ByteOrder
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}