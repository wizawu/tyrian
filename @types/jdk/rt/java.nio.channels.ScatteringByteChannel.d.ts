declare namespace java {
    namespace nio {
        namespace channels {
            interface ScatteringByteChannel extends java.nio.channels.ReadableByteChannel {
                read(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
                read(arg0: java.nio.ByteBuffer[]): long
            }
        }
    }
}