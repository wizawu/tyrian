declare namespace java {
    namespace nio {
class ByteBufferAsDoubleBufferL extends java.nio.DoubleBuffer {
    protected bb: java.nio.ByteBuffer
    protected offset: int
    public slice(): java.nio.DoubleBuffer
    public duplicate(): java.nio.DoubleBuffer
    public asReadOnlyBuffer(): java.nio.DoubleBuffer
    protected ix(arg0: int): int
    public get(): double
    public get(arg0: int): double
    public put(arg0: double): java.nio.DoubleBuffer
    public put(arg0: int, arg1: double): java.nio.DoubleBuffer
    public compact(): java.nio.DoubleBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}