declare namespace java {
    namespace nio {
class HeapLongBufferR extends java.nio.HeapLongBuffer {
    protected constructor(arg0: long[], arg1: int, arg2: int, arg3: int, arg4: int, arg5: int)
    public slice(): java.nio.LongBuffer
    public duplicate(): java.nio.LongBuffer
    public asReadOnlyBuffer(): java.nio.LongBuffer
    public isReadOnly(): boolean
    public put(arg0: long): java.nio.LongBuffer
    public put(arg0: int, arg1: long): java.nio.LongBuffer
    public put(arg0: long[], arg1: int, arg2: int): java.nio.LongBuffer
    public put(arg0: java.nio.LongBuffer): java.nio.LongBuffer
    public compact(): java.nio.LongBuffer
    public order(): java.nio.ByteOrder
    public static class: java.lang.Class<any>
}

    }
}