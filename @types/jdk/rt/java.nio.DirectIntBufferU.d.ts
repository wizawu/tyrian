declare namespace java {
    namespace nio {
class DirectIntBufferU extends java.nio.IntBuffer implements sun.nio.ch.DirectBuffer {
    protected static unsafe: sun.misc.Unsafe
    protected static unaligned: boolean
    public attachment(): java.lang.Object
    public cleaner(): sun.misc.Cleaner
    public slice(): java.nio.IntBuffer
    public duplicate(): java.nio.IntBuffer
    public asReadOnlyBuffer(): java.nio.IntBuffer
    public address(): long
    public get(): int
    public get(arg0: int): int
    public get(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
    public put(arg0: int): java.nio.IntBuffer
    public put(arg0: int, arg1: int): java.nio.IntBuffer
    public put(arg0: java.nio.IntBuffer): java.nio.IntBuffer
    public put(arg0: int[], arg1: int, arg2: int): java.nio.IntBuffer
    public compact(): java.nio.IntBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}