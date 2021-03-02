declare namespace java {
  namespace nio {
    namespace channels {

      interface ScatteringByteChannel extends java.nio.channels.ReadableByteChannel {
        read(arg0: java.nio.ByteBuffer[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        read(arg0: java.nio.ByteBuffer[]): number
      }

    }
  }
}
