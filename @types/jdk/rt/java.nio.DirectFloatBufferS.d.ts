declare namespace java {
    namespace nio {
class DirectFloatBufferS extends java.nio.FloatBuffer implements sun.nio.ch.DirectBuffer {
    protected static unsafe: sun.misc.Unsafe
    protected static unaligned: boolean
    public attachment(): java.lang.Object
    public cleaner(): sun.misc.Cleaner
    public slice(): java.nio.FloatBuffer
    public duplicate(): java.nio.FloatBuffer
    public asReadOnlyBuffer(): java.nio.FloatBuffer
    public address(): long
    public get(): float
    public get(arg0: int): float
    public get(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
    public put(arg0: float): java.nio.FloatBuffer
    public put(arg0: int, arg1: float): java.nio.FloatBuffer
    public put(arg0: java.nio.FloatBuffer): java.nio.FloatBuffer
    public put(arg0: float[], arg1: int, arg2: int): java.nio.FloatBuffer
    public compact(): java.nio.FloatBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}