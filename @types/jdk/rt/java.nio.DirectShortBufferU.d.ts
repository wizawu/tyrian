declare namespace java {
    namespace nio {
class DirectShortBufferU extends java.nio.ShortBuffer implements sun.nio.ch.DirectBuffer {
    protected static unsafe: sun.misc.Unsafe
    protected static unaligned: boolean
    public attachment(): java.lang.Object
    public cleaner(): sun.misc.Cleaner
    public slice(): java.nio.ShortBuffer
    public duplicate(): java.nio.ShortBuffer
    public asReadOnlyBuffer(): java.nio.ShortBuffer
    public address(): long
    public get(): short
    public get(arg0: int): short
    public get(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
    public put(arg0: short): java.nio.ShortBuffer
    public put(arg0: int, arg1: short): java.nio.ShortBuffer
    public put(arg0: java.nio.ShortBuffer): java.nio.ShortBuffer
    public put(arg0: short[], arg1: int, arg2: int): java.nio.ShortBuffer
    public compact(): java.nio.ShortBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}