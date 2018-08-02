declare namespace java {
    namespace nio {
class DirectFloatBufferRU extends java.nio.DirectFloatBufferU implements sun.nio.ch.DirectBuffer {
    public slice(): java.nio.FloatBuffer
    public duplicate(): java.nio.FloatBuffer
    public asReadOnlyBuffer(): java.nio.FloatBuffer
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