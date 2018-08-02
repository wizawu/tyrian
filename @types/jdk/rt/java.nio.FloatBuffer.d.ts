declare namespace java {
    namespace nio {
        abstract class FloatBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.FloatBuffer> {
            public static allocate(arg0: int): java.nio.FloatBuffer
            public static wrap(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
            public static wrap(arg0: float[]): java.nio.FloatBuffer
            public slice(): java.nio.FloatBuffer
            public duplicate(): java.nio.FloatBuffer
            public asReadOnlyBuffer(): java.nio.FloatBuffer
            public get(): float
            public put(arg0: float): java.nio.FloatBuffer
            public get(arg0: int): float
            public put(arg0: int, arg1: float): java.nio.FloatBuffer
            public get(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
            public get(arg0: float[]): java.nio.FloatBuffer
            public put(arg0: java.nio.FloatBuffer): java.nio.FloatBuffer
            public put(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
            public put(arg0: float[]): java.nio.FloatBuffer
            public hasArray(): boolean
            public array(): float[]
            public arrayOffset(): int
            public compact(): java.nio.FloatBuffer
            public isDirect(): boolean
            public toString(): string
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: java.nio.FloatBuffer): int
            public order(): java.nio.ByteOrder
            public array(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}