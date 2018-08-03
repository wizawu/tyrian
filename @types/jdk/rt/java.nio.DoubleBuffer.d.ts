declare namespace java {
    namespace nio {
        abstract class DoubleBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.DoubleBuffer> {
            public static allocate(arg0: int): java.nio.DoubleBuffer
            public static wrap(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
            public static wrap(arg0: double[]): java.nio.DoubleBuffer
            public abstract slice(): java.nio.DoubleBuffer
            public abstract duplicate(): java.nio.DoubleBuffer
            public abstract asReadOnlyBuffer(): java.nio.DoubleBuffer
            public abstract get(): double
            public abstract put(arg0: double): java.nio.DoubleBuffer
            public abstract get(arg0: int): double
            public abstract put(arg0: int, arg1: double): java.nio.DoubleBuffer
            public get(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
            public get(arg0: double[]): java.nio.DoubleBuffer
            public put(arg0: java.nio.DoubleBuffer): java.nio.DoubleBuffer
            public put(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
            public put(arg0: double[]): java.nio.DoubleBuffer
            public hasArray(): boolean
            public array(): double[]
            public arrayOffset(): int
            public abstract compact(): java.nio.DoubleBuffer
            public abstract isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.DoubleBuffer): int
            public abstract order(): java.nio.ByteOrder
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}