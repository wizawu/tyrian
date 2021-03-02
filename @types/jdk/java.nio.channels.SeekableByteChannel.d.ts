declare namespace java {
  namespace nio {
    namespace channels {

      interface SeekableByteChannel extends java.nio.channels.ByteChannel {
        read(arg0: java.nio.ByteBuffer): number
        write(arg0: java.nio.ByteBuffer): number
        position(): number
        position(arg0: number | java.lang.Long): java.nio.channels.SeekableByteChannel
        size(): number
        truncate(arg0: number | java.lang.Long): java.nio.channels.SeekableByteChannel
      }

    }
  }
}
