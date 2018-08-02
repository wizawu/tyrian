declare namespace java {
    namespace nio {
        namespace channels {
interface SeekableByteChannel extends java.nio.channels.ByteChannel {
    read(arg0: java.nio.ByteBuffer): int
    write(arg0: java.nio.ByteBuffer): int
    position(): long
    position(arg0: long): java.nio.channels.SeekableByteChannel
    size(): long
    truncate(arg0: long): java.nio.channels.SeekableByteChannel
}

        }
    }
}