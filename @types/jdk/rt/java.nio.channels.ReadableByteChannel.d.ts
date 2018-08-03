declare namespace java {
    namespace nio {
        namespace channels {
            interface ReadableByteChannel extends java.nio.channels.Channel {
                read(arg0: java.nio.ByteBuffer): int
            }
            interface ReadableByteChannel$$Lambda extends java.nio.channels.Channel {
                (arg0: java.nio.ByteBuffer): int
            }
        }
    }
}