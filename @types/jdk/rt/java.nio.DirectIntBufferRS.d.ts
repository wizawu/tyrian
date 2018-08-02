declare namespace java {
    namespace nio {
class DirectIntBufferRS extends java.nio.DirectIntBufferS implements sun.nio.ch.DirectBuffer {
    public slice(): java.nio.IntBuffer
    public duplicate(): java.nio.IntBuffer
    public asReadOnlyBuffer(): java.nio.IntBuffer
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