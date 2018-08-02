declare namespace sun {
    namespace misc {
interface JavaNioAccess {
    getDirectBufferPool(): sun.misc.JavaNioAccess$BufferPool
    newDirectByteBuffer(arg0: long, arg1: int, arg2: java.lang.Object): java.nio.ByteBuffer
    truncate(arg0: java.nio.Buffer): void
}

    }
}