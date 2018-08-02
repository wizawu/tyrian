declare namespace java {
    namespace nio {
class DirectByteBufferR extends java.nio.DirectByteBuffer implements sun.nio.ch.DirectBuffer {
    protected constructor(arg0: int, arg1: long, arg2: java.io.FileDescriptor, arg3: java.lang.Runnable | java.lang.Runnable$$Lambda)
    public slice(): java.nio.ByteBuffer
    public duplicate(): java.nio.ByteBuffer
    public asReadOnlyBuffer(): java.nio.ByteBuffer
    public put(arg0: byte): java.nio.ByteBuffer
    public put(arg0: int, arg1: byte): java.nio.ByteBuffer
    public put(arg0: java.nio.ByteBuffer): java.nio.ByteBuffer
    public put(arg0: byte[], arg1: int, arg2: int): java.nio.ByteBuffer
    public compact(): java.nio.ByteBuffer
    public isDirect(): boolean
    public isReadOnly(): boolean
    public putChar(arg0: char): java.nio.ByteBuffer
    public putChar(arg0: int, arg1: char): java.nio.ByteBuffer
    public asCharBuffer(): java.nio.CharBuffer
    public putShort(arg0: short): java.nio.ByteBuffer
    public putShort(arg0: int, arg1: short): java.nio.ByteBuffer
    public asShortBuffer(): java.nio.ShortBuffer
    public putInt(arg0: int): java.nio.ByteBuffer
    public putInt(arg0: int, arg1: int): java.nio.ByteBuffer
    public asIntBuffer(): java.nio.IntBuffer
    public putLong(arg0: long): java.nio.ByteBuffer
    public putLong(arg0: int, arg1: long): java.nio.ByteBuffer
    public asLongBuffer(): java.nio.LongBuffer
    public putFloat(arg0: float): java.nio.ByteBuffer
    public putFloat(arg0: int, arg1: float): java.nio.ByteBuffer
    public asFloatBuffer(): java.nio.FloatBuffer
    public putDouble(arg0: double): java.nio.ByteBuffer
    public putDouble(arg0: int, arg1: double): java.nio.ByteBuffer
    public asDoubleBuffer(): java.nio.DoubleBuffer
    public static class: java.lang.Class<any>
}

    }
}