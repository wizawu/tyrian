declare namespace java {
    namespace nio {
        namespace channels {
interface GatheringByteChannel extends java.nio.channels.WritableByteChannel {
    write(arg0: java.nio.ByteBuffer[], arg1: int, arg2: int): long
    write(arg0: java.nio.ByteBuffer[]): long
}

        }
    }
}