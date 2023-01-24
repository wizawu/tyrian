declare namespace java {
  namespace lang {
    namespace module {
      interface ModuleReader extends java.io.Closeable {
        find(arg0: java.lang.String | string): java.util.Optional<java.net.URI>
        open(arg0: java.lang.String | string): java.util.Optional<java.io.InputStream>
        read(arg0: java.lang.String | string): java.util.Optional<java.nio.ByteBuffer>
        release(arg0: java.nio.ByteBuffer): void
        list(): java.util.stream.Stream<java.lang.String>
        close(): void
      }
    }
  }
}
