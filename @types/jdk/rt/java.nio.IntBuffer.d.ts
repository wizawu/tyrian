declare namespace java {
    namespace nio {
abstract class IntBuffer extends java.nio.Buffer implements java.lang.Comparable<java.nio.IntBuffer> {
    public static allocate(arg0: int): java.nio.IntBuffer
    public static wrap(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
    public static wrap(arg0: int[]): java.nio.IntBuffer
    public slice(): java.nio.IntBuffer
    public duplicate(): java.nio.IntBuffer
    public asReadOnlyBuffer(): java.nio.IntBuffer
    public get(): int
    public put(arg0: int): java.nio.IntBuffer
    public get(arg0: int): int
    public put(arg0: int, arg1: int): java.nio.IntBuffer
    public get(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
    public get(arg0: int[]): java.nio.IntBuffer
    public put(arg0: java.nio.IntBuffer): java.nio.IntBuffer
    public put(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
    public put(arg0: int[]): java.nio.IntBuffer
    public hasArray(): boolean
    public array(): int[]
    public arrayOffset(): int
    public compact(): java.nio.IntBuffer
    public isDirect(): boolean
    public toString(): string
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public compareTo(arg0: java.nio.IntBuffer): int
    public order(): java.nio.ByteOrder
    public array(): java.lang.Object
    public compareTo(arg0: java.lang.Object): int
    public static class: java.lang.Class<any>
}

    }
}