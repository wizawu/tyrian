declare namespace java {
  namespace net {
    namespace http {
      interface HttpRequest$BodyPublisher extends java.util.concurrent.Flow$Publisher<java.nio.ByteBuffer> {
        contentLength(): number
      }
    }
  }
}
