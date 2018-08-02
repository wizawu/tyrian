declare namespace java {
    namespace nio {
class ByteBufferAsShortBufferB extends java.nio.ShortBuffer {
    protected bb: java.nio.ByteBuffer
    protected offset: int
    public slice(): java.nio.ShortBuffer
    public duplicate(): java.nio.ShortBuffer
    public asReadOnlyBuffer(): java.nio.ShortBuffer
    protected ix(arg0: int): int
    public get(): short
    public get(arg0: int): short
    public put(arg0: short): java.nio.ShortBuffer
    public put(arg0: int, arg1: short): java.nio.ShortBuffer
    public compact(): java.nio.ShortBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}