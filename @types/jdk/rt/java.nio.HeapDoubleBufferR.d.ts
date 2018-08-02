declare namespace java {
    namespace nio {
class HeapDoubleBufferR extends java.nio.HeapDoubleBuffer {
    protected constructor(arg0: double[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
    public slice(): java.nio.DoubleBuffer
    public duplicate(): java.nio.DoubleBuffer
    public asReadOnlyBuffer(): java.nio.DoubleBuffer
    public isReadOnly(): boolean
    public put(arg0: double): java.nio.DoubleBuffer
    public put(arg0: int, arg1: double): java.nio.DoubleBuffer
    public put(arg0: double[], arg1: int, arg2: int): java.nio.DoubleBuffer
    public put(arg0: java.nio.DoubleBuffer): java.nio.DoubleBuffer
    public compact(): java.nio.DoubleBuffer
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}