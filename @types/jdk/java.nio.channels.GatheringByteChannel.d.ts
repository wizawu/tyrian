declare namespace java {
  namespace nio {
    namespace channels {

      interface GatheringByteChannel extends java.nio.channels.WritableByteChannel {
        write(arg0: java.nio.ByteBuffer[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
        write(arg0: java.nio.ByteBuffer[]): number
      }

    }
  }
}
