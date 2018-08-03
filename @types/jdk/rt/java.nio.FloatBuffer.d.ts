declare namespace java {
    namespace nio {
        abstract class FloatBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.FloatBuffer> {
            public static allocate(arg0: int): java.nio.FloatBuffer
            public static wrap(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
            public static wrap(arg0: float[]): java.nio.FloatBuffer
            public abstract slice(): java.nio.FloatBuffer
            public abstract duplicate(): java.nio.FloatBuffer
            public abstract asReadOnlyBuffer(): java.nio.FloatBuffer
            public abstract get(): float
            public abstract put(arg0: float): java.nio.FloatBuffer
            public abstract get(arg0: int): float
            public abstract put(arg0: int, arg1: float): java.nio.FloatBuffer
            public get(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
            public get(arg0: float[]): java.nio.FloatBuffer
            public put(arg0: java.nio.FloatBuffer): java.nio.FloatBuffer
            public put(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
            public put(arg0: float[]): java.nio.FloatBuffer
            public hasArray(): boolean
            public array(): float[]
            public arrayOffset(): int
            public abstract compact(): java.nio.FloatBuffer
            public abstract isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.FloatBuffer): int
            public abstract order(): java.nio.ByteOrder
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}