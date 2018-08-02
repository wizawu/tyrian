declare namespace java {
    namespace nio {
class DirectDoubleBufferS extends java.nio.DoubleBuffer implements sun.nio.ch.DirectBuffer {
    protected static unsafe: sun.misc.Unsafe
    protected static unaligned: boolean
    public attachment(): java.lang.Object
    public cleaner(): sun.misc.Cleaner
    public slice(): java.nio.DoubleBuffer
    public duplicate(): java.nio.DoubleBuffer
    public asReadOnlyBuffer(): java.nio.DoubleBuffer
    public address(): long
    public get(): double
    public get(arg0: int): double
    public get(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
    public put(arg0: double): java.nio.DoubleBuffer
    public put(arg0: int, arg1: double): java.nio.DoubleBuffer
    public put(arg0: java.nio.DoubleBuffer): java.nio.DoubleBuffer
    public put(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
    public compact(): java.nio.DoubleBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}