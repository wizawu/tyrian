declare namespace java {
  namespace nio {
    namespace channels {

      interface AsynchronousByteChannel extends java.nio.channels.AsynchronousChannel {

        read<A>(arg0: java.nio.ByteBuffer, arg1: A, arg2: java.nio.channels.CompletionHandler<java.lang.Integer,unknown>): void
        read(arg0: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer>
        write<A>(arg0: java.nio.ByteBuffer, arg1: A, arg2: java.nio.channels.CompletionHandler<java.lang.Integer,unknown>): void
        write(arg0: java.nio.ByteBuffer): java.util.concurrent.Future<java.lang.Integer>
      }

    }
  }
}
